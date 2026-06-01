import React from 'react';
import { ShoppingCart, Accessibility, Activity, MessageSquare } from 'lucide-react';

export default function Orthopedics() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3A5A] leading-tight">
            Ortopedia Benedetti — Todo para tu recuperación
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Brindamos soluciones integrales de movilidad y rehabilitación con el respaldo de profesionales especializados.
          </p>
          <div className="flex gap-4">
            <a href="#catalogo" className="bg-[#0088CC] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#006699] transition-colors">
              Ver Catálogo
            </a>
            <a href="#servicios" className="border-2 border-[#0088CC] text-[#0088CC] px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Nuestros Servicios
            </a>
          </div>
        </div>
        <div className="relative group">
          <img 
            alt="Professional Orthopedic Care"
            className="rounded-2xl shadow-2xl object-cover aspect-[4/3] w-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZ5ma--r5YZkyJNO2HUqYiD6yUp-9MdPdYENE-3lcBdqSwjxZ1qgEYmwDsN0kcvkiLpaYl8CyCCBKVUhomMNqJ6dlNIgj7n4fab9NcNu0-QdoXi7Uz8zMucx1wz3kPXPCOONM46HiIleLxm70SC4XD6CgOKJvPjauH61x8ysw2dtaSf0SK8hDAzGv4LV2wNN1hZmhy8dq68ibGE2YwyDunp_h31UzE0Q4SSAU7ty5SZqctB-565Hg78LwG6H80ypgi3hCNR6VHsVfu"
          />
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-24" id="servicios">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1A3A5A] mb-16">Servicios Especializados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: 'Venta y alquiler', desc: 'Amplio stock de muletas, bastones y sillas de ruedas.' },
              { icon: Accessibility, title: 'Elementos de neoprene', desc: 'Rodilleras, fajas y soportes de alta calidad.' },
              { icon: Activity, title: 'Rehabilitación en casa', desc: 'Equipamiento para continuar tu tratamiento en casa.' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Respaldado por profesionales</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cada artículo es evaluado por expertos en kinesiología para asegurar que cumpla con los estándares terapéuticos necesarios.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <section className="py-24 bg-white" id="catalogo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1A3A5A] mb-16 text-center">Nuestro Catálogo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Columna y espalda', items: ['Fajas lumbares', 'Correctores de postura', 'Collares cervicales'] },
              { title: 'Miembro superior', items: ['Cabestrillos', 'Muñequeras', 'Inmovilizadores'] },
              { title: 'Miembro inferior', items: ['Rodilleras articuladas', 'Bota walker', 'Musleras y tobilleras'] },
              { title: 'Movilidad', items: ['Sillas de ruedas', 'Andadores', 'Muletas axilares'] },
              { title: 'Rehabilitación', items: ['Foam roller', 'Mini bands', 'Mancuernas y pelotas'] },
            ].map((cat, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-[#0088CC] mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-[#0088CC] rounded-full"></span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 py-24" id="contacto">
        <div className="bg-gray-100 rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-[#1A3A5A] mb-6">¿Necesitás algo puntual?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro equipo está listo para asesorarte. Consultanos por WhatsApp.
            </p>
            <a href="https://wa.me/yournumber" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-colors">
              <MessageSquare className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
