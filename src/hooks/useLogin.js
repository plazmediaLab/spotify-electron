import { useFormik } from 'formik';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import firebase from 'utils/Firebase';
import 'firebase/auth';
import 'react-toastify/dist/ReactToastify.css';
import AuthContext from 'reducer/Auth/AuthContext';

function useLogin(setShow) {
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const updateUserName = (body) => {
    firebase
      .auth()
      .currentUser.updateProfile(body)
      .catch(() => {
        toastMessageMethod({
          type: 'error',
          message:
            'Error al guardar el nombre de USUARIO, esto lo podras solucionar una vez iniciado sesión con tu correo y contraseña.',
          closeTime: 7000
        });
      });
  };

  const sendActivateAccountMail = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        toastMessageMethod({
          type: 'info',
          message: 'El link de verificación de cuenta ha sido enviado a tu correo electrónico.',
          closeTime: 10000
        });
        toastMessageMethod({
          type: 'static',
          message: 'Activa tu cuenta para poder iniciar sesión.'
        });
      })
      .catch(() => {
        toastMessageMethod({
          message: 'Ha ocurrido un error al enviar el correo de verificación de tu cuenta.',
          closeTime: 4000
        });
      });
  };

  const formik = useFormik({
    initialValues: {
      name: 'Adrian Nieves',
      email: 'hiwihed293@yektara.com',
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
        .then(() => {
          toastMessageMethod({
            type: 'success',
            message: 'Registro exitoso!.'
          });
          updateUserName({ displayName: values.name });
          sendActivateAccountMail();
          setShow(null);
        })
        .catch((err) => {
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

  return [formik, loading];
}

export default useLogin;
