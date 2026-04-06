import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: "Juan Pérez",
    rating: 5,
    text: "Excelente atención. Los profesionales son muy dedicados y las instalaciones están impecables. Muy recomendable.",
    date: "Hace 2 semanas"
  },
  {
    id: 2,
    author: "María García",
    rating: 5,
    text: "Fui por una sesión de kinesiología y la verdad que el trato fue excelente. Me sentí muy cómoda y bien atendida.",
    date: "Hace 1 mes"
  },
  {
    id: 3,
    author: "Carlos Rodríguez",
    rating: 4,
    text: "Muy buena experiencia con el análisis de la pisada. Me explicaron todo con detalle y me ayudaron mucho con mis dolores.",
    date: "Hace 3 semanas"
  },
  {
    id: 4,
    author: "Ana Martínez",
    rating: 5,
    text: "La mejor atención en traumatología. El doctor fue muy claro en su diagnóstico y el tratamiento está funcionando de maravilla.",
    date: "Hace 2 meses"
  },
  {
    id: 5,
    author: "Roberto Gómez",
    rating: 5,
    text: "Instalaciones modernas y un equipo humano excepcional. Siempre puntualidad en los turnos.",
    date: "Hace 1 semana"
  },
  {
    id: 6,
    author: "Lucía Fernández",
    rating: 5,
    text: "Excelente servicio de quiropraxia. He notado una mejora increíble en mi postura y dolores de espalda.",
    date: "Hace 3 días"
  }
];

export default function ReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(REVIEWS.length / itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className="py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#FABB05] text-[#FABB05]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-4">
            Lo que dicen nuestros <span className="text-[#0088CC]">Pacientes</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Basado en más de 150 reseñas en Google con una calificación promedio de 4.9/5
          </p>
        </div>

        <div className="relative">
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full z-10 px-2 pointer-events-none">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white shadow-lg text-[#1A3A5A] hover:bg-[#0088CC] hover:text-white transition-all pointer-events-auto transform -translate-x-1/2 md:translate-x-0"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white shadow-lg text-[#1A3A5A] hover:bg-[#0088CC] hover:text-white transition-all pointer-events-auto transform translate-x-1/2 md:translate-x-0"
              aria-label="Next review"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="overflow-hidden px-4">
            <motion.div 
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {[...Array(totalPages)].map((_, pageIndex) => (
                <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {REVIEWS.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((review) => (
                    <div 
                      key={review.id}
                      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
                    >
                      <div className="flex items-center space-x-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#FABB05] text-[#FABB05]" />
                        ))}
                      </div>
                      <div className="relative mb-6">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-50 opacity-50" />
                        <p className="text-gray-600 italic relative z-10">"{review.text}"</p>
                      </div>
                      <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                        <div>
                          <p className="font-bold text-[#1A3A5A]">{review.author}</p>
                          <p className="text-xs text-gray-400">{review.date}</p>
                        </div>
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" 
                          alt="Google" 
                          className="h-4 opacity-50"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-center space-x-2 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === i ? 'bg-[#0088CC] w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
