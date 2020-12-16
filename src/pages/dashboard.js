import { Redirect } from '@reach/router';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import firebase from 'utils/Firebase';
import 'firebase/auth';
import HeaderMain from 'components/dashboard/header/header-main';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { user, emailVerified, logOutMethod } = authContext;

  const SignOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        logOutMethod();
      });
  };

  return user && emailVerified ? (
    <main className="dashboard-main__container text-secondary grid w-full h-screen font-light">
      <aside>
        <h1 className="text-secondary">Aside Menu</h1>
        <button
          type="button"
          className="py-1 px-3 rounded-full text-xs bg-red-500 text-white"
          onClick={SignOut}>
          Log Out
        </button>
      </aside>
      <section className="dashboard-main__content bg-background grid grid-flow-row">
        <HeaderMain />
        <div>
          <h1>Section Content</h1>
        </div>
      </section>
      <footer className="col-span-2 bg-background-middlelight">
        <h1>Section Play</h1>
      </footer>
    </main>
  ) : (
    <Redirect to="/?auth=unauthorized" noThrow />
  );
}
