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
}

const DEFAULT_SETTINGS: AppSettings = {
  address: "29 de Setiembre 2168, Lanús Este",
  phoneLine: "20717674",
  phoneWhatsapp: "11 2288 3581",
  hoursTueThu: "Mar. a Jue. – 11:00 a 20:00",
  hoursMonWedFri: "Lun. Mie. y Vie. – 08:00 a 18:00"
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
