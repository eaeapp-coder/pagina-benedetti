import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SPECIALTIES, DOCTORS } from '../constants';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { ChevronRight, CheckCircle2, User, ArrowLeft, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import { useBusinessHours } from '../hooks/useBusinessHours';

export default function SpecialtyDetail() {
  const { id } = useParams<{ id: string }>();
  const specialty = SPECIALTIES.find(s => s.id === id);
  const doctors = DOCTORS.filter(d => specialty && d.specialties.includes(specialty.name));
  const { isOpen, statusMessage } = useBusinessHours();

  if (!specialty) {
    return <Navigate to="/especialidades" replace />;
  }

  return (
    <PageTransition>
      <SEO 
        title={specialty.name}
        description={specialty.description}
        canonical={`https://consultoriosbenedetti.com.ar/especialidades/${specialty.id}`}
      />
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs / Back Link */}
          <Link 
            to="/especialidades" 
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#0088CC] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Volver a especialidades
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Info */}
            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <specialty.icon className="w-8 h-8 text-[#0088CC]" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#1A3A5A] mb-6 tracking-tight">
                  {specialty.name}
                </h1>
                <div className="prose prose-lg text-gray-600 max-w-none">
                  <p className="leading-relaxed">
                    {specialty.fullDescription}
                  </p>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#1A3A5A] mb-8">Beneficios y Aplicaciones</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {specialty.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0088CC] mt-0.5 shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Associated Professional */}
              {doctors.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-[#1A3A5A] mb-8">Profesionales Asociados</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {doctors.map(doc => (
                      <Link 
                        key={doc.id}
                        to={`/profesionales/${doc.id}`}
                        className="group bg-white p-6 rounded-3xl border border-gray-100 hover:border-[#0088CC] hover:shadow-xl transition-all flex items-center space-x-4"
                      >
                        <img 
                          src={doc.image} 
                          alt={doc.name} 
                          className="w-20 h-20 rounded-2xl object-cover shadow-sm"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-[#1A3A5A] group-hover:text-[#0088CC] transition-colors">{doc.name}</h4>
                          <div className="flex items-center text-xs text-gray-400 mt-1">
                            <User className="w-3 h-3 mr-1" />
                            Ver perfil completo
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#0088CC] transform group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Column: Images & CTA */}
            <div className="lg:col-span-5 space-y-8">
              {/* Illustrative Photos */}
              <div className="grid grid-cols-1 gap-6">
                {specialty.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-[2.5rem] overflow-hidden shadow-lg aspect-[4/3]"
                  >
                    <img 
                      src={img} 
                      alt={`${specialty.name} illustrative ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quick Contact CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A3A5A] p-10 rounded-[3rem] text-white relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0088CC] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">¿Necesitas una consulta?</h3>
                <p className="text-blue-100 mb-8 relative z-10 leading-relaxed">
                  Agenda una cita con nuestros especialistas en {specialty.name.toLowerCase()} y comienza tu camino hacia el bienestar.
                </p>
                <Link 
                  to="/contacto" 
                  className="inline-flex items-center justify-center w-full bg-[#0088CC] text-white py-4 rounded-2xl font-bold hover:bg-[#0077B3] transition-all shadow-lg relative z-10"
                >
                  Contactar ahora
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
