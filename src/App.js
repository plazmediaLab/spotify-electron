import firebase from 'utils/Firebase';
import 'firebase/auth';
import { useState } from 'react';
import LoadingIcon from './components/resources/loading-icon';
import PlazmediaLogo from './design-by-white.svg';

function App() {
  const [loged, setLoged] = useState(null);
  const [loading, setLoading] = useState(true);

  firebase.auth().onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      setLoged(null);
    } else {
      setLoged(currentUser);
    }
    setLoading(false);
  });

  if (loading) {
    return (
      <div className="loading-page grid place-items-center w-full h-screen text-center">
        <section>
          <LoadingIcon w="60" h="60" classN="mx-auto" fill="#7000f8" />
          <p className="text-secondary font-medium tracking-wider mt-4">Loading...</p>
        </section>
        <footer className="p-5">
          <img src={PlazmediaLogo} alt="Plazmedia Logo" className="h-10 opacity-40 mr-5" />
        </footer>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-3 px-5 bg-white mt-5 rounded-md bg-background text-secondary">
      <h1>Create react app - Spotify</h1>
      <p>Test</p>
    </div>
  );
}

export default App;
