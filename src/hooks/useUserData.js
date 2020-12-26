import { useContext, useState } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import { isUserAdmin } from 'utils/Api';

function useUserData() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const authContext = useContext(AuthContext);
  const { user, isAdminMethod } = authContext;

  const getUserData = async () => {
    if (user) {
      await isUserAdmin(user.uid)
        .then((res) => {
          isAdminMethod(res);
        })
        .then(() => {
          setLoading(false);
        });
    }
  };

  return [getUserData, loading, error];
}

export default useUserData;
