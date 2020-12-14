import firebase from 'utils/Firebase';
import 'firebase/auth';

export default function Home() {
  // TODO · Crear metodo para cerrar sesión 12/13/2020

  return (
    <main className="bg-background text-secondary p-5 rounded mt-5 w-11/12 mx-auto">
      <h1>Usuario logeado</h1>
      <button
        onClick={() => firebase.auth().signOut()}
        className="py-2 px-3 rounded-full bg-secondary text-background">
        Logout
      </button>
    </main>
  );
}
