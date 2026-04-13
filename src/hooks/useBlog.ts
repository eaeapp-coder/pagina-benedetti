import { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { handleFirestoreError, OperationType } from '../lib/firestore-utils';
import { BlogPost, BLOG_POSTS } from '../constants';

export function useBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = 'blog';
    const q = query(collection(db, 'blog'), orderBy('date', 'desc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const fetchedPosts = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        })) as BlogPost[];
        setPosts(fetchedPosts);
      } else {
        setPosts(BLOG_POSTS);
      }
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const addPost = async (newPost: Omit<BlogPost, 'id'>) => {
    const path = 'blog';
    try {
      await addDoc(collection(db, 'blog'), {
        ...newPost
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    }
  };

  const updatePost = async (id: string, updatedPost: Partial<BlogPost>) => {
    const path = `blog/${id}`;
    try {
      await updateDoc(doc(db, 'blog', id), updatedPost);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, path);
    }
  };

  const deletePost = async (id: string) => {
    const path = `blog/${id}`;
    try {
      await deleteDoc(doc(db, 'blog', id));
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, path);
    }
  };

  return { posts, loading, addPost, updatePost, deletePost };
}
