import { Redirect, useNavigate } from '@reach/router';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import firebase from 'utils/Firebase';
import 'firebase/auth';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { user, emailVerified, logOutMethod } = authContext;

  const SignOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        logOutMethod();
      });
  };

  return user && emailVerified ? (
    <main className="pt-12 px-2">
      <h1 className="text-secondary">Dashboard page</h1>
      <button
        type="button"
        className="py-1 px-3 rounded-full text-xs bg-red-500 text-white"
        onClick={SignOut}>
        Log Out
      </button>
    </main>
  ) : (
    <Redirect to="/?auth=unauthorized" noThrow />
  );
}
