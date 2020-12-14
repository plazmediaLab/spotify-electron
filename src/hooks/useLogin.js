import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from 'utils/Firebase';
import AuthContext from 'reducer/Auth/AuthContext';

function useLogin(setShow) {
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const formik = useFormik({
    initialValues: {
      email: 'hiwihed293@yektara.com',
      pass: '12345678'
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Introduce un correo electrónico valido.')
        .required('El campo EMAIL es requerido.'),
      pass: Yup.string().required('El campo PASSWORD es requerido')
    }),
    onSubmit: async (values) => {
      setLoading(true);

      await firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.pass)
        .then((currentUser) => {
          console.log(currentUser.user.displayName);
          toastMessageMethod({
            type: 'success',
            message: `Hola ${currentUser.user.displayName.split(' ')[0]} - Bienvenido nuevamente`,
            closeTime: 5000
          });
          setShow(null);
        })
        .catch((err) => {
          console.log(err);
          if (err.code === 'auth/user-not-found') {
            toastMessageMethod({
              type: 'error',
              message: 'No hay USUARIO registrado con ese correo.',
              closeTime: 4000
            });
          }
          if (err.code === 'auth/wrong-password') {
            toastMessageMethod({
              type: 'error',
              message: 'La CONTRASEÑA no coincide con esta cuenta.',
              closeTime: 4000
            });
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  return [formik, loading];
}

export default useLogin;
