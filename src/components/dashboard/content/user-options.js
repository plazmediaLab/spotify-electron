import CircularProgressMaterialIcon from 'components/resources/circular-progress-material-icon';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import UserInfoUpdate from './options/user-info-update';

export default function UserOptions() {
  const authContext = useContext(AuthContext);
  const { user, reloadData } = authContext;

  return (
    <section className="px-5 py-3 tracking-wide">
      <h1 className="text-3xl font-bold tracking-wide mb-5">Configuración</h1>
      <UserInfoUpdate user={user} reloadData={reloadData} />
      <h4 className="font-medium block">Información de cuenta</h4>
      <hr className="block border-background-middlelight my-2" />
      <article className="my-2"></article>
    </section>
  );
}
