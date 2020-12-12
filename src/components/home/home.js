import firebase from 'utils/Firebase';

export default function Home() {
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
