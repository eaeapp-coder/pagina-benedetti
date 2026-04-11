import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Heart, Target, Eye, CheckCircle2, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Calidez Humana',
      description: 'Tratamos a cada paciente con la empatía y el respeto que se merece, creando un ambiente de confianza.'
    },
    {
      icon: Target,
      title: 'Eficiencia',
      description: 'Buscamos los mejores resultados en el menor tiempo posible, optimizando cada tratamiento.'
    },
    {
      icon: Award,
      title: 'Calidad Médica',
      description: 'Contamos con profesionales de primer nivel y tecnología de vanguardia para tu salud.'
    },
    {
      icon: Users,
      title: 'Compromiso',
      description: 'Estamos comprometidos con la recuperación integral y el bienestar a largo plazo de nuestra comunidad.'
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-[#1A3A5A] mb-6 tracking-tight"
            >
              Sobre <span className="text-[#0088CC]">Nosotros</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              En Consultorios Benedetti, combinamos años de experiencia familiar con las técnicas más modernas 
              para ofrecerte una atención de salud excepcional.
            </motion.p>
          </div>

          {/* History Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Nuestras instalaciones" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#0088CC] p-10 rounded-[2.5rem] text-white hidden md:block shadow-xl">
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm opacity-80">Años de trayectoria</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A3A5A] leading-tight">
                Una historia dedicada al <span className="text-[#0088CC]">bienestar</span> de la comunidad
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Consultorios Benedetti nació como un proyecto familiar con una visión clara: transformar la rehabilitación física en una experiencia cálida, humana y altamente efectiva.
                </p>
                <p>
                  Fundado por los licenciados Mariano y Esteban Benedetti, nuestro centro ha crecido de la mano de la confianza de nuestros pacientes. Lo que comenzó como un pequeño consultorio de kinesiología se ha convertido en un centro de referencia regional en Quiropraxia, Ortopedia y Análisis Biomecánico.
                </p>
                <p>
                  Hoy, contamos con instalaciones preparadas con tecnología de última generación y un equipo de profesionales que comparten la misma pasión por la salud y el servicio de excelencia.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-[#0088CC]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A3A5A] mb-6">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Proporcionar servicios de salud integrales y personalizados que mejoren la calidad de vida de nuestros pacientes, 
                utilizando técnicas basadas en la evidencia y un trato profundamente humano.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1A3A5A] p-12 rounded-[3rem] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0088CC] rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Nuestra Visión</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                Ser reconocidos como el centro líder en rehabilitación y cuidado de la columna en la región, 
                destacándonos por nuestra innovación constante y la calidez de nuestro equipo profesional.
              </p>
            </motion.div>
          </div>

          {/* Values Section */}
          <div className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#1A3A5A] mb-4">Nuestros Valores</h2>
              <p className="text-gray-500">Los pilares que guían nuestra atención diaria</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                >
                  <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-6 h-6 text-[#0088CC]" />
                  </div>
                  <h4 className="font-bold text-[#1A3A5A] mb-3">{value.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0088CC] to-[#005580] p-16 rounded-[4rem] text-white text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">¿Listo para sentirte mejor?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Agenda hoy mismo tu consulta con nuestros especialistas y comienza tu camino hacia una vida sin dolor.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/contacto" 
                  className="bg-white text-[#0088CC] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl"
                >
                  Contactar ahora
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
}
