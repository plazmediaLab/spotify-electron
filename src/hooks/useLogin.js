import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import firebase from 'utils/Firebase';
import AuthContext from 'reducer/Auth/AuthContext';
import { useNavigate } from '@reach/router';
import { errorManager } from 'utils/Api';

function useLogin() {
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'adriangd.1337@gmail.com',
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
          if (currentUser.user.emailVerified) {
            toastMessageMethod({
              type: 'success',
              message: `Hola ${
                currentUser.user.displayName.split(' ')[0]
              } - Bienvenido de nuevo a Platify`,
              closeTime: 5000
            });
            navigate('/dashboard');
          } else {
            toastMessageMethod({
              type: 'static',
              message: 'Activa tu cuenta para poder iniciar sesión.'
            });
            navigate('/');
          }
        })
        .catch((err) => {
          toastMessageMethod({
            type: 'error',
            message: errorManager(err.code),
            closeTime: 4000
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  return [formik, loading];
}

export default useLogin;
