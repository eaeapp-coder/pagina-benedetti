import React from 'react';
import { ShoppingCart, Accessibility, Activity, MessageSquare, Facebook, Instagram, Star, ShoppingBag, Shield, Dumbbell, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { CATALOG_CATEGORIES } from '../constants';
import { useSettings } from '../hooks/useSettings';

export default function Orthopedics() {
  const { settings } = useSettings();
  const cleanNumber = settings.phoneWhatsapp.replace(/\D/g, '');
  const baseMessage = encodeURIComponent("¡Hola! Necesito consultar sobre Turnos y Servicios.");
  const getProductMessage = (title: string) => encodeURIComponent(`¡Hola! Me gustaría consultar por el producto "${title}".`);
  const whatsappUrl = `https://wa.me/54${cleanNumber}`;
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] flex items-center overflow-hidden pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-bottom" 
          style={{ backgroundImage: 'url("https://eaeapp.com/imagenes-ia/benedetti/fondo-hero-ortopedia.jpg")' }}
        >
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Container */}
            <div className="bg-white/30 p-8 rounded-3xl shadow-xl backdrop-blur-md border border-white/20 max-w-lg space-y-6 relative">
              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <a href="#" className="p-1.5 bg-[#0088CC] text-white rounded-full hover:bg-[#0077aa] transition"><Facebook size={14} /></a>
                <a href="#" className="p-1.5 bg-[#0088CC] text-white rounded-full hover:bg-[#0077aa] transition"><Instagram size={14} /></a>
              </div>

              <h1 className="mt-4 text-[34px] font-bold text-[#1A3A5A] leading-[40px]">
                <span className="text-[#0088CC]">Ortopedia Benedetti</span> Todo para tu recuperación, en un solo lugar.
              </h1>
              <p className="text-lg text-gray-600">
                Incorporamos un área de ortopedia y rehabilitación. Productos seleccionados por profesionales, para venta y alquiler. Consultanos y te orientamos sin compromiso.
              </p>
              <a href={`${whatsappUrl}?text=${baseMessage}`} className="inline-block bg-[#0088CC] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#006699] transition-all shadow-lg hover:shadow-blue-500/30">
                Reserva tu consulta
              </a>
              
              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />)}
                </div>
                <div>
                  <div className="flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Más de 500 pacientes satisfechos</p>
                </div>
              </div>
            </div>
            
            {/* Right side space for the floating card, usually empty in split screen, card is positioned absolutely below */}
          </div>
        </div>

        {/* Floating Card (positioned absolutely in bottom right) */}
        <div className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-2xl max-w-[200px] hidden md:block">
          <p className="text-sm font-bold text-gray-900">Congreso de Ortopedia 2026</p>
          <p className="text-xs text-gray-500">15-17 Octubre, 2026</p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1A3A5A] mb-16">Servicios Especializados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'Venta y alquiler', desc: 'Amplio catálogo de muletas, bastones, sillas de ruedas, andadores y más.' },
              { icon: Shield, title: 'Elementos de neoprene', desc: 'Rodilleras, tobilleras, muñequeras, coderas y fajas.' },
              { icon: Dumbbell, title: 'Rehabilitación en casa', desc: 'Bandas elásticas, pelotas medicinales, foam roller y accesorios.' },
            ].map((s, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <s.icon className="w-12 h-12 text-[#0088CC] mb-6" />
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-[#0088CC] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Respaldado por profesionales de la salud</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cada producto de nuestro catálogo fue elegido por kinesiólogos. Si tenés dudas sobre cuál es el elemento más adecuado para vos, estamos para ayudarte.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-24 bg-white" id="catalogo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A3A5A] mb-8 text-center">Nuestro Catálogo</h2>
          <div className="flex justify-center mb-16">
            <img src="https://eaeapp.com/imagenes-ia/benedetti/top-catalogo-2.jpg" alt="Catálogo" className="max-w-full h-auto rounded-3xl" />
          </div>
          <div className="space-y-8">
            {CATALOG_CATEGORIES.map((cat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#1A3A5A] text-white rounded-3xl overflow-hidden flex flex-col md:flex-row w-full md:w-4/5 mx-auto border border-white/20"
              >
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img src={`https://eaeapp.com/imagenes-ia/benedetti/${
                    cat.id === 'spine' ? 'columna-y-espalda.jpg' :
                    cat.id === 'upper-limb' ? 'miembro-superior.jpg' :
                    cat.id === 'lower-limb' ? 'miembro-inferior.jpg' :
                    cat.id === 'bandages' ? 'vendajes.jpg' :
                    cat.id === 'compression' ? 'compresion.jpg' :
                    cat.id === 'mobility' ? 'movilidad.jpg' :
                    cat.id === 'rehab' ? 'rehabilitacion.jpg' :
                    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
                  }`} alt={cat.title} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4">{cat.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg">{cat.description}</p>
                  <ul className="mb-8 space-y-3">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-200">
                        <CheckCircle2 size={18} className="text-[#0088CC] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href={`${whatsappUrl}?text=${getProductMessage(cat.title)}`} className="inline-block bg-white text-[#1A3A5A] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors w-fit">
                    Consultar producto
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuevo CTA Section */}
      <section className="py-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl px-8 md:px-12 py-0 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            {/* Columna Izquierda */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] tracking-tight">
                ¿Necesitás algo puntual o no sabés cuál es el producto indicado?
              </h2>
              <p className="text-lg text-gray-600">
                Consultanos, te ayudamos a elegir.
              </p>
              <a 
                href={`${whatsappUrl}?text=${baseMessage}`} 
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#128C7E] transition-all text-lg shadow-lg hover:shadow-green-500/20"
              >
                <MessageSquare className="w-6 h-6" />
                Comunicate por WhatsApp
              </a>
            </div>
            {/* Columna Derecha */}
            <div className="md:w-1/3 w-full flex items-end justify-end relative h-2/3">
              <img 
                src="https://eaeapp.com/imagenes-ia/benedetti/mariano-ortopedia.png" 
                alt="Lic. Mariano Benedetti" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 py-24" id="contacto">
        <div className="bg-gradient-to-tr from-gray-50 to-blue-50 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#1A3A5A] mb-6">¿Necesitás algo puntual?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo está listo para asesorarte. Consultanos por WhatsApp.
            </p>
            <a href={`${whatsappUrl}?text=${baseMessage}`} className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors">
              <MessageSquare className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
