import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../lib/firestore-utils';

export interface AppSettings {
  address: string;
  phoneLine: string;
  phoneWhatsapp: string;
  hoursTueThu: string;
  hoursMonWedFri: string;
  aboutHero: string;
  aboutText: string;
}

const DEFAULT_SETTINGS: AppSettings = {
  address: "29 de Setiembre 2168, Lanús Este",
  phoneLine: "20717674",
  phoneWhatsapp: "11 2288 3581",
  hoursTueThu: "Mar. a Jue. – 11:00 a 20:00",
  hoursMonWedFri: "Lun. Mie. y Vie. – 08:00 a 18:00",
  aboutHero: "Consultorios Benedetti es un centro de salud dedicado al cuidado del movimiento, la función y la calidad de vida de las personas.",
  aboutText: "Consultorios Benedetti es un centro de salud dedicado al cuidado del movimiento, la función y la calidad de vida de las personas. Nació hace más de diez años como un proyecto profesional centrado en la kinesiología, con el objetivo de acompañar procesos de rehabilitación y recuperación desde una mirada clínica, humana y personalizada.\n\nDesde sus inicios, el consultorio se orientó a la rehabilitación traumatológica, deportiva y postquirúrgica, acompañando a pacientes en procesos de recuperación funcional y en la mejora de su calidad de vida. Con el paso del tiempo, el proyecto fue creciendo, incorporando nuevas áreas de trabajo y profundizando en distintos enfoques terapéuticos, siempre con el mismo objetivo: ayudar a las personas a moverse mejor, sentirse mejor y recuperar su bienestar.\n\nA lo largo de estos años, el trabajo clínico se fue ampliando e integrando nuevas herramientas. El cuidado quiropráctico ocupa hoy un lugar central dentro del consultorio. Este enfoque busca mejorar la función de la columna vertebral y su relación con el sistema nervioso, entendiendo que una columna con mejor función puede impactar positivamente en la movilidad, el bienestar general y la calidad de vida. La quiropráctica no se plantea como un tratamiento aislado, sino como un proceso de cuidado progresivo que acompaña al paciente en la recuperación y el mantenimiento de su salud.\n\nEn paralelo, el análisis de la pisada y la evaluación biomecánica se incorporaron como una herramienta fundamental para abordar alteraciones del apoyo plantar que pueden repercutir en pies, rodillas, cadera o columna. A partir de evaluaciones precisas, se diseñan y confeccionan soportes plantares personalizados, orientados a mejorar la función, corregir desequilibrios y favorecer tanto el rendimiento como el confort en la vida cotidiana.\n\nMás recientemente, el consultorio ha sumado un área vinculada a productos ortopédicos, orientada a brindar soluciones prácticas en procesos de rehabilitación, movilidad y cuidado postural. Esta incorporación forma parte de una visión integral que busca acompañar a cada persona no solo en el tratamiento clínico, sino también en las herramientas que facilitan su recuperación y autonomía.\n\nCon más de una década de trabajo sostenido, Consultorios Benedetti se ha consolidado como un espacio de referencia en la zona, combinando experiencia clínica, compromiso humano y una visión integral del cuidado de la salud. Nuestro propósito es claro: ayudar a cada persona a recuperar su función, mejorar su calidad de vida y sostener su bienestar a largo plazo."
};

export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = 'settings/global';
    const settingsDoc = doc(db, 'settings', 'global');
    
    const unsubscribe = onSnapshot(settingsDoc, (snapshot) => {
      if (snapshot.exists()) {
        setSettings(snapshot.data() as AppSettings);
      }
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { settings, loading };
}
