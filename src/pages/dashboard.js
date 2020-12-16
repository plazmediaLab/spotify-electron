import { Redirect, useLocation } from '@reach/router';
import 'firebase/auth';
import HeaderMain from 'components/dashboard/header/header-main';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import AsideNavbarMain from 'components/dashboard/aside-navbar/aside-navbar_main';
import InitContentMain from 'components/dashboard/content/init-content_main';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { user, emailVerified } = authContext;

  const location = useLocation();
  console.log(location.pathname);

  return user && emailVerified ? (
    <main className="dashboard-main__container text-secondary grid w-full h-screen font-light">
      <AsideNavbarMain />
      <section className="dashboard-main__content bg-background grid grid-flow-row">
        <HeaderMain />
        <InitContentMain />
      </section>
      <footer className="col-span-2 bg-background-middlelight">
        <h1>Section Play</h1>
      </footer>
    </main>
  ) : (
    <Redirect to="/?auth=unauthorized" noThrow />
  );
}
