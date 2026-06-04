import { 
  Heart, 
  Baby, 
  Stethoscope, 
  Activity, 
  User, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin, 
  Search, 
  ChevronRight,
  Menu,
  X,
  Clock,
  CheckCircle2,
  Smile,
  Eye,
  Apple,
  Accessibility,
  Footprints,
  Bone
} from 'lucide-react';

export interface Doctor {
  id: string;
  name: string;
  specialties: string[];
  image: string;
  bio?: string;
  education?: string[];
  experience?: string[];
  specializations?: string[];
  languages?: string[];
  availability?: string;
}

export interface Specialty {
  id: string;
  name: string;
  icon: any;
  description: string;
  fullDescription: string;
  benefits: string[];
  images: string[];
}

export const SPECIALTIES: Specialty[] = [
  { 
    id: 'kinesiology', 
    name: 'Kinesiología', 
    icon: Activity, 
    description: 'Rehabilitación profesional para que tu cuerpo vuelva a funcionar al máximo. Tratamos lesiones traumatológicas, deportivas y posquirúrgicas con un enfoque personalizado y basado en evidencia.',
    fullDescription: 'La kinesiología es una disciplina de la salud que se enfoca en el estudio del movimiento humano y su aplicación para la rehabilitación, prevención y mejora del rendimiento físico. En nuestro consultorio, utilizamos técnicas manuales, ejercicios terapéuticos y agentes físicos para tratar diversas patologías musculoesqueléticas, neurológicas y respiratorias. Nuestro objetivo es restaurar la función motora, aliviar el dolor y mejorar la calidad de vida de nuestros pacientes a través de un enfoque personalizado y basado en la evidencia científica.',
    benefits: [
      'Rehabilitación post-quirúrgica y post-traumática',
      'Tratamiento de dolores crónicos y agudos',
      'Mejora de la movilidad y flexibilidad',
      'Prevención de lesiones deportivas y laborales',
      'Corrección postural y ergonomía'
    ],
    images: [
      'https://eaeapp.com/imagenes-ia/benedetti/pexels-kinesiologia.jpg',
      'https://eaeapp.com/imagenes-ia/benedetti/kinesiologia-1.webp'
    ]
  },
  { 
    id: 'chiropractic', 
    name: 'Quiropraxia', 
    icon: Accessibility, 
    description: 'Tu columna vertebral es el eje de tu salud. A través de la quiropraxia analizamos, detectamos y corregimos alteraciones vertebrales para mejorar tu calidad de vida desde la raíz.',
    fullDescription: 'La quiropraxia se centra en la relación entre la estructura de la columna vertebral y el funcionamiento del sistema nervioso. Los quiroprácticos realizan ajustes específicos para corregir subluxaciones vertebrales, que son desalineamientos que interfieren con la comunicación entre el cerebro y el resto del cuerpo. Al restaurar la alineación correcta, se permite que el cuerpo funcione a su máximo potencial de autocuración. Es un tratamiento seguro, natural y efectivo para personas de todas las edades que buscan mejorar su salud integral.',
    benefits: [
      'Alivio de dolores de espalda y cuello',
      'Mejora del funcionamiento del sistema nervioso',
      'Aumento de la energía y bienestar general',
      'Reducción de dolores de cabeza y migrañas',
      'Mejora del rendimiento deportivo'
    ],
    images: [
      'https://eaeapp.com/imagenes-ia/benedetti/esteban_quiropraxia.jpg',
      'https://eaeapp.com/imagenes-ia/benedetti/quiropraxia_2.jpg'
    ]
  },
  { 
    id: 'gait-analysis', 
    name: 'Análisis de la pisada', 
    icon: Footprints, 
    description: 'Todo empieza desde el primer paso. Analizamos tu pisada con tecnología especializada y confeccionamos plantillas urbanas, deportivas y ortopédicas diseñadas específicamente para vos.',
    fullDescription: 'El análisis de la pisada o estudio baropodométrico es una evaluación biomecánica avanzada que permite conocer cómo apoyamos los pies tanto en posición estática como durante la marcha. Mediante el uso de plataformas de presiones digitales, detectamos anomalías en la distribución del peso, puntos de presión excesiva y desequilibrios que pueden causar dolor no solo en los pies, sino también en tobillos, rodillas, cadera y columna. Este estudio es fundamental para el diseño de plantillas ortopédicas personalizadas de alta precisión, mejorando la postura y previniendo lesiones a largo plazo.',
    benefits: [
      'Detección precoz de anomalías en la marcha',
      'Diseño de plantillas personalizadas de alta precisión',
      'Prevención de dolores en rodillas y espalda',
      'Mejora de la estabilidad y equilibrio',
      'Optimización del rendimiento en corredores y deportistas'
    ],
    images: [
      'https://eaeapp.com/imagenes-ia/benedetti/mariano_analisis_pisada.jpeg',
      'https://eaeapp.com/imagenes-ia/benedetti/analisis-pisada.jpg'
    ]
  },
  { 
    id: 'traumatology', 
    name: 'Ortopedia', 
    icon: Bone, 
    description: 'El tratamiento no termina en el consultorio. Contamos con todo lo que necesitás para acompañar tu recuperación: elementos, ayudas técnicas y productos ortopédicos de calidad, disponibles para la venta y el alquiler.',
    fullDescription: 'La ortopedia y traumatología es la rama de la medicina que se ocupa del estudio y tratamiento de las afecciones del sistema locomotor. Esto incluye huesos, articulaciones, ligamentos, tendones y músculos. En nuestro centro, brindamos atención especializada para fracturas, esguinces, lesiones deportivas, enfermedades degenerativas como la artrosis y deformidades congénitas o adquiridas. Contamos con profesionales expertos que utilizan las últimas tecnologías y técnicas quirúrgicas y no quirúrgicas para asegurar una recuperación óptima y el retorno a las actividades diarias.',
    benefits: [
      'Diagnóstico preciso de lesiones óseas y articulares',
      'Tratamientos mínimamente invasivos',
      'Manejo especializado de fracturas y luxaciones',
      'Atención integral de patologías de columna y miembros',
      'Seguimiento personalizado en la recuperación'
    ],
    images: [
      'https://eaeapp.com/imagenes-ia/benedetti/ortopedia.jpg',
      'https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg'
    ]
  }
];

export interface InsuranceProvider {
  id: string;
  name: string;
  logo: string;
  specialties: string[];
  isNew?: boolean;
}

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  { id: 'aca-salud', name: 'ACA SALUD', logo: 'https://logo.clearbit.com/acasalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'amebpba', name: 'AMEBPBA', logo: 'https://logo.clearbit.com/amebpba.org.ar', specialties: ['Kinesiología'] },
  { id: 'amffa', name: 'AMFFA', logo: 'https://logo.clearbit.com/amffa.org.ar', specialties: ['Kinesiología'] },
  { id: 'amsterdam-salud', name: 'AMSTERDAM SALUD', logo: 'https://logo.clearbit.com/amsterdamsalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'apsot', name: 'APSOT', logo: 'https://logo.clearbit.com/apsot.com', specialties: ['Kinesiología'] },
  { id: 'asoc-eclesiastica', name: 'ASOCIACION ECLESIASTICA SAN PEDRO', logo: 'https://logo.clearbit.com/sanpedro.org.ar', specialties: ['Kinesiología'] },
  { id: 'caminos-protegidos', name: 'CAMINOS PROTEGIDOS ART S.A.', logo: 'https://logo.clearbit.com/caminosprotegidos.com.ar', specialties: ['Kinesiología'] },
  { id: 'casa', name: 'CASA', logo: 'https://logo.clearbit.com/casasalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'centro-medico-pueyrredon', name: 'CENTRO MEDICO PUEYRREDON', logo: 'https://logo.clearbit.com/cmpueyrredon.com.ar', specialties: ['Kinesiología'] },
  { id: 'colegio-escribanos', name: 'COLEGIO DE ESCRIBANOS', logo: 'https://logo.clearbit.com/colescba.org.ar', specialties: ['Kinesiología'] },
  { id: 'comei', name: 'COMEI', logo: 'https://logo.clearbit.com/comei.org.ar', specialties: ['Kinesiología'] },
  { id: 'dasmi', name: 'DASMI', logo: 'https://logo.clearbit.com/dasmi.unlu.edu.ar', specialties: ['Kinesiología'] },
  { id: 'dasuten', name: 'DASUTeN', logo: 'https://logo.clearbit.com/dasuten.utn.edu.ar', specialties: ['Kinesiología'] },
  { id: 'docthos', name: 'DOCTHOS', logo: 'https://logo.clearbit.com/docthos.com.ar', specialties: ['Kinesiología'] },
  { id: 'ensalud', name: 'ENSALUD', logo: 'https://logo.clearbit.com/ensalud.org.ar', specialties: ['Kinesiología'] },
  { id: 'william-hope', name: 'W. HOPE', logo: 'https://logo.clearbit.com/whope.com.ar', specialties: ['Kinesiología'] },
  { id: 'federada-salud', name: 'FEDERADA SALUD', logo: 'https://logo.clearbit.com/federada.com', specialties: ['Kinesiología'] },
  { id: 'futbolistas-agremiados', name: 'FUTBOLISTAS AGREMIADOS', logo: 'https://logo.clearbit.com/faa.org.ar', specialties: ['Kinesiología'] },
  { id: 'ioma', name: 'IOMA', logo: 'https://logo.clearbit.com/ioma.gba.gob.ar', specialties: ['Kinesiología'] },
  { id: 'iosfa', name: 'IOSFA', logo: 'https://logo.clearbit.com/iosfa.gob.ar', specialties: ['Kinesiología'] },
  { id: 'serve-salud', name: 'SERVE SALUD', logo: 'https://logo.clearbit.com/servesalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'smg-art', name: 'SMG ART', logo: 'https://logo.clearbit.com/swissmedical.com.ar', specialties: ['Kinesiología'] },
  { id: 'staff-medico', name: 'STAFF MÉDICO', logo: 'https://logo.clearbit.com/staffmedico.com.ar', specialties: ['Kinesiología'] },
  { id: 'swiss-medical', name: 'SWISS MEDICAL', logo: 'https://logo.clearbit.com/swissmedical.com.ar', specialties: ['Kinesiología'] },
  { id: 'la-holando-art', name: 'LA HOLANDO ART', logo: 'https://logo.clearbit.com/laholando.com', specialties: ['Kinesiología'] },
  { id: 'la-segunda-art', name: 'LA SEGUNDA ART', logo: 'https://logo.clearbit.com/lasegunda.com.ar', specialties: ['Kinesiología'] },
  { id: 'luz-y-fuerza', name: 'LUZ Y FUERZA', logo: 'https://logo.clearbit.com/luzyfuerza.org.ar', specialties: ['Kinesiología'] },
  { id: 'mandar-salud', name: 'MANDAR SALUD SA', logo: 'https://logo.clearbit.com/mandarsalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'medife', name: 'MEDIFE', logo: 'https://logo.clearbit.com/medife.com.ar', specialties: ['Kinesiología'] },
  { id: 'opdea', name: 'OPDEA', logo: 'https://logo.clearbit.com/opdea.org.ar', specialties: ['Kinesiología'] },
  { id: 'osapm', name: 'OSAPM', logo: 'https://logo.clearbit.com/osapm.org.ar', specialties: ['Kinesiología'] },
  { id: 'osfatun', name: 'OSFATUN', logo: 'https://logo.clearbit.com/osfatun.org.ar', specialties: ['Kinesiología'] },
  { id: 'osmecon', name: 'OSMECON', logo: 'https://logo.clearbit.com/osmecon.com.ar', specialties: ['Kinesiología'] },
  { id: 'ospedyc', name: 'OSPEDYC', logo: 'https://logo.clearbit.com/ospedyc.org.ar', specialties: ['Kinesiología'] },
  { id: 'ospepba', name: 'OSPEPBA', logo: 'https://logo.clearbit.com/ospepba.org.ar', specialties: ['Kinesiología'] },
  { id: 'ospia', name: 'OSPIA', logo: 'https://logo.clearbit.com/ospia.org.ar', specialties: ['Kinesiología'] },
  { id: 'ospical', name: 'OSPICAL', logo: 'https://logo.clearbit.com/ospical.org.ar', specialties: ['Kinesiología'] },
  { id: 'ospida', name: 'OSPIDA', logo: 'https://logo.clearbit.com/ospida.org.ar', specialties: ['Kinesiología'] },
  { id: 'ospjn', name: 'OSPJN', logo: 'https://logo.clearbit.com/ospjn.gov.ar', specialties: ['Kinesiología'] },
  { id: 'osptv', name: 'OSPTV', logo: 'https://logo.clearbit.com/osptv.org.ar', specialties: ['Kinesiología'] },
  { id: 'osseg', name: 'OSSEG', logo: 'https://logo.clearbit.com/osseg.org.ar', specialties: ['Kinesiología'] },
  { id: 'prevencion-salud', name: 'PREVENCION SALUD S.A.', logo: 'https://logo.clearbit.com/prevencionsalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'profru-art', name: 'PROFRU ART', logo: 'https://logo.clearbit.com/profruart.com.ar', specialties: ['Kinesiología'] },
  { id: 'reconquista-art', name: 'RECONQUISTA ART', logo: 'https://logo.clearbit.com/reconquistaart.com.ar', specialties: ['Kinesiología'] },
  { id: 'sami-salud', name: 'SAMI SALUD', logo: 'https://logo.clearbit.com/samisalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'sancor-salud', name: 'SANCOR SALUD', logo: 'https://logo.clearbit.com/sancorsalud.com.ar', specialties: ['Kinesiología'] },
  { id: 'scis', name: 'SCIS S-A', logo: 'https://logo.clearbit.com/scis.com.ar', specialties: ['Kinesiología'] },
];

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Lic. Mariano Benedetti',
    specialties: ['Kinesiología'],
    image: 'https://eaeapp.com/imagenes-ia/benedetti/lic_mariano_benedetti.jpg',
    bio: 'Director de Consultorios Benedetti. Especialista en Quiropraxia y Kinesiología con amplia trayectoria en el tratamiento de la columna vertebral.',
    education: ['Lic. en Kinesiología y Fisiatría - UBA', 'Especialista en Quiropraxia'],
    languages: ['Español', 'Inglés'],
    availability: 'Mar. a Jue. 11:00 a 20:00 | Lun. Mie. y Vie. 08:00 a 18:00'
  },
  {
    id: '2',
    name: 'Lic. Esteban Benedetti',
    specialties: ['Quiropraxia'],
    image: 'https://eaeapp.com/imagenes-ia/benedetti/lic_esteban_benedetti.jpg',
    bio: 'Co-director. Especialista en rehabilitación funcional y kinesiología deportiva.',
    education: ['Lic. en Kinesiología y Fisiatría - UBA'],
    languages: ['Español'],
    availability: 'Mar. a Jue. 11:00 a 20:00 | Lun. Mie. y Vie. 08:00 a 18:00'
  },
];

export const CATALOG_CATEGORIES = [
  {
    id: 'spine',
    title: 'Columna y espalda',
    description: 'Collares cervicales, correctores de postura, fajas sacrolumbares, fajas de trabajo y fajas compresivas. Para el cuidado diario y la recuperación.',
    items: ['Collar cervical de espuma 7 cm (T1 / T2 / T3)', 'Collar cervical de espuma 10 cm (T1 / T2 / T3)', 'Corrector de postura regulable elástico', 'Corrector de postura universal regulable', 'Faja compresiva 3 bandas 24 cm', 'Faja sacrolumbar 2 ballenas', 'Faja sacrolumbar 5 ballenas', 'Faja de trabajo'],
    image: 'spine_back_support'
  },
  {
    id: 'upper-limb',
    title: 'Miembro superior',
    description: 'Cabestrillos, coderas, muñequeras e inmovilizadores para hombro, codo, muñeca y dedos.',
    items: ['Cabestrillo común derecho', 'Cabestrillo común izquierdo', 'Cabestrillo Vietnam (Universal)', 'Codera larga sin velcro', 'Codera de tenista / golfista', 'Muñequera boomerang con dedo de neoprene M4', 'Muñequera boomerang con inmovilización dedo pulgar M5', 'Inmovilizador de dedo'],
    image: 'upper_limb_support'
  },
  {
    id: 'lower-limb',
    title: 'Miembro inferior',
    description: 'Musleras, rodilleras, gemeleras, tobilleras y abductores de juanete en distintas versiones. Inmovilizador de rodilla y bota walker para post-operatorio y lesiones agudas.',
    items: ['Muslera de neoprene', 'Rodillera con apertura rotuliana de neoprene R3', 'Rodillera con refuerzo rotuliano de neoprene R2', 'Rodillera con ballenas laterales de neoprene R8', 'Inmovilizador de rodilla DEMA (corto 42 / mediano 52 / largo 62 cm)', 'Gemelera de neoprene', 'Tobillera de neoprene T1', 'Tobillera con ajuste en ocho de neoprene T2', 'Tobillera con ballenas laterales de neoprene T3', 'Abductor de juanete de neoprene'],
    image: 'lower_limb_support'
  },
  {
    id: 'bandages',
    title: 'Vendajes y temperatura',
    description: 'Cintas de kinesiotaping, vendas cohesivas y deportivas, bolsas de frío/calor y packs de gel.',
    items: ['Cinta kinesiotaping 5 cm', 'Venda cohesiva Pro Sport 5 / 7 / 10 cm', 'Venda deportiva 5 / 7 / 10 cm', 'Almohadilla térmica', 'Bolsa para hielo y agua caliente', 'Pack gel frío-calor 13×25 cm (×5 unidades)'],
    image: 'bandages_therapy'
  },
  {
    id: 'compression',
    title: 'Compresión',
    description: 'Medias de compresión graduada en dos niveles de presión y cinco talles.',
    items: ['Media compresión 8/15 mmHg — negra — talles S / M / L / XL / XXL', 'Media compresión 15/20 mmHg — negra — talles S / M / L / XL / XXL'],
    image: 'compression_stockings'
  },
  {
    id: 'mobility',
    title: 'Movilidad y ayudas técnicas',
    description: 'Muletas, bastones, andadores, sillas de ruedas y accesorios de movilidad. Disponibles para la venta y el alquiler.',
    items: ['Muletas de aluminio', 'Bastón canadiense (par)', 'Bastón trípode', 'Bastón aluminio regulable', 'Silla de ruedas 41 cm', 'Silla de ruedas 46 cm', 'Andador paso a paso', 'Andador tijera', 'Elevador de inodoro', 'Pedalera', 'Bota walker'],
    image: 'mobility_aids'
  },
  {
    id: 'rehab',
    title: 'Rehabilitación y entrenamiento',
    description: 'Bandas elásticas, pelotas medicinales, foam roller, accesorios de mano y elementos de confort postural.',
    items: ['Mini band baja / media / alta', 'Banda larga baja / media / alta', 'Pelota medicinal', 'Pelota chica de propiocepción', 'Foam roller', 'Pelota miofascial', 'Pelota de mano', 'Masilla terapéutica', 'Hand grip', 'Almohadón lumbar', 'Almohadón de asiento', 'Almohada cervical', 'Mancuernas 1 kg', 'Mancuernas 2 kg', 'Tobillera con peso'],
    image: 'rehab_training'
  }
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Beneficios de la Quiropraxia en el Deporte',
    excerpt: 'Descubre cómo los ajustes quiroprácticos pueden mejorar el rendimiento deportivo y prevenir lesiones.',
    content: `
      La quiropraxia se ha convertido en una herramienta fundamental para deportistas de todos los niveles. No solo ayuda en la recuperación de lesiones, sino que también optimiza el funcionamiento del sistema nervioso, lo que se traduce en una mejor coordinación y potencia física.

      En nuestro consultorio, trabajamos con atletas para asegurar que su columna vertebral esté correctamente alineada, permitiendo que los impulsos nerviosos viajen sin interferencias. Esto es crucial para la prevención de lesiones por sobrecarga y para mejorar los tiempos de reacción.

      Muchos deportistas de élite incluyen la quiropraxia como parte de su rutina de entrenamiento regular, notando beneficios inmediatos en su flexibilidad y capacidad de recuperación tras esfuerzos intensos.
    `,
    date: '2024-03-15',
    category: 'Quiropraxia',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'La importancia de una buena pisada',
    excerpt: '¿Sabías que muchos dolores de espalda comienzan en los pies? El análisis de la pisada es la clave.',
    content: `
      Nuestros pies son la base de todo nuestro cuerpo. Una mala pisada puede generar una reacción en cadena que afecte a los tobillos, rodillas, cadera y, finalmente, a la columna vertebral.

      El análisis baropodométrico digital nos permite visualizar con precisión cómo distribuyes tu peso al caminar. Con esta información, podemos diseñar plantillas ortopédicas personalizadas que corrijan desequilibrios y alivien tensiones innecesarias en otras articulaciones.

      Si sufres de dolores recurrentes de espalda o rodilla, el problema podría estar en tu forma de caminar. Un estudio a tiempo puede prevenir patologías crónicas y mejorar significativamente tu postura diaria.
    `,
    date: '2024-03-10',
    category: 'Análisis de la pisada',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Kinesiología: Más que masajes',
    excerpt: 'Entiende el rol del kinesiólogo en la rehabilitación moderna y cómo ayuda a recuperar la movilidad.',
    content: `
      Existe la creencia común de que la kinesiología se limita a los masajes, pero su campo de acción es mucho más amplio y científico. Es la ciencia del movimiento humano.

      A través de ejercicios terapéuticos, técnicas manuales avanzadas y el uso de tecnología médica, el kinesiólogo trabaja para restaurar funciones que se han perdido debido a cirugías, accidentes o enfermedades degenerativas.

      El objetivo final es la autonomía del paciente. No solo tratamos el síntoma, sino que buscamos la causa raíz del problema para evitar recaídas y fortalecer el cuerpo de manera integral.
    `,
    date: '2024-03-05',
    category: 'Kinesiología',
    image: 'https://lh3.googleusercontent.com/d/1LOXqn-eOuM5tTno7lRElV6_aA3UZprLa'
  }
];
