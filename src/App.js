import firebase from 'utils/Firebase';
import 'firebase/auth';
import { useContext, useEffect } from 'react';
import SplashScreen from 'components/resources/splash-screen';
import InitPage from 'components/init/init-page';
import AuthContext from 'reducer/Auth/AuthContext';
import Home from 'components/home/home';

function App() {
  const authContext = useContext(AuthContext);
  const {
    loadingProcess,
    user,
    emailVerified,
    loginMethod,
    loadingProcessMethod,
    emailVerifiedMethod
  } = authContext;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        loginMethod(null);
      } else {
        if (currentUser.emailVerified) {
          emailVerifiedMethod(currentUser.emailVerified);
        }
        loginMethod(currentUser);
      }
      loadingProcessMethod(false);
    });
  }, []);

  if (loadingProcess) {
    return <SplashScreen />;
  }

  return user && emailVerified ? <Home /> : <InitPage />;
}

export default App;
