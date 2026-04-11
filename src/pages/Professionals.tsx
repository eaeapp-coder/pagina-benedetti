import React, { useState } from 'react';
import { DOCTORS, SPECIALTIES } from '../constants';
import { motion } from 'motion/react';
import { Check, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

import PageTransition from '../components/PageTransition';

export default function Professionals() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  const filteredDoctors = selectedSpecialty 
    ? DOCTORS.filter(d => d.specialties.includes(selectedSpecialty))
    : DOCTORS;

  const specialtiesList = SPECIALTIES.map(s => s.name);

  return (
    <PageTransition>
      <SEO 
        title="Profesionales"
        description="Conoce a nuestro equipo de profesionales en Consultorios Benedetti. Especialistas en Kinesiología, Quiropraxia y Ortopedia dedicados a tu salud."
      />
      <div className="min-h-screen bg-[#F8FAFC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-lg font-bold text-[#1A3A5A] mb-6">Filtrar por Especialidad</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm transition-all ${
                    selectedSpecialty === null 
                      ? 'bg-blue-50 text-[#0088CC] font-bold' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span>Todas</span>
                  {selectedSpecialty === null && <Check className="w-4 h-4" />}
                </button>
                {specialtiesList.map((spec) => (
                  <button
                    key={spec}
                    onClick={() => setSelectedSpecialty(spec)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-sm transition-all ${
                      selectedSpecialty === spec 
                        ? 'bg-blue-50 text-[#0088CC] font-bold' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{spec}</span>
                    {selectedSpecialty === spec && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-[#1A3A5A] mb-2">Nuestras Especialidades y Profesionales</h1>
              <p className="text-gray-500">Encuentra al profesional adecuado para tu cuidado.</p>
            </div>

            {/* Specialty Sections */}
            <div className="space-y-12">
              {specialtiesList.map(specName => {
                const docsInSpec = filteredDoctors.filter(d => d.specialties.includes(specName));
                if (docsInSpec.length === 0) return null;

                return (
                  <div key={specName}>
                    <h2 className="text-xl font-bold text-[#1A3A5A] mb-6 flex items-center">
                      <span className="w-2 h-8 bg-[#0088CC] rounded-full mr-3"></span>
                      {specName}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {docsInSpec.map((doc) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          key={doc.id}
                          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all"
                        >
                          <div className="aspect-square overflow-hidden">
                            <img 
                              src={doc.image} 
                              alt={doc.name} 
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="p-6 text-center">
                            <h4 className="font-bold text-[#1A3A5A] text-lg mb-1">{doc.name}</h4>
                            <p className="text-[#0088CC] text-sm font-medium mb-6">{doc.specialties.join(', ')}</p>
                            <Link 
                              to={`/profesionales/${doc.id}`}
                              className="block w-full py-3 px-4 rounded-full border-2 border-[#0088CC] text-[#0088CC] font-bold text-sm hover:bg-[#0088CC] hover:text-white transition-all"
                            >
                              Ver Perfil
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  </PageTransition>
);
}
