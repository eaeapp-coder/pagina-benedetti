import React from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Clock,
  MessageSquare
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { useBusinessHours } from '../hooks/useBusinessHours';

export default function Contact() {
  const { isOpen, statusMessage } = useBusinessHours();

  return (
    <PageTransition>
      <SEO 
        title="Contacto"
        description="Contacta con Consultorios Benedetti en Lanús Este. Solicita tu turno por WhatsApp, consulta nuestros horarios y encuentra nuestra ubicación exacta."
      />
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-2xl mb-6"
            >
              <MessageSquare className="w-8 h-8 text-[#0088CC]" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-[#1A3A5A] mb-6 tracking-tight"
            >
              Estamos para <span className="text-[#0088CC]">ayudarte</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Ponte en contacto con nosotros para cualquier consulta o para programar tu visita. 
              Nuestro equipo te responderá a la brevedad.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Contact Info Cards - Bento Style */}
            <div className="lg:col-span-5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#0088CC] transition-colors">
                      <MapPin className="w-6 h-6 text-[#0088CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3A5A]">Ubicación</h4>
                      <p className="text-gray-500 text-sm">29 de Setiembre 2168<br />Lanús Este, Buenos Aires</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#0088CC] transition-colors">
                      <Phone className="w-6 h-6 text-[#0088CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3A5A]">Teléfono</h4>
                      <p className="text-gray-500 text-sm">20717674 (Linea)<br />011 2288 3581 (Whatsapp)</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-50 p-4 rounded-2xl group-hover:bg-green-500 transition-colors">
                        <MessageSquare className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A3A5A]">Solicitar Turno Online</h4>
                        <p className="text-gray-500 text-sm">Atención inmediata por WhatsApp</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <a 
                        href={isOpen ? "https://wa.me/5491122883581" : "#"} 
                        target={isOpen ? "_blank" : undefined} 
                        rel={isOpen ? "noopener noreferrer" : undefined}
                        className={`w-full py-3 rounded-xl font-bold text-center transition-all shadow-md flex items-center justify-center space-x-2 ${
                          isOpen 
                            ? "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg" 
                            : "bg-green-500/40 text-white/70 cursor-not-allowed pointer-events-none"
                        }`}
                        onClick={(e) => !isOpen && e.preventDefault()}
                      >
                        <span>Escribir por WhatsApp</span>
                      </a>
                      {!isOpen && (
                        <p className="text-[10px] text-gray-400 mt-2 font-medium">
                          {statusMessage}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#0088CC] transition-colors">
                      <Clock className="w-6 h-6 text-[#0088CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3A5A]">Horarios</h4>
                      <p className="text-gray-500 text-sm">Mar. a Jue. – 11:00 a 20:00<br />Lun. Mie. y Vie. – 08:00 a 18:00</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A3A5A] p-8 rounded-[2rem] text-white overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
                <h3 className="text-xl font-bold mb-6 relative z-10">Síguenos</h3>
                <div className="flex space-x-4 relative z-10">
                  <a href="https://www.instagram.com/consultoriosbenedetti" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.facebook.com/consultoriosbenedetti/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Map Section */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-[3rem] shadow-xl shadow-blue-100/20 border border-gray-50 h-[600px]"
              >
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.764516843431!2d-58.38456272341991!3d-34.7111059644485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccd376510803d%3A0x5e0f56f1083439f!2s29%20de%20Setiembre%202168%2C%20B1824%20Lan%C3%BAs%20Este%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1712868000000!5m2!1ses!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación Consultorios Benedetti"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
