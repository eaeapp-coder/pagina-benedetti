import React from 'react';
import { SPECIALTIES } from '../constants';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function SpecialtyCards() {
  const featured = SPECIALTIES.slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20" aria-label="Especialidades principales">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((spec, index) => (
          <motion.div
            key={spec.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link 
              to={`/especialidades/${spec.id}`}
              className="block bg-white p-8 rounded-2xl shadow-lg border border-gray-50 hover:shadow-2xl transition-all group cursor-pointer h-full"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="bg-blue-50 p-4 rounded-xl group-hover:bg-[#0088CC] transition-colors relative">
                  <spec.icon className="w-8 h-8 text-[#0088CC] group-hover:text-white transition-colors" />
                  {spec.id === 'traumatology' && (
                    <span className="absolute -top-2 -right-2 bg-[#0088CC] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white">
                      NUEVO
                    </span>
                  )}
                </div>
                <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-[#1A3A5A] mb-3 group-hover:text-[#0088CC] transition-colors">{spec.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {spec.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
