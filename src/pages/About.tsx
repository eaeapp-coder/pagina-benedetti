import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Heart, Target, Eye, CheckCircle2, Users, Award } from 'lucide-react';
import SEO from '../components/SEO';

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
      <SEO 
        title="Sobre Nosotros"
        description="Conoce la historia, misión y valores de Consultorios Benedetti. Más de 10 años de trayectoria brindando atención médica de excelencia en Lanús Este."
      />
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
              Consultorios Benedetti es un centro de salud dedicado al cuidado del movimiento, la función y la calidad de vida de las personas.
            </motion.p>
          </div>

          {/* History Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-16"
            >
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
                  <img 
                    src="https://eaeapp.com/images-ia/benedetti/mariano-kinesiologia.jpg" 
                    alt="Mariano Benedetti - Kinesiología" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0088CC] p-8 rounded-[2rem] text-white hidden md:block shadow-xl z-10">
                  <p className="text-3xl font-bold mb-1">10+</p>
                  <p className="text-xs opacity-80">Años de trayectoria</p>
                </div>
              </div>

              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
                <img 
                  src="https://eaeapp.com/images-ia/benedetti/esteban_imagen%203.jpg" 
                  alt="Esteban Benedetti - Quiropraxia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
                <img 
                  src="https://eaeapp.com/images-ia/benedetti/mariano-y-esteban-juntos.jpeg" 
                  alt="Esteban y Mariano Benedetti juntos" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
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
                  Consultorios Benedetti es un centro de salud dedicado al cuidado del movimiento, la función y la calidad de vida de las personas. Nació hace más de diez años como un proyecto profesional centrado en la kinesiología, con el objetivo de acompañar procesos de rehabilitación y recuperación desde una mirada clínica, humana y personalizada.
                </p>
                <p>
                  Desde sus inicios, el consultorio se orientó a la rehabilitación traumatológica, deportiva y postquirúrgica, acompañando a pacientes en procesos de recuperación funcional y en la mejora de su calidad de vida. Con el paso del tiempo, el proyecto fue creciendo, incorporando nuevas áreas de trabajo y profundizando en distintos enfoques terapéuticos, siempre con el mismo objetivo: ayudar a las personas a moverse mejor, sentirse mejor y recuperar su bienestar.
                </p>
                <p>
                  A lo largo de estos años, el trabajo clínico se fue ampliando e integrando nuevas herramientas. El cuidado quiropráctico ocupa hoy un lugar central dentro del consultorio. Este enfoque busca mejorar la función de la columna vertebral y su relación con el sistema nervioso, entendiendo que una columna con mejor función puede impactar positivamente en la movilidad, el bienestar general y la calidad de vida. La quiropráctica no se plantea como un tratamiento aislado, sino como un proceso de cuidado progresivo que acompaña al paciente en la recuperación y el mantenimiento de su salud.
                </p>
                <p>
                  En paralelo, el análisis de la pisada y la evaluación biomecánica se incorporaron como una herramienta fundamental para abordar alteraciones del apoyo plantar que pueden repercutir en pies, rodillas, cadera o columna. A partir de evaluaciones precisas, se diseñan y confeccionan soportes plantares personalizados, orientados a mejorar la función, corregir desequilibrios y favorecer tanto el rendimiento como el confort en la vida cotidiana.
                </p>
                <p>
                  Más recientemente, el consultorio ha sumado un área vinculada a productos ortopédicos, orientada a brindar soluciones prácticas en procesos de rehabilitación, movilidad y cuidado postural. Esta incorporación forma parte de una visión integral que busca acompañar a cada persona no solo en el tratamiento clínico, sino también en las herramientas que facilitan su recuperación y autonomía.
                </p>
                <p>
                  Con más de una década de trabajo sostenido, Consultorios Benedetti se ha consolidado como un espacio de referencia en la zona, combinando experiencia clínica, compromiso humano y una visión integral del cuidado de la salud. Nuestro propósito es claro: ayudar a cada persona a recuperar su función, mejorar su calidad de vida y sostener su bienestar a largo plazo.
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
