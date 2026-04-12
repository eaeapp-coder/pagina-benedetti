import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useSettings, AppSettings } from '../hooks/useSettings';
import { useReviews } from '../hooks/useReviews';
import { useProfessionals } from '../hooks/useProfessionals';
import { useInsurances } from '../hooks/useInsurances';
import { SPECIALTIES, Doctor, InsuranceProvider, INSURANCE_PROVIDERS } from '../constants';
import { 
  Lock, Save, LogOut, Settings as SettingsIcon, Loader2, MessageSquare, 
  Star as StarIcon, Plus, Eye, EyeOff, Users, Shield, Trash2, Edit2, X
} from 'lucide-react';

type AdminTab = 'general' | 'professionals' | 'reviews' | 'insurances';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<AdminTab>('general');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  const { settings, loading: settingsLoading } = useSettings();
  const { reviews, addReview } = useReviews();
  const { professionals, addProfessional, updateProfessional, deleteProfessional } = useProfessionals();
  const { insurances, addInsurance, updateInsurance, deleteInsurance } = useInsurances();
  
  const [isImporting, setIsImporting] = useState(false);
  const [formData, setFormData] = useState<AppSettings | null>(null);
  const [showProfForm, setShowProfForm] = useState(false);
  const [showInsForm, setShowInsForm] = useState(false);
  
  // Review form state
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  // Professional form state
  const [editingProfessional, setEditingProfessional] = useState<Doctor | null>(null);
  const [profName, setProfName] = useState('');
  const [profImage, setProfImage] = useState('');
  const [profSpecialties, setProfSpecialties] = useState<string[]>([]);
  const [profBio, setProfBio] = useState('');
  const [profAvailability, setProfAvailability] = useState('');
  const [profEducation, setProfEducation] = useState<string[]>([]);
  const [profExperience, setProfExperience] = useState<string[]>([]);
  const [profSpecializations, setProfSpecializations] = useState<string[]>([]);
  const [newEdu, setNewEdu] = useState('');
  const [newExp, setNewExp] = useState('');
  const [newSpec, setNewSpec] = useState('');

  // Insurance form state
  const [editingInsurance, setEditingInsurance] = useState<InsuranceProvider | null>(null);
  const [insName, setInsName] = useState('');
  const [insLogo, setInsLogo] = useState('');
  const [insSpecialties, setInsSpecialties] = useState<string[]>([]);

  useEffect(() => {
    setIsMounted(true);
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!settingsLoading && settings && !formData) {
      setFormData(settings);
    }
  }, [settings, settingsLoading, formData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    
    const loginEmail = username.includes('@') ? username : `${username.toLowerCase()}@benedetti.com`;
    
    try {
      await signInWithEmailAndPassword(auth, loginEmail, password);
    } catch (err) {
      setLoginError('Credenciales inválidas. Por favor intente de nuevo.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    setIsSaving(true);
    try {
      await setDoc(doc(db, 'settings', 'global'), { ...formData }, { merge: true });
      alert('Configuración guardada con éxito.');
    } catch (err) {
      console.error(err);
      alert('Error al guardar la configuración.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor || !reviewText) return;
    setIsAddingReview(true);
    try {
      await addReview({
        author: reviewAuthor,
        rating: reviewRating,
        text: reviewText
      });
      setReviewAuthor('');
      setReviewText('');
      setReviewRating(5);
      alert('Reseña agregada con éxito.');
    } catch (err) {
      console.error(err);
      alert('Error al agregar la reseña.');
    } finally {
      setIsAddingReview(false);
    }
  };

  const handleProfessionalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: profName,
      image: profImage,
      specialties: profSpecialties,
      bio: profBio,
      availability: profAvailability,
      education: profEducation,
      experience: profExperience,
      specializations: profSpecializations
    };

    try {
      if (editingProfessional) {
        await updateProfessional(editingProfessional.id, data);
        alert('Profesional actualizado.');
      } else {
        await addProfessional(data);
        alert('Profesional agregado.');
      }
      resetProfForm();
    } catch (err) {
      console.error(err);
      alert('Error al procesar profesional.');
    }
  };

  const resetProfForm = () => {
    setEditingProfessional(null);
    setProfName('');
    setProfImage('');
    setProfSpecialties([]);
    setProfBio('');
    setProfAvailability('');
    setProfEducation([]);
    setProfExperience([]);
    setProfSpecializations([]);
    setNewEdu('');
    setNewExp('');
    setNewSpec('');
    setShowProfForm(false);
  };

  const startEditProf = (prof: Doctor) => {
    setEditingProfessional(prof);
    setProfName(prof.name);
    setProfImage(prof.image);
    setProfSpecialties(prof.specialties);
    setProfBio(prof.bio || '');
    setProfAvailability(prof.availability || '');
    setProfEducation(prof.education || []);
    setProfExperience(prof.experience || []);
    setProfSpecializations(prof.specializations || []);
    setShowProfForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInsuranceSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      name: insName,
      logo: insLogo,
      specialties: insSpecialties
    };

    try {
      if (editingInsurance) {
        await updateInsurance(editingInsurance.id, data);
        alert('Obra social actualizada.');
      } else {
        await addInsurance(data);
        alert('Obra social agregada.');
      }
      resetInsForm();
    } catch (err) {
      console.error(err);
      alert('Error al procesar obra social.');
    }
  };

  const resetInsForm = () => {
    setEditingInsurance(null);
    setInsName('');
    setInsLogo('');
    setInsSpecialties([]);
    setShowInsForm(false);
  };

  const startEditIns = (ins: InsuranceProvider) => {
    setEditingInsurance(ins);
    setInsName(ins.name);
    setInsLogo(ins.logo);
    setInsSpecialties(ins.specialties);
    setShowInsForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBulkImportInsurances = async () => {
    if (!confirm('¿Deseas cargar la lista predefinida de obras sociales? Esto agregará las que no existan.')) return;
    setIsImporting(true);
    try {
      const existingNames = new Set(insurances.map(i => i.name.toLowerCase()));
      const toAdd = INSURANCE_PROVIDERS.filter(i => !existingNames.has(i.name.toLowerCase()));
      
      for (const ins of toAdd) {
        const { id, ...data } = ins;
        await addInsurance(data);
      }
      alert(`Se agregaron ${toAdd.length} obras sociales nuevas.`);
    } catch (err) {
      console.error(err);
      alert('Error al importar obras sociales.');
    } finally {
      setIsImporting(false);
    }
  };

  if (isAuthLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="animate-spin text-[#0088CC] w-12 h-12 mx-auto mb-4" />
          <p className="text-gray-500 animate-pulse font-medium">Verificando sesión...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-[#0088CC] w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-[#1A3A5A]">Panel de Control</h1>
            <p className="text-gray-500">Ingresa tus credenciales para continuar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
              <input 
                type="text" 
                required 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="cbenedetti"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}
            <button 
              type="submit" 
              disabled={isLoggingIn}
              className="w-full bg-[#1A3A5A] text-white py-3 rounded-xl font-bold hover:bg-[#254a70] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {isLoggingIn ? <Loader2 className="animate-spin w-5 h-5" /> : <span>Iniciar Sesión</span>}
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (settingsLoading || !formData || !isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="animate-spin text-[#0088CC] w-12 h-12 mx-auto mb-4" />
          <p className="text-gray-500 animate-pulse font-medium">Cargando panel de control...</p>
        </div>
      </div>
    );
  }

  const NavItem = ({ id, label, icon: Icon }: { id: AdminTab, label: string, icon: any }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-6 py-4 transition-all ${
        activeTab === id 
          ? 'bg-blue-50 text-[#0088CC] border-r-4 border-[#0088CC] font-bold' 
          : 'text-gray-500 hover:bg-gray-50'
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full pt-20 z-10 hidden md:block">
        <div className="py-8">
          <NavItem id="general" label="Información General" icon={SettingsIcon} />
          <NavItem id="professionals" label="Profesionales" icon={Users} />
          <NavItem id="reviews" label="Reviews" icon={MessageSquare} />
          <NavItem id="insurances" label="Obras Sociales" icon={Shield} />
        </div>
        <div className="absolute bottom-8 w-full px-6">
          <button 
            onClick={() => signOut(auth)}
            className="flex items-center text-gray-400 hover:text-red-500 transition-colors font-medium w-full"
          >
            <LogOut className="mr-2 w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Mobile Nav Header */}
          <div className="md:hidden flex overflow-x-auto bg-white rounded-xl shadow-sm mb-8 p-2 space-x-2">
            <button onClick={() => setActiveTab('general')} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${activeTab === 'general' ? 'bg-blue-50 text-[#0088CC] font-bold' : 'text-gray-500'}`}>General</button>
            <button onClick={() => setActiveTab('professionals')} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${activeTab === 'professionals' ? 'bg-blue-50 text-[#0088CC] font-bold' : 'text-gray-500'}`}>Profesionales</button>
            <button onClick={() => setActiveTab('reviews')} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${activeTab === 'reviews' ? 'bg-blue-50 text-[#0088CC] font-bold' : 'text-gray-500'}`}>Reviews</button>
            <button onClick={() => setActiveTab('insurances')} className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap ${activeTab === 'insurances' ? 'bg-blue-50 text-[#0088CC] font-bold' : 'text-gray-500'}`}>Obras Sociales</button>
          </div>

          {/* Section: General Settings */}
          {activeTab === 'general' && (
            <div className="space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#1A3A5A]">Información General</h1>
                <p className="text-gray-500">Gestiona la información de contacto y horarios del sitio</p>
              </div>
              
              {settingsLoading || !formData ? (
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-12 flex flex-col items-center justify-center">
                  <Loader2 className="animate-spin text-[#0088CC] w-10 h-10 mb-4" />
                  <p className="text-gray-500 font-medium">Cargando configuración...</p>
                </div>
              ) : (
                <form onSubmit={handleSaveSettings} className="space-y-6">
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Dirección Física</label>
                      <input 
                        type="text" 
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono Línea</label>
                      <input 
                        type="text" 
                        value={formData.phoneLine}
                        onChange={(e) => setFormData({...formData, phoneLine: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp (Número)</label>
                      <input 
                        type="text" 
                        value={formData.phoneWhatsapp}
                        onChange={(e) => setFormData({...formData, phoneWhatsapp: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Horarios: Mar. a Jue.</label>
                      <input 
                        type="text" 
                        value={formData.hoursTueThu}
                        onChange={(e) => setFormData({...formData, hoursTueThu: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Horarios: Lun. Mie. y Vie.</label>
                      <input 
                        type="text" 
                        value={formData.hoursMonWedFri}
                        onChange={(e) => setFormData({...formData, hoursMonWedFri: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Resumen Página "Nosotros" (Hero)</label>
                      <input 
                        type="text" 
                        value={formData.aboutHero}
                        onChange={(e) => setFormData({...formData, aboutHero: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Historia Página "Nosotros" (Cuerpo)</label>
                      <textarea 
                        value={formData.aboutText} 
                        onChange={(e) => setFormData({...formData, aboutText: e.target.value})}
                        rows={10}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-y font-mono text-sm"
                        placeholder="Escribe la historia aquí. Usa Enter para separar párrafos."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Instagram (URL)</label>
                      <input 
                        type="text" 
                        value={formData.instagramUrl || ''}
                        onChange={(e) => setFormData({...formData, instagramUrl: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="https://www.instagram.com/..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Facebook (URL)</label>
                      <input 
                        type="text" 
                        value={formData.facebookUrl || ''}
                        onChange={(e) => setFormData({...formData, facebookUrl: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="https://www.facebook.com/..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn (URL)</label>
                      <input 
                        type="text" 
                        value={formData.linkedinUrl || ''}
                        onChange={(e) => setFormData({...formData, linkedinUrl: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                        placeholder="https://www.linkedin.com/..."
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <button 
                      type="submit" 
                      disabled={isSaving}
                      className="bg-[#1A3A5A] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#254a70] transition-all flex items-center space-x-2 disabled:opacity-50"
                    >
                      {isSaving ? <Loader2 className="animate-spin w-5 h-5" /> : <Save className="w-5 h-5" />}
                      <span>Guardar Información</span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}

          {/* Section: Professionals */}
          {activeTab === 'professionals' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-[#1A3A5A]">Profesionales</h1>
                  <p className="text-gray-500">Administra el equipo médico y sus especialidades</p>
                </div>
                {!showProfForm && (
                  <button 
                    onClick={() => setShowProfForm(true)}
                    className="bg-[#0088CC] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#0077B3] transition-all flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar Profesional</span>
                  </button>
                )}
              </div>

              {/* Form to Add/Edit */}
              {showProfForm && (
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-[#1A3A5A] mb-6 flex items-center">
                    {editingProfessional ? <Edit2 className="mr-2 text-[#0088CC]" /> : <Plus className="mr-2 text-[#0088CC]" />}
                    {editingProfessional ? 'Editar Profesional' : 'Agregar Nuevo Profesional'}
                  </h2>
                  <form onSubmit={handleProfessionalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                      <input type="text" required value={profName} onChange={e => setProfName(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: Lic. Juan Pérez" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">URL Imagen</label>
                      <input type="text" required value={profImage} onChange={e => setProfImage(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Especialidades</label>
                      <div className="flex flex-wrap gap-2">
                        {SPECIALTIES.map(s => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              if (profSpecialties.includes(s.name)) {
                                setProfSpecialties(profSpecialties.filter(x => x !== s.name));
                              } else {
                                setProfSpecialties([...profSpecialties, s.name]);
                              }
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              profSpecialties.includes(s.name) ? 'bg-[#0088CC] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Biografía / Información Detallada</label>
                      <textarea 
                        value={profBio} 
                        onChange={e => setProfBio(e.target.value)} 
                        rows={6} 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 resize-y" 
                        placeholder="Describe la trayectoria del profesional. Usa Enter para separar párrafos."
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Disponibilidad / Horarios</label>
                      <input type="text" value={profAvailability} onChange={e => setProfAvailability(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: Lunes y Miércoles 14:00 a 19:00" />
                    </div>

                    {/* Specializations */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Áreas de Especialización</label>
                      <div className="space-y-2 mb-3">
                        {profSpecializations.map((spec, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-blue-50 px-4 py-2 rounded-xl">
                            <span className="text-sm text-gray-700">{spec}</span>
                            <button 
                              type="button" 
                              onClick={() => setProfSpecializations(profSpecializations.filter((_, i) => i !== idx))}
                              className="text-red-400 hover:text-red-600"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          value={newSpec} 
                          onChange={e => setNewSpec(e.target.value)} 
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" 
                          placeholder="Ej: Rehabilitación de columna" 
                        />
                        <button 
                          type="button" 
                          onClick={() => { if(newSpec) { setProfSpecializations([...profSpecializations, newSpec]); setNewSpec(''); } }}
                          className="bg-blue-50 text-[#0088CC] px-4 py-2 rounded-xl font-bold hover:bg-blue-100"
                        >
                          Añadir
                        </button>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Formación Académica</label>
                      <div className="space-y-2 mb-3">
                        {profEducation.map((edu, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-blue-50 px-4 py-2 rounded-xl">
                            <span className="text-sm text-gray-700">{edu}</span>
                            <button 
                              type="button" 
                              onClick={() => setProfEducation(profEducation.filter((_, i) => i !== idx))}
                              className="text-red-400 hover:text-red-600"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          value={newEdu} 
                          onChange={e => setNewEdu(e.target.value)} 
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" 
                          placeholder="Ej: Lic. en Kinesiología - UBA" 
                        />
                        <button 
                          type="button" 
                          onClick={() => { if(newEdu) { setProfEducation([...profEducation, newEdu]); setNewEdu(''); } }}
                          className="bg-blue-50 text-[#0088CC] px-4 py-2 rounded-xl font-bold hover:bg-blue-100"
                        >
                          Añadir
                        </button>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experiencia Profesional</label>
                      <div className="space-y-2 mb-3">
                        {profExperience.map((exp, idx) => (
                          <div key={idx} className="flex items-center justify-between bg-blue-50 px-4 py-2 rounded-xl">
                            <span className="text-sm text-gray-700">{exp}</span>
                            <button 
                              type="button" 
                              onClick={() => setProfExperience(profExperience.filter((_, i) => i !== idx))}
                              className="text-red-400 hover:text-red-600"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <input 
                          type="text" 
                          value={newExp} 
                          onChange={e => setNewExp(e.target.value)} 
                          className="flex-1 px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" 
                          placeholder="Ej: Especialista en rehabilitación funcional" 
                        />
                        <button 
                          type="button" 
                          onClick={() => { if(newExp) { setProfExperience([...profExperience, newExp]); setNewExp(''); } }}
                          className="bg-blue-50 text-[#0088CC] px-4 py-2 rounded-xl font-bold hover:bg-blue-100"
                        >
                          Añadir
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button type="button" onClick={resetProfForm} className="px-6 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 font-bold">
                      {editingProfessional ? 'Cancelar' : 'Cerrar'}
                    </button>
                    <button type="submit" className="bg-[#0088CC] text-white px-8 py-2 rounded-xl font-bold hover:bg-[#0077B3] transition-all">
                      {editingProfessional ? 'Actualizar' : 'Agregar'}
                    </button>
                  </div>
                </form>
              </div>
              )}

              {/* List */}
              <div className="grid grid-cols-1 gap-4">
                {professionals.map(prof => (
                  <div key={prof.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img src={prof.image} alt={prof.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="font-bold text-[#1A3A5A]">{prof.name}</h3>
                        <p className="text-xs text-[#0088CC]">{prof.specialties.join(', ')}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => startEditProf(prof)} className="p-2 text-gray-400 hover:text-blue-500 transition-colors"><Edit2 size={18} /></button>
                      <button onClick={() => { if(confirm('¿Borrar profesional?')) deleteProfessional(prof.id) }} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-8">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-[#1A3A5A]">Reseñas</h1>
                <p className="text-gray-500">Gestiona los testimonios que aparecen en la web</p>
              </div>
              <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
                <form onSubmit={handleAddReview} className="bg-gray-50 p-6 rounded-2xl space-y-4">
                  <h3 className="font-bold text-[#1A3A5A] flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Agregar Nueva Reseña
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Firma (Nombre)</label>
                      <input type="text" required value={reviewAuthor} onChange={(e) => setReviewAuthor(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Calificación (1-5)</label>
                      <div className="flex items-center space-x-2 h-10">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button key={star} type="button" onClick={() => setReviewRating(star)} className="focus:outline-none">
                            <StarIcon className={`w-6 h-6 ${star <= reviewRating ? 'fill-[#FABB05] text-[#FABB05]' : 'text-gray-300'}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Comentario</label>
                      <textarea required value={reviewText} onChange={(e) => setReviewText(e.target.value)} rows={3} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500 resize-none" />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button type="submit" disabled={isAddingReview} className="bg-[#0088CC] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#0077B3] transition-all flex items-center space-x-2 disabled:opacity-50">
                      {isAddingReview ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      <span>Agregar Reseña</span>
                    </button>
                  </div>
                </form>
                <div className="space-y-4">
                  <h3 className="font-bold text-[#1A3A5A]">Reseñas Actuales</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {reviews.map((review) => (
                      <div key={review.id} className="flex items-start justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                        <div className="flex-1">
                          <div className="flex items-center space-x-1 mb-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <StarIcon key={i} className="w-3 h-3 fill-[#FABB05] text-[#FABB05]" />
                            ))}
                          </div>
                          <p className="text-sm text-gray-600 italic mb-1 line-clamp-2">"{review.text}"</p>
                          <p className="text-xs font-bold text-[#1A3A5A]">— {review.author}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section: Insurances */}
          {activeTab === 'insurances' && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-[#1A3A5A]">Obras Sociales</h1>
                  <p className="text-gray-500">Administra las coberturas médicas aceptadas</p>
                </div>
                <div className="flex items-center space-x-3">
                  {!showInsForm && (
                    <button 
                      onClick={() => setShowInsForm(true)}
                      className="bg-[#0088CC] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#0077B3] transition-all flex items-center space-x-2"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Agregar Obra Social</span>
                    </button>
                  )}
                  <button 
                    onClick={handleBulkImportInsurances}
                    disabled={isImporting}
                    className="bg-blue-50 text-[#0088CC] px-6 py-2 rounded-xl font-bold hover:bg-blue-100 transition-all flex items-center space-x-2 disabled:opacity-50"
                  >
                    {isImporting ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    <span>Cargar Lista desde Web</span>
                  </button>
                </div>
              </div>

              {/* Form to Add/Edit */}
              {showInsForm && (
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8">
                  <h2 className="text-xl font-bold text-[#1A3A5A] mb-6 flex items-center">
                    {editingInsurance ? <Edit2 className="mr-2 text-[#0088CC]" /> : <Plus className="mr-2 text-[#0088CC]" />}
                    {editingInsurance ? 'Editar Obra Social' : 'Agregar Nueva Obra Social'}
                  </h2>
                  <form onSubmit={handleInsuranceSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nombre de la Obra Social</label>
                      <input type="text" required value={insName} onChange={e => setInsName(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ej: OSDE" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">URL Logo</label>
                      <input type="text" required value={insLogo} onChange={e => setInsLogo(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Especialidades Cubiertas</label>
                      <div className="flex flex-wrap gap-2">
                        {SPECIALTIES.map(s => (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() => {
                              if (insSpecialties.includes(s.name)) {
                                setInsSpecialties(insSpecialties.filter(x => x !== s.name));
                              } else {
                                setInsSpecialties([...insSpecialties, s.name]);
                              }
                            }}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                              insSpecialties.includes(s.name) ? 'bg-[#0088CC] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button type="button" onClick={resetInsForm} className="px-6 py-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 font-bold">
                      {editingInsurance ? 'Cancelar' : 'Cerrar'}
                    </button>
                    <button type="submit" className="bg-[#0088CC] text-white px-8 py-2 rounded-xl font-bold hover:bg-[#0077B3] transition-all">
                      {editingInsurance ? 'Actualizar' : 'Agregar'}
                    </button>
                  </div>
                </form>
              </div>
              )}

              {/* List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {insurances.map(ins => (
                  <div key={ins.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                        <img src={ins.logo} alt={ins.name} className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#1A3A5A]">{ins.name}</h3>
                        <p className="text-xs text-gray-400">{ins.specialties.length} especialidades</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={() => startEditIns(ins)} className="p-2 text-gray-400 hover:text-blue-500 transition-colors"><Edit2 size={18} /></button>
                      <button onClick={() => { if(confirm('¿Borrar obra social?')) deleteInsurance(ins.id) }} className="p-2 text-gray-400 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
