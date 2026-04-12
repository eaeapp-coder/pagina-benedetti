import { auth, db } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

async function setupInitialAdmin() {
  const email = "CBendetti@benedetti.com";
  const password = "Benedetti.26";

  try {
    console.log("Intentando crear usuario administrador...");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log("Usuario creado con éxito. Configurando perfil en Firestore...");
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: email,
      role: 'admin'
    });

    console.log("¡Administrador configurado con éxito!");
    console.log("Email:", email);
    console.log("Password:", password);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log("El usuario ya existe. No es necesario crearlo de nuevo.");
    } else {
      console.error("Error al configurar el administrador:", error.message);
    }
  }
}

// Ejecutar la configuración
setupInitialAdmin();
