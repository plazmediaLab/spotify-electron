import firebase from './Firebase';
import 'firebase/firestore';

export const db = firebase.firestore();

export async function isUserAdmin(uid) {
  const res = await db.collection('admin').doc(uid).get();
  return res.exists;
}
