import FirebaseApp, { auth, db } from './Firebase';
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
