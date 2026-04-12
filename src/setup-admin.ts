import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './lib/firestore-utils';

async function setupInitialAdmin() {
  const email = "cbenedetti@benedetti.com";
  const password = "Benedetti.26";

  // Check if we are already logged in as the admin
  if (auth.currentUser?.email === email) {
    console.log("Ya has iniciado sesión como administrador.");
    // Even if logged in, check if Firestore doc exists
    try {
      const userDoc = await getDoc(doc(db, 'users', auth.currentUser.uid));
      if (!userDoc.exists()) {
        console.log("El perfil de Firestore falta, creándolo...");
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          email: email,
          role: 'admin'
        });
        console.log("¡Perfil de Firestore creado con éxito!");
      }
    } catch (error) {
      console.error("Error al verificar/crear perfil de administrador existente:", error);
    }
    return;
  }

  try {
    console.log("Intentando configurar usuario administrador...");
    let user;
    
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      user = userCredential.user;
      console.log("Usuario Auth creado con éxito.");
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        console.log("El usuario Auth ya existe. Intentando iniciar sesión para verificar Firestore...");
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
      } else {
        throw error;
      }
    }

    if (user) {
      const path = `users/${user.uid}`;
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (!userDoc.exists()) {
          console.log("Configurando perfil en Firestore...");
          await setDoc(doc(db, 'users', user.uid), {
            uid: user.uid,
            email: email,
            role: 'admin'
          });
          console.log("¡Perfil de Firestore creado con éxito!");
        } else {
          console.log("El perfil de Firestore ya existe.");
        }
        console.log("¡Administrador listo!");
      } catch (error) {
        handleFirestoreError(error, OperationType.WRITE, path);
      }
    }
  } catch (error: any) {
    console.error("Error al configurar el administrador:", error.message);
  }
}

// Ejecutar la configuración
setupInitialAdmin();
