import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, onSnapshot, query, setDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { CATALOG_CATEGORIES } from '../constants';
import { handleFirestoreError, OperationType } from '../lib/firestore-utils';

export interface CatalogCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
  image: string;
  createdAt?: any;
}

export function useCatalog() {
  const [categories, setCategories] = useState<CatalogCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = 'catalog';
    const q = query(collection(db, 'catalog'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const docs = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as CatalogCategory[];
        // Sort based on order in CATALOG_CATEGORIES
        const sortedDocs = [...docs].sort((a, b) => {
          const indexA = CATALOG_CATEGORIES.findIndex(cat => cat.id === a.id);
          const indexB = CATALOG_CATEGORIES.findIndex(cat => cat.id === b.id);
          
          // If neither found, keep existing order
          if (indexA === -1 && indexB === -1) return 0;
          
          // If A not found, put at end
          if (indexA === -1) return 1;
          
          // If B not found, put at end
          if (indexB === -1) return -1;
          
          return indexA - indexB;
        });
        setCategories(sortedDocs);
      } else {
        // Fallback to static constants if firestore collection is empty
        setCategories(CATALOG_CATEGORIES as CatalogCategory[]);
      }
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const saveCatalogCategory = async (category: CatalogCategory) => {
    const path = `catalog/${category.id}`;
    try {
      const docRef = doc(db, 'catalog', category.id);
      await setDoc(docRef, {
        id: category.id,
        title: category.title,
        description: category.description,
        items: category.items || [],
        image: category.image || '',
        updatedAt: serverTimestamp()
      }, { merge: true });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
      throw error;
    }
  };

  const deleteCatalogCategory = async (id: string) => {
    const path = `catalog/${id}`;
    try {
      await deleteDoc(doc(db, 'catalog', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
      throw error;
    }
  };

  return { categories, loading, saveCatalogCategory, deleteCatalogCategory };
}
