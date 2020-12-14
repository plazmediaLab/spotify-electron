import firebase from 'utils/Firebase';
import 'firebase/auth';
import { useContext } from 'react';
import SplashScreen from 'components/resources/splash-screen';
import InitPage from 'components/init/init-page';
import AuthContext from 'reducer/Auth/AuthContext';
import Home from 'components/home/home';
import Layout from 'components/layout';
import 'react-toastify/dist/ReactToastify.css';
import 'style/style.css';

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

  console.log(user);

  firebase.auth().onAuthStateChanged((currentUser) => {
    if (currentUser && !user) {
      if (currentUser.emailVerified) {
        emailVerifiedMethod(currentUser.emailVerified);
        loginMethod(currentUser);
      } else {
        loginMethod(null);
        firebase.auth().signOut();
      }
    }
    loadingProcess && loadingProcessMethod(false);
  });

  if (loadingProcess) {
    return <SplashScreen />;
  }

  return <Layout>{user && emailVerified ? <Home /> : <InitPage />}</Layout>;
}

export default App;
