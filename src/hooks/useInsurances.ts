import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, addDoc, setDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { InsuranceProvider, INSURANCE_PROVIDERS } from '../constants';

export function useInsurances() {
  const [insurances, setInsurances] = useState<InsuranceProvider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'insurances'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as InsuranceProvider[];
        setInsurances(docs);
      } else {
        setInsurances(INSURANCE_PROVIDERS);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addInsurance = async (insurance: Omit<InsuranceProvider, 'id'>) => {
    await addDoc(collection(db, 'insurances'), {
      ...insurance,
      createdAt: serverTimestamp()
    });
  };

  const updateInsurance = async (id: string, insurance: Partial<InsuranceProvider>) => {
    const docRef = doc(db, 'insurances', id);
    await setDoc(docRef, {
      ...insurance,
      updatedAt: serverTimestamp()
    }, { merge: true });
  };

  const deleteInsurance = async (id: string) => {
    await deleteDoc(doc(db, 'insurances', id));
  };

  return { insurances, loading, addInsurance, updateInsurance, deleteInsurance };
}
