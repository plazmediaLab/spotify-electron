import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCrK4d90TCnUByU91Txj0AhEBxxxvnEwSA',
  authDomain: 'platify-electron-28b95.firebaseapp.com',
  projectId: 'platify-electron-28b95',
  storageBucket: 'platify-electron-28b95.appspot.com',
  messagingSenderId: '653336074875',
  appId: '1:653336074875:web:c1dcad40e4261f82b620de'
};

const FirebaseApp = firebase.initializeApp(firebaseConfig);
const auth = FirebaseApp.auth();
const db = FirebaseApp.firestore();
const storage = FirebaseApp.storage();

export { auth, db, storage };

export default FirebaseApp;
