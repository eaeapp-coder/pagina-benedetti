import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewServiceHighlight() {
  return (
    <section className="py-24 overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100/50 border border-blue-50 overflow-hidden"
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-blue-50 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-10 md:p-16 lg:p-20 flex flex-col justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-blue-50 text-[#0088CC] px-4 py-2 rounded-full text-sm font-bold mb-8 w-fit"
              >
                <Sparkles className="w-4 h-4" />
                <span>NUEVA ESPECIALIDAD</span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-[#1A3A5A] mb-6 leading-tight">
                Presentamos nuestra nueva área de <span className="text-[#0088CC]">Ortopedia</span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl">
                Ampliamos nuestros servicios para brindarte una atención aún más completa. 
                Nuestro equipo de especialistas en ortopedia está listo para ayudarte con el diagnóstico, 
                tratamiento y rehabilitación de lesiones del sistema musculoesquelético.
              </p>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/especialidades" 
                  className="bg-[#0088CC] text-white px-6 py-3 rounded-full font-bold text-base hover:bg-[#0077B3] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center whitespace-nowrap"
                >
                  Ver Especialidad
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link 
                  to="/profesionales" 
                  className="bg-white text-[#1A3A5A] border-2 border-[#1A3A5A]/10 px-6 py-3 rounded-full font-bold text-base hover:bg-gray-50 transition-all flex items-center justify-center whitespace-nowrap"
                >
                  Ver Profesionales
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="relative h-80 lg:h-auto bg-blue-50">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  className="relative"
                >
                  <div className="w-72 h-72 md:w-[378px] md:h-[378px] bg-white rounded-[2rem] shadow-xl overflow-hidden transform -rotate-6">
                    <img 
                      src="https://eaeapp.com/imagenes-ia/benedetti/ortopedia.jpg" 
                      alt="Ortopedia" 
                      className="w-full h-full object-cover -scale-x-100"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Floating badges */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-2 -right-2 md:-top-6 md:-right-6 bg-white p-3 md:p-4 rounded-2xl shadow-lg border border-blue-50"
                  >
                    <div className="text-[#0088CC] font-bold text-base md:text-lg">Excelencia</div>
                    <div className="text-gray-400 text-[10px] md:text-xs">Médica</div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white p-3 md:p-4 rounded-2xl shadow-lg border border-blue-50"
                  >
                    <div className="text-[#1A3A5A] font-bold text-base md:text-lg">Tecnología</div>
                    <div className="text-gray-400 text-[10px] md:text-xs">de Punta</div>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Image background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0088CC 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
