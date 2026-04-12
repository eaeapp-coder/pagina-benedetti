import React from 'react';
import Hero from '../components/Hero';
import SpecialtyCards from '../components/SpecialtyCards';
import NewServiceHighlight from '../components/NewServiceHighlight';
import ReviewsSlider from '../components/ReviewsSlider';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import { useSettings } from '../hooks/useSettings';

import PageTransition from '../components/PageTransition';

export default function Home() {
  const { settings } = useSettings();
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Consultorios Benedetti",
    "image": "https://eaeapp.com/images-ia/benedetti/favico.png",
    "@id": "https://consultoriosbenedetti.com.ar",
    "url": "https://consultoriosbenedetti.com.ar",
    "telephone": settings.phoneLine,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": settings.address,
      "addressLocality": "Lanús Este",
      "addressRegion": "Buenos Aires",
      "postalCode": "1824",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.706,
      "longitude": -58.388
    },
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
    "sameAs": [
      "https://www.instagram.com/consultoriosbenedetti"
    ]
  };

  return (
    <PageTransition>
      <SEO 
        title="Inicio"
        description="Consultorios Benedetti en Lanús Este. Especialistas en Kinesiología, Quiropraxia y Ortopedia. Atención con obras sociales y tecnología avanzada."
      />
      <StructuredData data={clinicSchema} />
      <main className="bg-white">
        <Hero />
        <SpecialtyCards />
        <NewServiceHighlight />

        {/* Google Reviews Slider */}
        <ReviewsSlider />

        {/* Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] mb-6">
                  Atención Médica de <span className="text-[#0088CC]">Excelencia</span>
                </h2>
                <p className="text-gray-600 mb-10 leading-relaxed">
                  En Consultorios Benedetti nos esforzamos por brindar una experiencia de salud integral, combinando calidez humana con los últimos avances tecnológicos.
                </p>
                
                <div className="space-y-6">
                  {[
                    { icon: User, title: 'Profesionales Destacados', desc: 'Médicos con amplia trayectoria y especialización.' },
                    { icon: Clock, title: 'Horarios Flexibles', desc: 'Atención extendida para adaptarnos a tu rutina.' },
                    { icon: CheckCircle2, title: 'Tecnología de Punta', desc: 'Equipamiento moderno para diagnósticos precisos.' },
                    { icon: CheckCircle2, title: 'Obras Sociales', desc: 'Trabajamos con más de 50 coberturas médicas.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-4">
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <item.icon className="w-6 h-6 text-[#0088CC]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1A3A5A]">{item.title}</h4>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://eaeapp.com/images-ia/benedetti/fisio.webp" 
                    alt="Doctor with patient"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0088CC] text-white p-8 rounded-2xl shadow-xl hidden md:block">
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-sm opacity-80">Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#1A3A5A] mb-6">¿Buscas atención con tu obra social?</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Trabajamos con más de 50 coberturas médicas para brindarte la mejor atención. Consulta nuestra lista completa.
            </p>
            <Link 
              to="/obras-sociales" 
              className="inline-block bg-[#0088CC] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#0077B3] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ver Obras Sociales
            </Link>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}

