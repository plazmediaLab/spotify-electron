import LoadingIcon from './loading-icon';
import PlazmediaLogo from 'design-by-white.svg';

export default function SplashScreen() {
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
