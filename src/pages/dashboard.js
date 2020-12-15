import { Redirect } from '@reach/router';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';

export default function Dashboard() {
  const authContext = useContext(AuthContext);
  const { user, emailVerified } = authContext;

  return user && emailVerified ? (
    <h1 className="text-secondary">Dashboard page</h1>
  ) : (
    <Redirect to="/login" noThrow />
  );
}
