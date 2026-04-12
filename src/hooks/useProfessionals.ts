import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { Doctor, DOCTORS } from '../constants';

export function useProfessionals() {
  const [professionals, setProfessionals] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'professionals'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Doctor[];
        setProfessionals(docs);
      } else {
        setProfessionals(DOCTORS);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addProfessional = async (professional: Omit<Doctor, 'id'>) => {
    await addDoc(collection(db, 'professionals'), {
      ...professional,
      createdAt: serverTimestamp()
    });
  };

  const updateProfessional = async (id: string, professional: Partial<Doctor>) => {
    const docRef = doc(db, 'professionals', id);
    await updateDoc(docRef, {
      ...professional,
      updatedAt: serverTimestamp()
    });
  };

  const deleteProfessional = async (id: string) => {
    await deleteDoc(doc(db, 'professionals', id));
  };

  return { professionals, loading, addProfessional, updateProfessional, deleteProfessional };
}
