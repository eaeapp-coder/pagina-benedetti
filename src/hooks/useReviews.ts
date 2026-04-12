import { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../lib/firestore-utils';

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  createdAt: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "1",
    author: "Jonathan Delacour",
    rating: 5,
    text: "Súper recomendables. Quiero hacer una mención especial para el Quiropráctico. Agradezco a su técnica en la especialidad. Gracias a cada sesión que realizó con Esteban, puedo descansar mejor, no despierto con dolores. Y puedo realizar mis actividades con normalidad.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  },
  {
    id: "2",
    author: "Joaquin Miranda",
    rating: 5,
    text: "muy conforme con las plantilla, cómodas desde el primer dia . super recomendable y exelente atención!!!! gracias.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString()
  },
  {
    id: "3",
    author: "Bruno Fontana",
    rating: 4,
    text: "Muy recomendado. Excelente atención de todo el personal. Empece hace un año y medio por la escoliosis que tengo,note muchas las mejoras con el paso del tiempo,las mejoras no son de un dia para otro,todo lleva su tiempo. No sentis ningun dolor con los ajustes",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 21).toISOString()
  },
  {
    id: "4",
    author: "Brisa Alaniz",
    rating: 5,
    text: "Recomiendo al 100%, venia con muchos dolores de espalda y con las sesiones se fue disminuyendo demasiado junto a ejercicios que me mandaron, la verdad que fue un antes y un despues. Ademas de la buena onda y la amabilidad❤️",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString()
  },
  {
    id: "5",
    author: "Analia Grynka",
    rating: 5,
    text: "Mi experiencia es muy positiva. Inicié tratamiento quiropráctico por dolores de cervical y lumbar los cuales fueron mejorando con las sesiones. Hoy estoy en mantenimiento mensual y sigo muy bien.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7).toISOString()
  },
  {
    id: "6",
    author: "Xoana Drezek",
    rating: 5,
    text: "Excelente atención y cuidado, te explican todo con detalle, están atentos a los ejercicios y son personalizados según el problema que tengas, el personal de recepción súper amorosos yos profesionales son muy simpáticos y alegres, excelente lugar y clima.",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString()
  }
];

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = 'reviews';
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'), limit(10));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const fetchedReviews = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        })) as Review[];
        setReviews(fetchedReviews);
      } else {
        setReviews(DEFAULT_REVIEWS);
      }
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addReview = async (newReview: Omit<Review, 'id' | 'createdAt'>) => {
    const path = 'reviews';
    try {
      await addDoc(collection(db, 'reviews'), {
        ...newReview,
        createdAt: new Date().toISOString()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const updateReview = async (id: string, updatedReview: Partial<Review>) => {
    const path = `reviews/${id}`;
    try {
      await updateDoc(doc(db, 'reviews', id), updatedReview);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const deleteReview = async (id: string) => {
    const path = `reviews/${id}`;
    try {
      await deleteDoc(doc(db, 'reviews', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  return { reviews, loading, addReview, updateReview, deleteReview };
}
