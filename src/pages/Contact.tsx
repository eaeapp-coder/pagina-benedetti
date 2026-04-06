import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Youtube, 
  Send,
  Clock,
  MessageSquare
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data
    alert('Mensaje enviado con éxito. Nos pondremos en contacto pronto.');
  };

  return (
    <PageTransition>
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
                      <p className="text-gray-500 text-sm">Buspadalara - Centana 33<br />Buenos Aires, Argentina</p>
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
                      <p className="text-gray-500 text-sm">0800-123-4567<br />(011) 4567-8900</p>
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
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-50 p-4 rounded-2xl group-hover:bg-[#0088CC] transition-colors">
                      <Mail className="w-6 h-6 text-[#0088CC] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1A3A5A]">Email</h4>
                      <p className="text-gray-500 text-sm">consultorio@benedetti.com<br />info@benedetti.com</p>
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
                      <p className="text-gray-500 text-sm">Lun a Vie: 08:00 - 20:00<br />Sáb: 09:00 - 13:00</p>
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
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-100/20 border border-gray-50"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-sm font-bold text-[#1A3A5A] ml-1">Nombre Completo</label>
                      <input 
                        type="text" 
                        id="name" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-[#1A3A5A]"
                        placeholder="Juan Pérez"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-sm font-bold text-[#1A3A5A] ml-1">Correo Electrónico</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-[#1A3A5A]"
                        placeholder="juan@ejemplo.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-sm font-bold text-[#1A3A5A] ml-1">Asunto</label>
                    <select 
                      id="subject" 
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-[#1A3A5A] appearance-none cursor-pointer"
                    >
                      <option value="consulta">Consulta General</option>
                      <option value="turno">Información sobre Turnos</option>
                      <option value="especialidad">Duda sobre Especialidad</option>
                      <option value="otro">Otro motivo</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-sm font-bold text-[#1A3A5A] ml-1">Mensaje</label>
                    <textarea 
                      id="message" 
                      rows={6} 
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-[#0088CC] focus:ring-4 focus:ring-blue-50 outline-none transition-all text-[#1A3A5A] resize-none"
                      placeholder="¿En qué podemos ayudarte?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-[#0088CC] text-white py-5 rounded-[2rem] font-bold text-lg hover:bg-[#0077B3] transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-3 group"
                  >
                    <span>Enviar Mensaje</span>
                    <Send className="w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>

              {/* Map Embed - Integrated into the flow */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[3rem] overflow-hidden shadow-lg border border-gray-100 h-80 relative"
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016713276846!2d-58.3815704!3d-34.6037389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac69d3c7e33%3A0x29fd5d836a5c0c2!2sObelisco!5e0!3m2!1ses!2sar!4v1711468800000!5m2!1ses!2sar" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Consultorios Benedetti"
                ></iframe>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
