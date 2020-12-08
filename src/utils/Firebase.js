import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyA4IRapNKCyEY_A4vEeO0BJPCZuc7zHMCc',
  authDomain: 'electron-spotify.firebaseapp.com',
  projectId: 'electron-spotify',
  storageBucket: 'electron-spotify.appspot.com',
  messagingSenderId: '1018206443212',
  appId: '1:1018206443212:web:29c4538d65676732929469'
};

export default firebase.initializeApp(firebaseConfig);
