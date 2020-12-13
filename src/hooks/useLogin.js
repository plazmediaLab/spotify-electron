import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import firebase from 'utils/Firebase';
import 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from 'reducer/Auth/AuthContext';

function useLogin(setShow) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const updateUserName = (newName) => {
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: newName
      })
      .catch((err) => {
        toastMessageMethod({
          type: 'error',
          message:
            'Error al guardar el nombre de USUARIO, esto lo podras solucionar una vez iniciado sesión con tu correo y contraseña.',
          closeTime: 7000
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: 'Adrian Nieves',
      email: 'adriangd.1337@gmail.com',
      pass: '12345678'
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(10, 'Al menos 10 caracteres.')
        .required('El campo NOMBRE es requerido.'),
      email: Yup.string()
        .email('Introduce un CORREO valido.')
        .required('El campo EMAIL es requerido.'),
      pass: Yup.string()
        .min(8, 'Al menos 8 caracteres.')
        .required('El campo PASSWORD es requerido.')
    }),
    onSubmit: async (values) => {
      setLoading(true);

      firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.pass)
        .then((res) => {
          setError(null);
          toastMessageMethod({
            type: 'success',
            message:
              'Registro exitoso! - Al registrarte enviamos a tu correo electrónico el enlace para activar tu cuenta.',
            closeTime: 10000
          });
          updateUserName(values.name);
          toastMessageMethod({
            type: 'static',
            message: 'Activa tu cuenta para poder iniciar sesión.'
          });
          setShow(null);
        })
        .catch((err) => {
          setError(true);
          toastMessageMethod({
            type: 'error',
            message: err.message
          });
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  return [formik, loading, error];
}

export default useLogin;
