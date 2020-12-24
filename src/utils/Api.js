import FirebaseApp, { auth, db } from './Firebase';

// TODO · Checar todas las implementaciones de auth() para posibles errors 12/22/2020

export async function isUserAdmin(uid) {
  const res = await db.collection('admin').doc(uid).get();
  return res.exists;
}

export const reauthenticate = (password) => {
  const user = auth.currentUser;
  console.log(user);

  let cred = FirebaseApp.auth.EmailAuthProvider.credential('yicata4962@febeks.com', password);

  return auth.reauthenticateWithCredential(cred);
};
