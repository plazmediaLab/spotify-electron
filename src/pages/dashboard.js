import { Redirect } from '@reach/router';
import 'firebase/auth';
import HeaderMain from 'components/dashboard/header/header-main';
import { useContext, useEffect } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import AsideNavbarMain from 'components/dashboard/aside-navbar/aside-navbar_main';
import InitContentMain from 'components/dashboard/content/init-content_main';
import useUserData from 'hooks/useUserData';
import LoadingUserData from 'components/resources/loading-user-data';
import useArtistsData from 'hooks/useArtistsData';
import useAlbumsData from 'hooks/useAlbumsData';
import PlayerSectionMain from 'components/dashboard/player/player-section-main';
import useSongsData from 'hooks/useSongsData';
import ActionWindowsButtons from 'components/resources/action-windows-buttons';

export default function Dashboard() {
  // TODO · Verificar errores en login con datos de user 12/25/2020

  const authContext = useContext(AuthContext);
  const { user, isAdmin, emailVerified } = authContext;

  const [getUserData, loading] = useUserData();
  const [getArtistsData] = useArtistsData();
  const [getAlbumsData] = useAlbumsData();
  const [getSongsData] = useSongsData();

  useEffect(() => {
    getUserData();
    // onSnapShot sistem
    getArtistsData();
    getAlbumsData();
    getSongsData();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <LoadingUserData />;
  }

  return user && emailVerified ? (
    <main className="dashboard-main__container text-secondary grid w-full h-screen font-light">
      <div
        className="col-span-2 grid place-items-center text-secondary-dark text-xs tracking-wider"
        style={{ height: '30px', width: '100%' }}>
        <h1 className="text-center w-full" style={{ WebkitAppRegion: 'drag' }}>
          Platify v1.0.0
        </h1>
        <ActionWindowsButtons />
      </div>
      <AsideNavbarMain isAdmin={isAdmin} />
      <section className="dashboard-main__content bg-background grid grid-flow-row">
        <HeaderMain />
        <InitContentMain />
      </section>
      <footer className="col-span-2 bg-background-middlelight">
        <PlayerSectionMain />
      </footer>
    </main>
  ) : (
    <Redirect to="/?auth=unauthorized" noThrow />
  );
}
