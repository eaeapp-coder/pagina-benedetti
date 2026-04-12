import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

async function setupInitialAdmin() {
  const email = "CBenedetti@benedetti.com";
  const password = "Benedetti.26";

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
    }
  } catch (error: any) {
    console.error("Error al configurar el administrador:", error.message);
  }
}

// Ejecutar la configuración
setupInitialAdmin();
