import { Redirect, useLocation } from '@reach/router';
import 'firebase/auth';
import HeaderMain from 'components/dashboard/header/header-main';
import { useContext, useEffect } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import AsideNavbarMain from 'components/dashboard/aside-navbar/aside-navbar_main';
import InitContentMain from 'components/dashboard/content/init-content_main';
import useUserData from 'hooks/useUserData';
import LoadingUserData from 'components/resources/loading-user-data';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { user, isAdmin, emailVerified } = authContext;

  const [getUserData, loading] = useUserData();

  // const location = useLocation();
  // console.log(location.pathname);
  console.log(isAdmin);

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return <LoadingUserData />;
  }

  return user && emailVerified ? (
    <main className="dashboard-main__container text-secondary grid w-full h-screen font-light">
      <AsideNavbarMain isAdmin={isAdmin} />
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
