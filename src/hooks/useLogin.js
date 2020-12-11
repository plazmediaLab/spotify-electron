import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import firebase from 'utils/Firebase';
import 'firebase/auth';

function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
          console.log(res);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  });

  return [formik, loading, error];
}

export default useLogin;
