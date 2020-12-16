import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import CircularProgressMaterialIcon from './circular-progress-material-icon';

export default function LoadingUserData(){
  // TODO · Condicional para renderizar imagen de avatar por defecto o la imagen de perfil 12/16/2020 

  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <main className="grid place-items-center h-screen text-center font-light tracking-wider text-secondary-dark">
        <section>
          <div className="w-28 h-28 mx-auto relative">
            <svg
              className="w-24 h-24 absolute top-2 left-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0.5}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <CircularProgressMaterialIcon />
          </div>
          <p className="text-secondary text-xl">{user.displayName}</p>
          <p className="mt-3">Cargando...</p>
        </section>
      </main>
  );
};