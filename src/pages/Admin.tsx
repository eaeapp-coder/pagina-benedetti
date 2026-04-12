import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useSettings, AppSettings } from '../hooks/useSettings';
import { handleFirestoreError, OperationType } from '../lib/firestore-utils';
import { motion } from 'motion/react';
import { Lock, Save, LogOut, Settings as SettingsIcon, Loader2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { settings, loading: settingsLoading } = useSettings();
  const [formData, setFormData] = useState<AppSettings | null>(null);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

  React.useEffect(() => {
    if (settings && !formData) {
      setFormData(settings);
    }
  }, [settings]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
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
    const path = 'settings/global';
    try {
      await setDoc(doc(db, 'settings', 'global'), { ...formData }, { merge: true });
      alert('Configuración guardada con éxito.');
    } catch (err) {
      handleFirestoreError(err, OperationType.WRITE, path);
    } finally {
      setIsSaving(false);
    }
  };

  if (!user) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md w-full bg-white rounded-[2rem] shadow-xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="text-[#0088CC] w-8 h-8" />
              </div>
              <h1 className="text-2xl font-bold text-[#1A3A5A]">Panel de Control</h1>
              <p className="text-gray-500">Ingresa tus credenciales para continuar</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="admin@ejemplo.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
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
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  if (settingsLoading || !formData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-[#0088CC] w-12 h-12" />
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#1A3A5A] flex items-center">
                <SettingsIcon className="mr-3 text-[#0088CC]" />
                Configuración del Sitio
              </h1>
              <p className="text-gray-500">Actualiza la información de contacto y horarios</p>
            </div>
            <button 
              onClick={() => signOut(auth)}
              className="flex items-center text-gray-500 hover:text-red-500 transition-colors font-medium"
            >
              <LogOut className="mr-2 w-5 h-5" />
              Cerrar Sesión
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 space-y-6">
              <h2 className="text-xl font-bold text-[#1A3A5A] border-b pb-4">Información de Contacto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
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
              </div>

              <h2 className="text-xl font-bold text-[#1A3A5A] border-b pb-4 pt-4">Horarios de Atención</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mar. a Jue.</label>
                  <input 
                    type="text" 
                    value={formData.hoursTueThu}
                    onChange={(e) => setFormData({...formData, hoursTueThu: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Lun. Mie. y Vie.</label>
                  <input 
                    type="text" 
                    value={formData.hoursMonWedFri}
                    onChange={(e) => setFormData({...formData, hoursMonWedFri: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button 
                type="submit" 
                disabled={isSaving}
                className="bg-[#0088CC] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#0077B3] transition-all shadow-lg hover:shadow-xl flex items-center space-x-2 disabled:opacity-50"
              >
                {isSaving ? <Loader2 className="animate-spin w-5 h-5" /> : <Save className="w-5 h-5" />}
                <span>Guardar Cambios</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
}
