import { useContext, useState } from 'react';
import firebase from 'utils/Firebase';
import 'firebase/auth';
import AuthContext from 'reducer/Auth/AuthContext';

function useUserDataUpdate() {
  const authContext = useContext(AuthContext);
  const { toastMessageMethod, reloadDataMethod } = authContext;

  const userDataUpdate = async (body) => {
    reloadDataMethod(true);
    firebase
      .auth()
      .currentUser.updateProfile(body)
      .catch(() => {
        toastMessageMethod({
          type: 'error',
          message:
            'Error al actualizar la información de usuario, intentelo nuevamente en un momento, esto no afectará el funcnionamiento de PLATIFY.',
          closeTime: 7000
        });
      })
      .finally(() => {
        reloadDataMethod(false);
      });
  };

  return [userDataUpdate];
}

export default useUserDataUpdate;
