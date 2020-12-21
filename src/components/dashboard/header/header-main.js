import { Link } from '@reach/router';
import { useContext, useState } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import firebase from 'utils/Firebase';
import ButtonBackForward from './button-back_forward';
import './style.css';

export default function HeaderMain() {
  const [showMenu, setShowMenu] = useState(false);

  const authContext = useContext(AuthContext);
  const { user, logOutMethod } = authContext;

  // console.log(user);

  const { displayName, photoURL } = user;

  const SignOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        logOutMethod();
      });
  };

  return (
    <header
      id="header-container"
      className="relative bg-gradient-to-b from-background-light to-background flex justify-end space-x-4 items-center px-5">
      <ButtonBackForward />
      <div className="flex space-x-2 items-center text-secondary">
        {photoURL ? (
          <div className="w-7 h-7 rounded-full bg-background-dark overflow-hidden">
            <img src={photoURL} alt="User Avatar" className="w-full h-full rounded-full" />
          </div>
        ) : (
          <svg
            className="w-7 h-7 rounded-full bg-background-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <button title="Menú" onClick={() => setShowMenu(!showMenu)}>
          {displayName}
          <svg
            className="w-4 h-4 inline-block ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      {showMenu && (
        <div className="absolute right-5 -bottom-14 z-20">
          <ul className="bg-background shadow-container" onClick={() => setShowMenu(!showMenu)}>
            <li>
              <Link
                className="font-light py-1 px-4 text-left w-full hover:bg-background-middlelight block"
                to="/dashboard/options">
                Configuración
              </Link>
            </li>
            <li>
              <button
                className="font-light py-1 text-left px-4 w-full hover:bg-background-middlelight block"
                type="button"
                onClick={SignOut}>
                Cerrar sesión
              </button>
            </li>
          </ul>
        </div>
      )}
      {showMenu && (
        <button
          className="w-screen h-screen bg-transparent-0 absolute top-0 right-0 z-0"
          onClick={() => setShowMenu(!showMenu)}></button>
      )}
    </header>
  );
}
