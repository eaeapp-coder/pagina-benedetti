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
  specialty: string;
  image: string;
  bio?: string;
  education?: string[];
  experience?: string[];
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
    icon: Accessibility, 
    description: 'Nuestros especialistas estan formados para trabajar en la mejora y el mantenimiento de la capacidad fisiológica de los pacientes y la prevención de sus alteraciones',
    fullDescription: 'La kinesiología es una disciplina de la salud que se enfoca en el estudio del movimiento humano y su aplicación para la rehabilitación, prevención y mejora del rendimiento físico. En nuestro consultorio, utilizamos técnicas manuales, ejercicios terapéuticos y agentes físicos para tratar diversas patologías musculoesqueléticas, neurológicas y respiratorias. Nuestro objetivo es restaurar la función motora, aliviar el dolor y mejorar la calidad de vida de nuestros pacientes a través de un enfoque personalizado y basado en la evidencia científica.',
    benefits: [
      'Rehabilitación post-quirúrgica y post-traumática',
      'Tratamiento de dolores crónicos y agudos',
      'Mejora de la movilidad y flexibilidad',
      'Prevención de lesiones deportivas y laborales',
      'Corrección postural y ergonomía'
    ],
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 'chiropractic', 
    name: 'Quiropraxia', 
    icon: Activity, 
    description: 'La quiropraxia es una profesión de la salud que estudia la columna vertebral y su relación con el sistema nervioso. Analiza, detecta y corrige desalineamientos de la columna vertebral.',
    fullDescription: 'La quiropraxia se centra en la relación entre la estructura de la columna vertebral y el funcionamiento del sistema nervioso. Los quiroprácticos realizan ajustes específicos para corregir subluxaciones vertebrales, que son desalineamientos que interfieren con la comunicación entre el cerebro y el resto del cuerpo. Al restaurar la alineación correcta, se permite que el cuerpo funcione a su máximo potencial de autocuración. Es un tratamiento seguro, natural y efectivo para personas de todas las edades que buscan mejorar su salud integral.',
    benefits: [
      'Alivio de dolores de espalda y cuello',
      'Mejora del funcionamiento del sistema nervioso',
      'Aumento de la energía y bienestar general',
      'Reducción de dolores de cabeza y migrañas',
      'Mejora del rendimiento deportivo'
    ],
    images: [
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 'traumatology', 
    name: 'Ortopedia', 
    icon: Activity, 
    description: 'Especialidad dedicada al diagnóstico, tratamiento, rehabilitación y prevención de lesiones y enfermedades del sistema musculoesquelético.',
    fullDescription: 'La ortopedia y traumatología es la rama de la medicina que se ocupa del estudio y tratamiento de las afecciones del sistema locomotor. Esto incluye huesos, articulaciones, ligamentos, tendones y músculos. En nuestro centro, brindamos atención especializada para fracturas, esguinces, lesiones deportivas, enfermedades degenerativas como la artrosis y deformidades congénitas o adquiridas. Contamos con profesionales expertos que utilizan las últimas tecnologías y técnicas quirúrgicas y no quirúrgicas para asegurar una recuperación óptima y el retorno a las actividades diarias.',
    benefits: [
      'Diagnóstico preciso de lesiones óseas y articulares',
      'Tratamientos mínimamente invasivos',
      'Manejo especializado de fracturas y luxaciones',
      'Atención integral de patologías de columna y miembros',
      'Seguimiento personalizado en la recuperación'
    ],
    images: [
      'https://images.unsplash.com/photo-1581595224492-38411d8188f9?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800'
    ]
  },
  { 
    id: 'gait-analysis', 
    name: 'Análisis de la pisada', 
    icon: Footprints, 
    description: 'Nos proporciona valores para la prevención, corrección, diagnóstico y tratamiento de problemas de pisada.',
    fullDescription: 'El análisis de la pisada o estudio baropodométrico es una evaluación biomecánica avanzada que permite conocer cómo apoyamos los pies tanto en posición estática como durante la marcha. Mediante el uso de plataformas de presiones digitales, detectamos anomalías en la distribución del peso, puntos de presión excesiva y desequilibrios que pueden causar dolor no solo en los pies, sino también en tobillos, rodillas, cadera y columna. Este estudio es fundamental para el diseño de plantillas ortopédicas personalizadas de alta precisión, mejorando la postura y previniendo lesiones a largo plazo.',
    benefits: [
      'Detección precoz de anomalías en la marcha',
      'Diseño de plantillas personalizadas de alta precisión',
      'Prevención de dolores en rodillas y espalda',
      'Mejora de la estabilidad y equilibrio',
      'Optimización del rendimiento en corredores y deportistas'
    ],
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
    ]
  }
];

export interface InsuranceProvider {
  id: string;
  name: string;
  logo: string;
  specialties: string[];
}

export const INSURANCE_PROVIDERS: InsuranceProvider[] = [
  { id: '1', name: 'OSDE', logo: 'https://logo.clearbit.com/osde.com.ar', specialties: ['Kinesiología', 'Quiropraxia', 'Ortopedia', 'Análisis de la pisada'] },
  { id: '2', name: 'Swiss Medical', logo: 'https://logo.clearbit.com/swissmedical.com.ar', specialties: ['Kinesiología', 'Quiropraxia', 'Ortopedia', 'Análisis de la pisada'] },
  { id: '3', name: 'Galeno', logo: 'https://logo.clearbit.com/e-galeno.com.ar', specialties: ['Kinesiología', 'Quiropraxia', 'Ortopedia'] },
  { id: '4', name: 'Medicus', logo: 'https://logo.clearbit.com/medicus.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '5', name: 'Omint', logo: 'https://logo.clearbit.com/omint.com.ar', specialties: ['Kinesiología', 'Quiropraxia', 'Ortopedia'] },
  { id: '6', name: 'Sancor Salud', logo: 'https://logo.clearbit.com/sancorsalud.com.ar', specialties: ['Kinesiología', 'Quiropraxia', 'Ortopedia', 'Análisis de la pisada'] },
  { id: '7', name: 'Medifé', logo: 'https://logo.clearbit.com/medife.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '8', name: 'PAMI', logo: 'https://logo.clearbit.com/pami.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '9', name: 'IOMA', logo: 'https://logo.clearbit.com/ioma.gba.gob.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '10', name: 'OSDEPYM', logo: 'https://logo.clearbit.com/osdepym.com.ar', specialties: ['Kinesiología', 'Quiropraxia', 'Ortopedia'] },
  { id: '11', name: 'Accord Salud', logo: 'https://logo.clearbit.com/accordsalud.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '12', name: 'Aca Salud', logo: 'https://logo.clearbit.com/acasalud.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '13', name: 'Prevención Salud', logo: 'https://logo.clearbit.com/prevencionsalud.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '14', name: 'Hominis', logo: 'https://logo.clearbit.com/hominis.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '15', name: 'Bristol Medicine', logo: 'https://logo.clearbit.com/bristolmedicine.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '16', name: 'Federada Salud', logo: 'https://logo.clearbit.com/federada.com', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '17', name: 'Jerárquicos Salud', logo: 'https://logo.clearbit.com/jerarquicos.com', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '18', name: 'Luis Pasteur', logo: 'https://logo.clearbit.com/oslpasteur.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '19', name: 'William Hope', logo: 'https://logo.clearbit.com/whope.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '20', name: 'Cemic', logo: 'https://logo.clearbit.com/cemic.edu.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '21', name: 'Hospital Británico', logo: 'https://logo.clearbit.com/hospitalbritanico.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '22', name: 'Hospital Italiano', logo: 'https://logo.clearbit.com/hospitalitaliano.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '23', name: 'OSSEG', logo: 'https://logo.clearbit.com/osseg.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '24', name: 'OSDEBIN', logo: 'https://logo.clearbit.com/osdebin.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '25', name: 'OSPESCA', logo: 'https://logo.clearbit.com/ospesca.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '26', name: 'OSMATA', logo: 'https://logo.clearbit.com/osmata.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '27', name: 'OSPE', logo: 'https://logo.clearbit.com/ospesalud.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '28', name: 'OSDOP', logo: 'https://logo.clearbit.com/osdop.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '29', name: 'OSDEB', logo: 'https://logo.clearbit.com/osdeb.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '30', name: 'OSMECON', logo: 'https://logo.clearbit.com/osmecon.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '31', name: 'OSDIPP', logo: 'https://logo.clearbit.com/osdipp.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '32', name: 'OSAP', logo: 'https://logo.clearbit.com/osap.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '33', name: 'OSSIMRA', logo: 'https://logo.clearbit.com/ossimra.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '34', name: 'OSPAT', logo: 'https://logo.clearbit.com/ospat.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '35', name: 'OSPLAD', logo: 'https://logo.clearbit.com/osplad.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '36', name: 'OSDEPYM_2', logo: 'https://logo.clearbit.com/osdepym.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '37', name: 'OSMATA_2', logo: 'https://logo.clearbit.com/osmata.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '38', name: 'OSPESA', logo: 'https://logo.clearbit.com/ospesa.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '39', name: 'OSDEBIN_2', logo: 'https://logo.clearbit.com/osdebin.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '40', name: 'OSDEB_2', logo: 'https://logo.clearbit.com/osdeb.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '41', name: 'OSMECON_2', logo: 'https://logo.clearbit.com/osmecon.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '42', name: 'OSDIPP_2', logo: 'https://logo.clearbit.com/osdipp.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '43', name: 'OSAP_2', logo: 'https://logo.clearbit.com/osap.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '44', name: 'OSSIMRA_2', logo: 'https://logo.clearbit.com/ossimra.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '45', name: 'OSPAT_2', logo: 'https://logo.clearbit.com/ospat.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '46', name: 'OSPLAD_2', logo: 'https://logo.clearbit.com/osplad.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '47', name: 'OSDEPYM_3', logo: 'https://logo.clearbit.com/osdepym.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '48', name: 'OSMATA_3', logo: 'https://logo.clearbit.com/osmata.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '49', name: 'OSPESA_2', logo: 'https://logo.clearbit.com/ospesa.org.ar', specialties: ['Kinesiología', 'Ortopedia'] },
  { id: '50', name: 'OSDEBIN_3', logo: 'https://logo.clearbit.com/osdebin.com.ar', specialties: ['Kinesiología', 'Ortopedia'] },
];

export const DOCTORS: Doctor[] = [
  { 
    id: '7', 
    name: 'Dr. Roberto Gomez', 
    specialty: 'Kinesiología', 
    image: 'https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Especialista en rehabilitación deportiva y recuperación funcional post-quirúrgica.',
    education: ['Lic. en Kinesiología y Fisiatría - UBA'],
    languages: ['Español'],
    availability: 'Lunes a Viernes de 08:00 a 16:00'
  },
  { 
    id: '8', 
    name: 'Dra. Lucía Fernández', 
    specialty: 'Quiropraxia', 
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Dedicada al ajuste de la columna vertebral para mejorar la salud del sistema nervioso.',
    education: ['Doctora en Quiropraxia - Life University'],
    languages: ['Español', 'Inglés'],
    availability: 'Martes y Jueves de 09:00 a 17:00'
  },
  { 
    id: '9', 
    name: 'Dr. Marcos Paz', 
    specialty: 'Ortopedia', 
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Cirujano ortopédico especializado en articulaciones y medicina deportiva.',
    education: ['Médico - UBA', 'Especialista en Ortopedia y Traumatología'],
    languages: ['Español'],
    availability: 'Lunes y Miércoles de 14:00 a 19:00'
  },
  { 
    id: '10', 
    name: 'Lic. Sergio Torres', 
    specialty: 'Análisis de la pisada', 
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Experto en biomecánica de la marcha y diseño de plantillas ortopédicas personalizadas.',
    education: ['Lic. en Kinesiología', 'Especialista en Biomecánica'],
    languages: ['Español'],
    availability: 'Viernes de 09:00 a 15:00'
  },
];
