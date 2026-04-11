import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    id: 1,
    author: "Jonathan Delacour",
    rating: 5,
    text: "Súper recomendables. Quiero hacer una mención especial para el Quiropráctico. Agradezco a su técnica en la especialidad. Gracias a cada sesión que realizó con Esteban, puedo descansar mejor, no despierto con dolores. Y puedo realizar mis actividades con normalidad.",
    date: ""
  },
  {
    id: 2,
    author: "Joaquin Miranda",
    rating: 5,
    text: "muy conforme con las plantilla, cómodas desde el primer dia . super recomendable y exelente atención!!!! gracias."
  },
  {
    id: 3,
    author: "Bruno Fontana",
    rating: 4,
    text: "Muy recomendado. Excelente atención de todo el personal. Empece hace un año y medio por la escoliosis que tengo,note muchas las mejoras con el paso del tiempo,las mejoras no son de un dia para otro,todo lleva su tiempo. No sentis ningun dolor con los ajustes",
    date: "Hace 3 semanas"
  },
  {
    id: 4,
    author: "Brisa Alaniz",
    rating: 5,
    text: "Recomiendo al 100%, venia con muchos dolores de espalda y con las sesiones se fue disminuyendo demasiado junto a ejercicios que me mandaron, la verdad que fue un antes y un despues. Ademas de la buena onda y la amabilidad❤️",
    date: "Hace 2 meses"
  },
  {
    id: 5,
    author: "Analia Grynka",
    rating: 5,
    text: "Mi experiencia es muy positiva. Inicié tratamiento quiropráctico por dolores de cervical y lumbar los cuales fueron mejorando con las sesiones. Hoy estoy en mantenimiento mensual y sigo muy bien.",
    date: "Hace 1 semana"
  },
  {
    id: 6,
    author: "Xoana Drezek",
    rating: 5,
    text: "Excelente atención y cuidado, te explican todo con detalle, están atentos a los ejercicios y son personalizados según el problema que tengas, el personal de recepción súper amorosos yos profesionales son muy simpáticos y alegres, excelente lugar y clima.",
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
                      aria-label={`Reseña de ${review.author}`}
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
                        </div>
                        <img 
                          src="https://eaeapp.com/images-ia/benedetti/logo_google.png" 
                          alt="Google" 
                          className="h-4 opacity-50"
                          referrerPolicy="no-referrer"
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
