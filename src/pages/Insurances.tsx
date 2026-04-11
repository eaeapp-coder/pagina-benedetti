import React, { useState, useMemo } from 'react';
import { INSURANCE_PROVIDERS, SPECIALTIES } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { ShieldCheck, Filter, ChevronRight } from 'lucide-react';

export default function Insurances() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const availableSpecialties = useMemo(() => {
    const names = new Set<string>();
    INSURANCE_PROVIDERS.forEach(p => p.specialties.forEach(s => names.add(s)));
    return SPECIALTIES.filter(s => names.has(s.name));
  }, []);

  const filteredProviders = useMemo(() => {
    if (!selectedSpecialty) return INSURANCE_PROVIDERS;
    return INSURANCE_PROVIDERS.filter(provider => 
      provider.specialties.includes(selectedSpecialty)
    );
  }, [selectedSpecialty]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6"
            >
              <ShieldCheck className="w-8 h-8 text-[#0088CC]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A3A5A] mb-4">Obras Sociales y Prepagas</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Trabajamos con una amplia red de coberturas médicas exclusivamente para la especialidad de <span className="text-[#0088CC] font-semibold">Kinesiología</span>.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <aside className="lg:w-64 shrink-0">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-24">
                <div className="flex items-center space-x-2 mb-6 text-[#1A3A5A]">
                  <Filter className="w-5 h-5" />
                  <h2 className="font-bold">Filtrar por Especialidad</h2>
                </div>
                
                <nav className="space-y-2">
                  <button
                    onClick={() => setSelectedSpecialty(null)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                      selectedSpecialty === null 
                        ? 'bg-[#0088CC] text-white shadow-md' 
                        : 'text-gray-600 hover:bg-blue-50 hover:text-[#0088CC]'
                    }`}
                  >
                    <span>Todas</span>
                    {selectedSpecialty === null && <ChevronRight className="w-4 h-4" />}
                  </button>
                  
                  {availableSpecialties.map((spec) => (
                    <button
                      key={spec.id}
                      onClick={() => setSelectedSpecialty(spec.name)}
                      className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                        selectedSpecialty === spec.name 
                          ? 'bg-[#0088CC] text-white shadow-md' 
                          : 'text-gray-600 hover:bg-blue-50 hover:text-[#0088CC]'
                      }`}
                    >
                      <span>{spec.name}</span>
                      {selectedSpecialty === spec.name && <ChevronRight className="w-4 h-4" />}
                    </button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    * Las especialidades de Quiropraxia, Ortopedia y Análisis de la pisada se atienden de forma <span className="font-semibold">particular</span>.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProviders.map((provider, index) => (
                    <motion.div
                      key={provider.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md hover:border-[#0088CC]/30 transition-all group"
                    >
                      <div className="h-20 w-full flex items-center justify-center mb-4 p-2">
                        <img 
                          src={provider.logo} 
                          alt={provider.name} 
                          className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(provider.name)}&background=f0f9ff&color=0088CC&bold=true`;
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#1A3A5A] text-center group-hover:text-[#0088CC] transition-colors">
                        {provider.name}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredProviders.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                  <p className="text-gray-400">No se encontraron obras sociales para esta especialidad.</p>
                </div>
              )}

              <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <p className="text-[#1A3A5A] font-medium">
                  ¿No ves tu obra social en la lista? 
                  <span className="block md:inline md:ml-2 text-gray-500 font-normal">
                    Consúltanos por WhatsApp o teléfono, ya que incorporamos nuevas coberturas regularmente.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
