import firebase from 'utils/Firebase';
import 'firebase/auth';
import { useContext, useEffect } from 'react';
import SplashScreen from 'components/resources/splash-screen';
import AuthContext from 'reducer/Auth/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import 'style/style.css';
import { Router } from '@reach/router';
import Home from 'pages/home';
import Dashboard from 'pages/dashboard';
import LayoutToast from 'components/layout/layout-toast';
import Login from 'pages/login';
import SignUp from 'pages/signup';
import HomeMainNav from 'components/home/home-main-nav';

function App() {
  const authContext = useContext(AuthContext);
  const {
    loadingProcess,
    loginMethod,
    reloadData,
    loadingProcessMethod,
    emailVerifiedMethod
  } = authContext;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
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
    // eslint-disable-next-line
  }, [reloadData]);

  if (loadingProcess) {
    return <SplashScreen />;
  }

  // return <Layout>{user && emailVerified ? <Home /> : <InitPage />}</Layout>;
  return (
    <LayoutToast>
      <section className="w-fill">
        {/* <nav className="absolute top-0 left-0 z-20 w-full bg-background-light bg-opacity-70 p-2 text-white text-center flex justify-center space-x-2">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav> */}
        <Router>
          <Home path="/">
            <HomeMainNav path="*" />
            <Login path="login" />
            <SignUp path="signup" />
          </Home>
          <Dashboard path="/dashboard/*" />
        </Router>
      </section>
    </LayoutToast>
  );
}

export default App;
