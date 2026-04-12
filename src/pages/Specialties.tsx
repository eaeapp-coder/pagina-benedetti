import React from 'react';
import { SPECIALTIES } from '../constants';
import { useProfessionals } from '../hooks/useProfessionals';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { ChevronRight, User, Loader2 } from 'lucide-react';
import SEO from '../components/SEO';
import { useBusinessHours } from '../hooks/useBusinessHours';

export default function Specialties() {
  const { professionals, loading } = useProfessionals();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
        <Loader2 className="animate-spin text-[#0088CC] w-12 h-12" />
      </div>
    );
  }

  return (
    <PageTransition>
      <SEO 
        title="Especialidades"
        description="Descubre nuestras especialidades médicas en Consultorios Benedetti: Kinesiología, Quiropraxia, Ortopedia y Análisis de la Pisada. Atención integral en Lanús."
      />
      <div className="min-h-screen bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A3A5A] mb-4">Nuestras Especialidades</h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Contamos con un equipo multidisciplinario de profesionales altamente capacitados para brindarte la mejor atención médica.
            </p>
          </div>

          <div className="space-y-24">
            {SPECIALTIES.map((spec, index) => {
              const docsInSpec = professionals.filter(d => d.specialties.includes(spec.name));
              const hasProfessionals = docsInSpec.length > 0;
              
              return (
                <motion.section 
                  key={spec.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-blue-100/20 border border-blue-50 overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
                    
                    <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12">
                      {/* Specialty Info */}
                      <div className={hasProfessionals ? "lg:col-span-1" : "lg:col-span-3"}>
                        <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                          <spec.icon className="w-8 h-8 text-[#0088CC]" />
                        </div>
                        <h2 className="text-3xl font-bold text-[#1A3A5A] mb-4">{spec.name}</h2>
                        <p className={`text-gray-600 leading-relaxed mb-8 ${!hasProfessionals ? 'max-w-3xl' : ''}`}>
                          {spec.description}
                        </p>
                        <div className="flex flex-col space-y-4">
                          {hasProfessionals && (
                            <div className="flex items-center text-sm font-bold text-[#0088CC]">
                              <User className="w-4 h-4 mr-2" />
                              {docsInSpec.length} {docsInSpec.length === 1 ? 'Profesional' : 'Profesionales'}
                            </div>
                          )}
                          <Link 
                            to={`/especialidades/${spec.id}`}
                            className="inline-flex items-center text-[#0088CC] font-bold hover:underline group"
                          >
                            Ver detalles de la especialidad
                            <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
 
                      {/* Doctors List */}
                      {hasProfessionals && (
                        <div className="lg:col-span-2">
                          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Profesionales en el área</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {docsInSpec.map(doc => (
                              <Link 
                                key={doc.id}
                                to={`/profesionales/${doc.id}`}
                                className="group flex items-center p-4 rounded-2xl border border-gray-100 hover:border-[#0088CC] hover:bg-blue-50/30 transition-all"
                              >
                                <img 
                                  src={doc.image} 
                                  alt={doc.name} 
                                  className="w-14 h-14 rounded-xl object-cover mr-4 shadow-sm"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="flex-1">
                                  <h4 className="font-bold text-[#1A3A5A] group-hover:text-[#0088CC] transition-colors">{doc.name}</h4>
                                  <p className="text-xs text-gray-400">Ver perfil completo</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#0088CC] transform group-hover:translate-x-1 transition-all" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.section>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-24 text-center">
            <div className="bg-[#1A3A5A] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">¿No encuentras lo que buscas?</h2>
              <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto relative z-10">
                Nuestro equipo de atención al paciente está disponible para orientarte y ayudarte a encontrar el profesional adecuado para tu caso.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
                <Link 
                  to="/contacto" 
                  className="bg-[#0088CC] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0077B3] transition-all shadow-lg"
                >
                  Contáctanos
                </Link>
                <Link 
                  to="/obras-sociales" 
                  className="bg-white text-[#1A3A5A] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Obras Sociales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
