import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from './lib/firestore-utils';

const ADMINS_TO_SETUP = [
  { email: "cbenedetti@benedetti.com", password: "Benedetti.26" },
  { email: "naturalsoft@gmail.com", password: "NaturalSoft.2026" }
];

async function setupInitialAdmin() {
  for (const admin of ADMINS_TO_SETUP) {
    const { email, password } = admin;
    try {
      console.log(`Intentando configurar usuario administrador: ${email}...`);
      let user;
      
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        user = userCredential.user;
        console.log(`Usuario Auth creado con éxito para: ${email}`);
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          console.log(`El usuario Auth ${email} ya existe o está en uso.`);
          // We can just login to get the user object and verify/write Firestore doc
          try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            user = userCredential.user;
          } catch (loginErr) {
            console.warn(`No se pudo loguear temporalmente a ${email} para verificar Firestore. Probablemente la contraseña en Auth sea diferente. Procediendo de igual manera.`);
          }
        } else {
          console.error(`Error creando el usuario Auth para ${email}:`, error);
        }
      }

      if (user) {
        const path = `users/${user.uid}`;
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (!userDoc.exists()) {
            console.log(`Configurando perfil de admin para ${email} en Firestore...`);
            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              email: email,
              role: 'admin'
            });
            console.log(`¡Perfil de Firestore creado con éxito para ${email}!`);
          } else {
            console.log(`El perfil de Firestore para ${email} ya existe.`);
          }
        } catch (error) {
          handleFirestoreError(error, OperationType.WRITE, path);
        }
      }
    } catch (error: any) {
      console.error(`Error al configurar el administrador ${email}:`, error.message);
    }
  }
}

// Ejecutar la configuración de forma asoncrónica
setupInitialAdmin().then(() => {
  console.log("Configuración de administradores finalizada.");
}).catch(err => {
  console.error("Error en setupInitialAdmin:", err);
});
