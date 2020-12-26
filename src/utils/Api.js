import FirebaseApp, { db } from './Firebase';
import firebase from 'firebase/app';

// TODO · Checar todas las implementaciones de auth() para posibles errors 12/22/2020

export async function isUserAdmin(uid) {
  const res = await db.collection('admin').doc(uid).get();
  return res.exists;
}

async function reauthenticate(password) {
  var user = FirebaseApp.auth().currentUser;
  var cred = firebase.auth.EmailAuthProvider.credential(user.email, password);
  return user.reauthenticateWithCredential(cred);
}

export { reauthenticate };

export const errorManager = (Code) => {
  switch (Code) {
    case 'auth/wrong-password':
      return 'SIN ACCESO: La contraseña no coincide con la cuenta.';
    case 'auth/user-not-found':
      return 'USUARIO no encontrado, sin resultados para esa cuenta.';
    case 'auth/email-already-in-use':
      return 'El correo electrónico ya esta en uso con otra cuenta.';
    case 'auth/too-many-requests':
      return 'DESABILITADA temporalmente, el acceso a esta cuenta a sido limitado temporalmente por exeso de peticiones.';

    default:
      return 'ERROR en servidor, intentelo más tarde.';
  }
};
