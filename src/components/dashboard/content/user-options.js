import CircularProgressMaterialIcon from 'components/resources/circular-progress-material-icon';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import AvatarUpload from './options/avatar-upload';

export default function UserOptions() {
  const authContext = useContext(AuthContext);
  const { user, reloadData } = authContext;

  return (
    <section className="px-5 py-3 tracking-wide">
      <h1 className="text-3xl font-bold tracking-wide mb-5">Configuración</h1>
      <article className="grid grid-cols-auto-1fr w-full gap-x-3 items-center relative">
        {reloadData && (
          <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-transparent overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-10 p-4">
              <CircularProgressMaterialIcon />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-background-dark bg-opacity-70"></div>
          </div>
        )}
        <AvatarUpload uid={user.uid} photoURL={user.photoURL} />
        <div>
          <h2 className="text-lg font-medium">{user.displayName}</h2>
          <p className="text-xs">PLATIFY FREE</p>
        </div>
      </article>
    </section>
  );
}
