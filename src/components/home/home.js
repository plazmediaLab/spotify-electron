import firebase from 'utils/Firebase';
import 'firebase/auth';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';

export default function Home() {
  // TODO · Crear metodo para cerrar sesión 12/13/2020

  const authContext = useContext(AuthContext);
  const { signOutnMethod } = authContext;

  const signOut = () => {
    signOutnMethod();
    firebase.auth().signOut();
    console.log('Sign Out...');
  };

  return (
    <main className="bg-background text-secondary p-5 rounded mt-5 w-11/12 mx-auto">
      <h1>Usuario logeado</h1>
      <button onClick={signOut} className="py-2 px-3 rounded-full bg-secondary text-background">
        Logout
      </button>
    </main>
  );
}
