import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import AccountInfoUpdate from './options/account-info-update';
import UserInfoUpdate from './options/user-info-update';

export default function UserOptions() {
  const authContext = useContext(AuthContext);
  const { user, reloadData } = authContext;

  return (
    <section className="px-5 py-3 tracking-wide">
      <h4 className="text-3xl font-bold tracking-wide mb-5">Configuración</h4>
      <UserInfoUpdate user={user} reloadData={reloadData} />
      <AccountInfoUpdate user={user} />
    </section>
  );
}
