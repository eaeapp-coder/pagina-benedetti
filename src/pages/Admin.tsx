import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useSettings, AppSettings } from '../hooks/useSettings';
import { useReviews } from '../hooks/useReviews';
import { Lock, Save, LogOut, Settings as SettingsIcon, Loader2, MessageSquare, Star as StarIcon, Plus, Eye, EyeOff } from 'lucide-react';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isAddingReview, setIsAddingReview] = useState(false);
  const { settings, loading: settingsLoading } = useSettings();
  const { reviews, addReview } = useReviews();
  const [formData, setFormData] = useState<AppSettings | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  // Review form state
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    setIsMounted(true);
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setIsAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (settings && !formData) {
      setFormData(settings);
    }
  }, [settings, formData]);

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

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;
    setIsSaving(true);
    try {
      await setDoc(doc(db, 'settings', 'global'), { ...formData }, { merge: true });
      alert('Configuración guardada con éxito.');
    } catch (err) {
      console.error(err);
      alert('Error al guardar la configuración. Verifique sus permisos.');
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

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-[#1A3A5A] flex items-center">
              <SettingsIcon className="mr-3 text-[#0088CC]" />
              Panel de Administración
            </h1>
            <p className="text-gray-500">Gestiona la información del sitio y las reseñas</p>
          </div>
          <button 
            onClick={() => signOut(auth)}
            className="flex items-center text-gray-500 hover:text-red-500 transition-colors font-medium"
          >
            <LogOut className="mr-2 w-5 h-5" />
            Cerrar Sesión
          </button>
        </div>

        <div className="space-y-12">
          {/* Settings Form */}
          <form onSubmit={handleSave} className="space-y-6">
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
              <div className="flex items-center space-x-3 border-b pb-4">
                <SettingsIcon className="text-[#0088CC] w-6 h-6" />
                <h2 className="text-xl font-bold text-[#1A3A5A]">Información General</h2>
              </div>
              
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
                    placeholder="Breve resumen debajo del título..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Historia Página "Nosotros" (Cuerpo)</label>
                  <textarea 
                    value={formData.aboutText} 
                    onChange={(e) => setFormData({...formData, aboutText: e.target.value})}
                    rows={10}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-y font-mono text-sm"
                    placeholder="Escribe la historia aquí (puedes usar HTML básico)..."
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

          {/* Reviews Form */}
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
            <div className="flex items-center space-x-3 border-b pb-4">
              <MessageSquare className="text-[#0088CC] w-6 h-6" />
              <h2 className="text-xl font-bold text-[#1A3A5A]">Gestionar Reseñas</h2>
            </div>

            <form onSubmit={handleAddReview} className="bg-gray-50 p-6 rounded-2xl space-y-4">
              <h3 className="font-bold text-[#1A3A5A] flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Agregar Nueva Reseña
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Firma (Nombre)</label>
                  <input 
                    type="text" 
                    required
                    value={reviewAuthor}
                    onChange={(e) => setReviewAuthor(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Calificación (1-5)</label>
                  <div className="flex items-center space-x-2 h-10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setReviewRating(star)}
                        className="focus:outline-none"
                      >
                        <StarIcon 
                          className={`w-6 h-6 ${star <= reviewRating ? 'fill-[#FABB05] text-[#FABB05]' : 'text-gray-300'}`} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comentario</label>
                  <textarea 
                    required
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    placeholder="Escribe aquí el testimonio del paciente..."
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  disabled={isAddingReview}
                  className="bg-[#0088CC] text-white px-6 py-2 rounded-xl font-bold hover:bg-[#0077B3] transition-all flex items-center space-x-2 disabled:opacity-50"
                >
                  {isAddingReview ? <Loader2 className="animate-spin w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  <span>Agregar Reseña</span>
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <h3 className="font-bold text-[#1A3A5A]">Reseñas Actuales (Máximo 6)</h3>
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
                {reviews.length === 0 && (
                  <p className="text-center text-gray-400 py-4 italic">No hay reseñas personalizadas cargadas. Se muestran las de Google por defecto.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
