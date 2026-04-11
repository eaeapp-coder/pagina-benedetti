import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { DOCTORS } from '../constants';
import { motion } from 'motion/react';
import { 
  ChevronLeft, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Clock, 
  CheckCircle2,
  Mail
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function ProfessionalProfile() {
  const { id } = useParams<{ id: string }>();
  const doctor = DOCTORS.find(d => d.id === id);

  if (!doctor) {
    return <Navigate to="/profesionales" replace />;
  }

  return (
    <PageTransition>
      <main className="bg-[#F8FAFC] min-h-screen pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/profesionales" 
            className="inline-flex items-center text-gray-500 hover:text-[#0088CC] mb-8 transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 mr-1 transform group-hover:-translate-x-1 transition-transform" />
            Volver a profesionales
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Profile Info */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-50 shadow-inner mx-auto">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-[#0088CC] p-2 rounded-full border-4 border-white shadow-lg">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                </div>

                <h1 className="text-2xl font-bold text-[#1A3A5A] mb-2">{doctor.name}</h1>
                <p className="text-[#0088CC] font-semibold mb-6">{doctor.specialties.join(', ')}</p>

                <div className="space-y-4 text-left border-t border-gray-100 pt-6">
                  {doctor.availability && (
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Disponibilidad</p>
                        <p className="text-sm text-gray-600">{doctor.availability}</p>
                      </div>
                    </div>
                  )}
                  {doctor.languages && (
                    <div className="flex items-start space-x-3">
                      <Languages className="w-5 h-5 text-gray-400 shrink-0" />
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Idiomas</p>
                        <p className="text-sm text-gray-600">{doctor.languages.join(', ')}</p>
                      </div>
                    </div>
                  )}
                </div>

                <Link 
                  to="/contacto" 
                  className="mt-8 w-full inline-flex items-center justify-center bg-[#0088CC] text-white py-4 rounded-2xl font-bold hover:bg-[#0077B3] transition-all shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contactar
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-[#1A3A5A] mb-6">Sobre el Profesional</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {doctor.bio || 'Información biográfica no disponible en este momento.'}
                </p>
              </motion.section>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Education */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-[#0088CC]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#1A3A5A]">Formación</h2>
                  </div>
                  <ul className="space-y-4">
                    {doctor.education?.map((edu, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0088CC] mt-1.5 shrink-0" />
                        <span>{edu}</span>
                      </li>
                    )) || <li className="text-gray-400 italic">No especificada</li>}
                  </ul>
                </motion.section>

                {/* Experience */}
                <motion.section 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Briefcase className="w-6 h-6 text-[#0088CC]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#1A3A5A]">Experiencia</h2>
                  </div>
                  <ul className="space-y-4">
                    {doctor.experience?.map((exp, i) => (
                      <li key={i} className="flex items-start space-x-3 text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0088CC] mt-1.5 shrink-0" />
                        <span>{exp}</span>
                      </li>
                    )) || <li className="text-gray-400 italic">No especificada</li>}
                  </ul>
                </motion.section>
              </div>

              {/* Specializations/Skills (Optional/Mocked) */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
              >
                <h2 className="text-xl font-bold text-[#1A3A5A] mb-6">Áreas de Especialización</h2>
                <div className="flex flex-wrap gap-3">
                  {['Diagnóstico Preventivo', 'Atención Personalizada', 'Seguimiento Clínico', 'Tecnología Médica'].map((skill, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-50 text-[#0088CC] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
