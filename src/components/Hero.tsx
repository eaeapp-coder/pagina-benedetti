import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical Center"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-[#1A3A5A] leading-tight mb-6"
          >
            Tu Salud,<br />
            <span className="text-[#0088CC]">Nuestra Prioridad</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-10 max-w-lg"
          >
            Contamos con un equipo de Profesionales dedicados y amplias instalaciones preparadas para brindarle un servicio cálido, eficiente y de calidad.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center bg-white p-2 rounded-full shadow-xl max-w-md border border-gray-100"
          >
            <div className="flex-1 flex items-center px-4">
              <Search className="text-gray-400 w-5 h-5 mr-2" />
              <input 
                type="text" 
                placeholder="Buscar especialista o servicio..."
                className="w-full text-sm focus:outline-none text-gray-700"
              />
            </div>
            <button className="bg-[#0088CC] text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-[#0077B3] transition-colors">
              Buscar
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-[500px] h-[500px] bg-[#0088CC]/10 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </section>
  );
}
