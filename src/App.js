import firebase from 'utils/Firebase';
import 'firebase/auth';
import { useState } from 'react';
import SplashScreen from 'components/resources/splash-screen';
import InitPage from 'components/init/init-page';

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
    return <SplashScreen />;
  }

  return <InitPage />;
}

export default App;
