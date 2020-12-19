import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import AvatarUpload from './options/avatar-upload';

export default function UserOptions() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <section className="px-5 py-3 tracking-wide">
      <h1 className="text-3xl font-bold tracking-wide mb-5">Configuración</h1>
      <article className="grid grid-cols-auto-1fr w-full gap-x-3 items-center">
        <AvatarUpload />
        <div>
          <h2 className="text-lg font-medium">{user.displayName}</h2>
          <p className="text-xs">PLATIFY FREE</p>
        </div>
      </article>
    </section>
  );
}
