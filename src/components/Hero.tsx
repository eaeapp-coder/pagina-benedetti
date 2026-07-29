import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://eaeapp.com/imagenes-ia/benedetti/portada-web-2.jpg" 
          alt="Medical Center"
          className="w-full h-full object-cover object-left"
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
            className="text-[48px] font-bold text-[#1A3A5A] leading-tight md:leading-[1.1] mb-6"
          >
            Más de <span className="text-[#0088CC]">10 años</span> acompañando<br />
            tu recuperación
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 mb-10 max-w-lg"
          >
            Somos un equipo de profesionales de la salud con más de una década de experiencia en kinesiología, quiropraxia, análisis de pisada y ortopedia. Atención personalizada y seguimiento constante para recuperar tu calidad de vida.
          </motion.p>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-32 top-1/2 -translate-y-1/2 hidden lg:block">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://eaeapp.com/imagenes-ia/benedetti/10.png"
          alt="10 Años Logo"
          className="w-64 h-auto"
        />
      </div>
    </section>
  );
}
