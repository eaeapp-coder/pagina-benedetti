import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, onSnapshot, query, addDoc, setDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { InsuranceProvider, INSURANCE_PROVIDERS } from '../constants';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function useInsurances() {
  const [insurances, setInsurances] = useState<InsuranceProvider[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'insurances'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as InsuranceProvider[];
        docs.sort((a, b) => {
          const orderA = a.order ?? 9999;
          const orderB = b.order ?? 9999;
          if (orderA !== orderB) return orderA - orderB;
          return a.name.localeCompare(b.name);
        });
        setInsurances(docs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addInsurance = async (insurance: Omit<InsuranceProvider, 'id'>) => {
    try {
      await addDoc(collection(db, 'insurances'), {
        ...insurance,
        order: insurances.length,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'insurances');
    }
  };

  const updateInsurance = async (id: string, insurance: Partial<InsuranceProvider>) => {
    try {
      const docRef = doc(db, 'insurances', id);
      await setDoc(docRef, {
        ...insurance,
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, 'insurances/' + id);
    }
  };

  const updateInsurancesOrder = async (reorderedItems: InsuranceProvider[]) => {
    try {
      const promises = reorderedItems.map((item, index) => {
        const docRef = doc(db, 'insurances', item.id);
        return setDoc(docRef, { order: index, updatedAt: serverTimestamp() }, { merge: true });
      });
      await Promise.all(promises);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, 'insurances');
    }
  };

  const deleteInsurance = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'insurances', id));
    } catch (error) {
      console.error('Error in deleteInsurance:', error);
      handleFirestoreError(error, OperationType.DELETE, 'insurances/' + id);
    }
  };

  return { insurances, loading, addInsurance, updateInsurance, updateInsurancesOrder, deleteInsurance };
}
