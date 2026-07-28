import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Accessibility, Activity, MessageSquare, Facebook, Instagram, Star, ShoppingBag, Shield, Dumbbell, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useSettings } from '../hooks/useSettings';
import { useCatalog } from '../hooks/useCatalog';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';

export default function Orthopedics() {
  const { settings } = useSettings();
  const { categories, loading: loadingCatalog } = useCatalog();
  const cleanNumber = settings.phoneWhatsapp.replace(/\D/g, '');
  const baseMessage = encodeURIComponent("¡Hola! Necesito consultar sobre Turnos y Servicios.");
  const getProductMessage = () => encodeURIComponent("¡Hola! Me gustaría consultar por un producto.");
  const whatsappUrl = `https://wa.me/54${cleanNumber}`;

  const orthopedicsSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Ortopedia Benedetti",
    "alternateName": "Área de Ortopedia y Rehabilitación - Consultorios Benedetti",
    "image": "https://eaeapp.com/imagenes-ia/benedetti/fondo-hero-ortopedia-3.png",
    "telephone": settings.phoneLine || "+54 11 1122-3344",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": settings.address || "Dirección en Lanús Este",
      "addressLocality": "Lanús Este",
      "addressRegion": "Buenos Aires",
      "postalCode": "1824",
      "addressCountry": "AR"
    },
    "url": "https://consultoriosbenedetti.com.ar/ortopedia",
    "priceRange": "$$",
    "medicalSpecialty": "Orthopedics",
    "description": "Equipamiento de ortopedia y elementos de rehabilitación en Lanús Este. Venta y alquiler de muletas, sillas de ruedas y fajas bajo el respaldo de kinesiólogos profesionales.",
    "knowsAbout": [
      "Ortopedia",
      "Kinesiología",
      "Fisioterapia",
      "Rehabilitación Física",
      "Plantillas Ortopédicas",
      "Sillas de Ruedas",
      "Andadores",
      "Órtesis",
      "Neoprene médico"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "employee": {
      "@type": "Person",
      "name": "Lic. Mariano Benedetti",
      "jobTitle": "Kinesiólogo y Director de Ortopedia",
      "knowsLanguage": "es"
    }
  };

  return (
    <div className="bg-white">
      <SEO 
        title="Ortopedia y Rehabilitación en Lanús"
        description="Ortopedia Benedetti. Venta y alquiler de artículos ortopédicos, bastones, muletas, andadores y fajas de neoprene. Asesoramiento personalizado por Kinesiólogos."
      />
      <StructuredData data={orthopedicsSchema} />

      {/* Hero Section */}
      <section className="relative w-full h-screen md:h-[80vh] flex items-center overflow-hidden pt-64 md:pt-20">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-[bottom_right]" 
          style={{ backgroundImage: 'url("https://eaeapp.com/imagenes-ia/benedetti/fondo-hero-ortopedia-3.png")' }}
          role="img"
          aria-label="Artículos de ortopedia y equipamiento de rehabilitación"
        >
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Container */}
            <div className="bg-white/30 p-8 rounded-3xl shadow-xl backdrop-blur-md border border-white/20 max-w-lg space-y-6 relative -mt-[150px] md:mt-0">
              {/* Social Icons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <a href="https://www.facebook.com/consultoriosbenedetti" target="_blank" rel="noopener noreferrer" className="p-1.5 bg-[#0088CC] text-white rounded-full hover:bg-[#0077aa] transition" aria-label="Facebook de Consultorios Benedetti"><Facebook size={14} /></a>
                {settings.instagramUrl && (
                  <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-[#0088CC] text-white rounded-full hover:bg-[#0077aa] transition" aria-label="Instagram de Consultorios Benedetti"><Instagram size={14} /></a>
                )}
              </div>

              <h1 className="mt-4 text-[33px] font-bold text-[#1A3A5A] leading-[40px]">
                <span className="text-[#0088CC]">Consultorios Benedetti</span>
                <br />
                Todo para tu recuperación, en un solo lugar.
              </h1>
              <p className="text-lg text-gray-600">
                Incorporamos un área de ortopedia y rehabilitación. Productos seleccionados por profesionales, para venta y alquiler. Consultanos y te orientamos sin compromiso.
              </p>
              <a href={`${whatsappUrl}?text=${baseMessage}`} className="inline-block bg-[#0088CC] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#006699] transition-all shadow-lg hover:shadow-blue-500/30">
                Reserva tu consulta
              </a>
            </div>
            
            {/* Right side space for the floating card, usually empty in split screen, card is positioned absolutely below */}
          </div>
        </div>

        {/* Floating Card (positioned absolutely in bottom right) */}
      </section>

      {/* Services */}
      <section className="py-24 bg-white mt-10 md:mt-0" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-4">Servicios Especializados en Ortopedia</h2>
            <div className="w-24 h-1.5 bg-[#0088CC] mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'Venta y Alquiler Ortopédico', desc: 'Amplio catálogo de muletas, bastones, sillas de ruedas, andadores y más equipamiento.' },
              { icon: Shield, title: 'Elementos de Neoprene', desc: 'Rodilleras, tobilleras, muñequeras, coderas y fajas con compresión premium.' },
              { icon: Dumbbell, title: 'Rehabilitación Kinésica en Casa', desc: 'Bandas elásticas, pelotas medicinales, foam roller y accesorios recomendados.' },
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#F0F7FF] rounded-2xl flex items-center justify-center mb-8">
                  <s.icon className="w-8 h-8 text-[#0088CC]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A3A5A] mb-4">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-gray-50" id="respaldo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <div className="h-80 md:h-full">
              <img 
                src="https://eaeapp.com/imagenes-ia/benedetti/juntos.png" 
                alt="Profesionales de la salud de Consultorios Benedetti brindando asesoramiento en ortopedia" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-8 md:p-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-6">Respaldado por profesionales de la salud</h2>
              <div className="w-24 h-1.5 bg-[#0088CC] rounded-full mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cada producto de nuestro catálogo fue elegido y avalado por kinesiólogos universitarios. Si tenés dudas sobre cuál es el elemento más adecuado para vos, estamos para ayudarte con tu receta o tratamiento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-24 bg-white" id="catalogo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[36px] font-bold text-[#1A3A5A] mb-8 text-center">Nuestro Catálogo de Productos</h2>
          <div className="flex justify-center mb-16">
            <img 
              src="https://eaeapp.com/imagenes-ia/benedetti/top-catalogo-2.jpg" 
              alt="Catálogo completo de ortopedia, traumatología y rehabilitación de Ortopedia Benedetti" 
              className="max-w-full h-auto rounded-3xl" 
            />
          </div>
          <div className="space-y-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.id || i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white text-[#1A3A5A] rounded-3xl overflow-hidden flex flex-col md:flex-row w-full md:w-4/5 mx-auto border border-[#DBE6F2]"
              >
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img src={
                    cat.image && (cat.image.startsWith('http://') || cat.image.startsWith('https://'))
                      ? cat.image
                      : `https://eaeapp.com/imagenes-ia/benedetti/${
                          cat.image === 'spine_back_support' || cat.id === 'spine' ? 'columna-y-espalda.jpg' :
                          cat.image === 'upper_limb_support' || cat.id === 'upper-limb' ? 'miembro-superior.jpg' :
                          cat.image === 'lower_limb_support' || cat.id === 'lower-limb' ? 'miembro-inferior.jpg' :
                          cat.image === 'bandages_therapy' || cat.id === 'bandages' ? 'vendajes.jpg' :
                          cat.image === 'compression_stockings' || cat.id === 'compression' ? 'compresion.jpg' :
                          cat.image === 'mobility_aids' || cat.id === 'mobility' ? 'movilidad.jpg' :
                          cat.image === 'rehab_training' || cat.id === 'rehab' ? 'rehabilitacion.jpg' :
                          cat.image || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
                        }`
                  } alt={`Productos de ortopedia para ${cat.title} - Ortopedia Benedetti`} className="w-full h-full object-cover" />
                </div>
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center bg-[#DBE6F2]">
                  <h3 className="text-3xl font-bold mb-4">{cat.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg">{cat.description}</p>
                  <ul className="mb-8 grid md:grid-cols-2 gap-x-6 gap-y-3">
                    {cat.items && cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 size={18} className="text-[#0088CC] flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <a href={`${whatsappUrl}?text=${getProductMessage()}`} className="inline-block bg-[#1A3A5A] text-white px-8 py-3 rounded-full font-bold hover:bg-[#0f2336] transition-colors w-fit">
                    Consultar productos
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuevo CTA Section */}
      <section className="py-0 bg-white mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl px-8 md:px-12 py-0 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-12">
            {/* Columna Izquierda */}
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] tracking-tight">
                ¿Necesitás algo puntual o no sabés cuál es el producto indicado?
              </h2>
              <p className="text-lg text-gray-600">
                Consultanos directamente. Te asesoramos paso a paso para que elijas el artículo correcto.
              </p>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 bg-[#0088CC] text-white px-8 py-4 rounded-full font-bold hover:bg-[#006699] transition-all text-lg shadow-lg hover:shadow-blue-500/20"
              >
                <MessageSquare className="w-6 h-6" />
                Contactanos
              </Link>
            </div>
            {/* Columna Derecha */}
            <div className="md:w-1/3 w-full flex items-end justify-end relative h-2/3">
              <img 
                src="https://eaeapp.com/imagenes-ia/benedetti/mariano-ortopedia.png" 
                alt="Lic. Mariano Benedetti, especialista en kinesiología y director médico de Ortopedia Benedetti" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

