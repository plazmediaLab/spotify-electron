import LoadingIcon from 'components/resources/loading-icon';
import ModalContent from 'components/resources/modal-content';
import SignupFormShowpass from 'components/resources/signup_form_showpass';
import { useFormik } from 'formik';
import { useContext, useRef, useState } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import { errorManager, reauthenticate } from 'utils/Api';
import { auth } from 'utils/Firebase';
import * as Yup from 'yup';

export default function PassUpdate({ user }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showNewPass1, setShowNewPass1] = useState(false);
  const [showNewPass2, setShowNewPass2] = useState(false);

  const passwordRef = useRef(null);
  const newPasswordRef = useRef(null);

  const authContext = useContext(AuthContext);
  const { toastMessageMethod, logOutMethod } = authContext;

  const validateSchema = (step) => {
    switch (step) {
      case 2:
        return {
          newPass1: Yup.string()
            .min(8, 'Al menos 8 caracteres.')
            .required('El campo NUEVA CONTRASEÑA es requerido.')
            .test(
              'same-password',
              'La CONTRASEÑA a cambiar tiene que ser diferente a la original para poder ser actualizada.',
              (value) => value !== formik.values.pass
            ),
          newPass2: Yup.string()
            .oneOf([Yup.ref('newPass1'), null], 'No coincide con la nueva contraseña.')
            .required('El campo CONFIRMAR CONTRASEÑA es requerido.')
        };

      default:
        return { pass: Yup.string().required('El campo de autenticación es requerido.') };
    }
  };

  const formik = useFormik({
    initialValues: {
      pass: '',
      newPass1: '',
      newPass2: ''
    },
    validationSchema: Yup.object(validateSchema(step)),
    onSubmit: async (values) => {
      setLoading(true);
      const { pass, newPass1, newPass2 } = values;

      if (Object.keys(formik.errors).length > 1) {
        setErrors({});
      }

      if (step === 1) {
        reauthenticate(pass)
          .then((res) => {
            setErrors({});
            setStep(2);
          })
          .catch((err) => {
            setErrors({
              errorPass: true
            });
            toastMessageMethod({
              type: 'error',
              message: errorManager(err.code)
            });
            passwordRef.current.focus();
          })
          .finally(() => {
            setLoading(false);
            setTimeout(() => {
              newPasswordRef.current.focus();
            }, 200);
          });
      }
      if (step === 2) {
        const currentUser = auth.currentUser;
        currentUser
          .updatePassword(values.newPass1)
          .then(() => {
            auth.signOut().then(() => {
              logOutMethod();
              toastMessageMethod({
                type: 'success',
                message: 'CONTRASEÑA actualizada correctamente.',
                closeTime: 4000
              });
              toastMessageMethod({
                type: 'static',
                message: 'Inicia sesión con TU NUEVA CONTRASEÑA.',
                delay: 1500
              });
            });
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
    }
  });

  const openModal = () => {
    setOpen(!open);
    setTimeout(() => {
      passwordRef.current.focus();
    }, 200);
  };

  return (
    <>
      <h4 className="font-medium block">Cambiar contraseña</h4>
      <hr className="block border-background-middlelight my-2" />
      <article className="my-8 grid grid-cols-1fr-auto relative">
        <p className="">
          Contraseña: <span className="text-xl align-middle text-background-light">**********</span>
        </p>
        <button
          onClick={openModal}
          className="text-sm rounded-full py-1 px-3 bg-secondary text-background-dark hover:bg-secondary-dark">
          Cambiar
        </button>
      </article>
      <ModalContent show={open} closeModal={() => setOpen(!open)} title="Actualizar Contraseña">
        <form onSubmit={formik.handleSubmit}>
          {step === 1 && (
            <>
              <p className={`leading-4 text-sm mb-3 text-green-500`}>
                Se requiere acceso para realizar esta acción.
              </p>
              <div className="relative">
                <input
                  type={!showPass ? 'password' : 'text'}
                  name="pass"
                  ref={passwordRef}
                  placeholder="Escribe tu contraseña actual"
                  className={`${
                    !errors.errorPass ? 'focus:ring-green-600' : 'ring-red-600 ring-2'
                  } focus:outline-none focus:ring-2 placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden`}
                  value={formik.values.pass}
                  onChange={formik.handleChange}
                />
                <SignupFormShowpass showPass={showPass} setShowPass={setShowPass} />
              </div>
              {formik.errors.pass && (
                <p className="mt-3 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2">
                  {formik.errors.pass}
                </p>
              )}
              {errors.errorPass && (
                <p className="mt-3 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2">
                  Acceso denegado, contraseña no coincide.
                </p>
              )}
              <div className="flex space-x-2">
                {(Object.keys(errors).length > 0 ||
                  Object.keys(formik.errors).length > 0 ||
                  step === 2) && (
                  <button
                    type="button"
                    onClick={() => {
                      setLoading(false);
                      setOpen(!open);
                      setErrors({});
                    }}
                    className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-secondary text-background mt-4 border border-secondary">
                    Cancelar
                  </button>
                )}
                <button
                  disabled={loading}
                  type="submit"
                  className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-brand-500 hover:bg-brand-600 mt-4 border border-brand-500">
                  {loading ? (
                    <LoadingIcon w="20" h="20" fill="#fff" classN="mx-auto my-small" />
                  ) : (
                    'Siguiente'
                  )}
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="relative">
                <input
                  ref={newPasswordRef}
                  disabled={loading}
                  placeholder="Escribe tu nueva contraseña"
                  type={!showNewPass1 ? 'password' : 'text'}
                  name="newPass1"
                  value={formik.values.newPass1}
                  onChange={formik.handleChange}
                  className={`${
                    !formik.errors.newPass1 ? 'focus:ring-green-600' : 'ring-red-600 ring-2'
                  } focus:outline-none focus:ring-2 placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden mb-4`}
                />
                <SignupFormShowpass showPass={showNewPass1} setShowPass={setShowNewPass1} />
              </div>
              {formik.errors.newPass1 && (
                <p className="mb-3 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2">
                  {formik.errors.newPass1}
                </p>
              )}
              <div className="relative">
                <input
                  disabled={loading || formik.errors.newPass1}
                  placeholder="Confirma nueva contraseña"
                  type={!showNewPass2 ? 'password' : 'text'}
                  name="newPass2"
                  value={formik.values.newPass2}
                  onChange={formik.handleChange}
                  className={`${
                    !formik.errors.newPass2 ? 'focus:ring-green-600' : 'ring-red-600 ring-2'
                  } focus:outline-none focus:ring-2 placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden`}
                />
                <SignupFormShowpass showPass={showNewPass2} setShowPass={setShowNewPass2} />
              </div>
              {formik.errors.newPass2 && (
                <p className="mt-3 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2">
                  {formik.errors.newPass2}
                </p>
              )}
              <div className="flex space-x-2">
                {(Object.keys(formik.errors).length > 0 || step === 2) && (
                  <button
                    type="button"
                    onClick={() => {
                      setLoading(false);
                      setOpen(!open);
                      setStep(1);
                      setErrors({});
                    }}
                    className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-secondary text-background mt-4 border border-secondary">
                    Cancelar
                  </button>
                )}
                <button
                  disabled={loading || Object.keys(formik.errors).length > 0}
                  type="submit"
                  className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-brand-500 hover:bg-brand-600 mt-4 border border-brand-500">
                  {loading ? (
                    <LoadingIcon w="20" h="20" fill="#fff" classN="mx-auto my-small" />
                  ) : (
                    'Guardar'
                  )}
                </button>
              </div>
            </>
          )}
        </form>
      </ModalContent>
    </>
  );
}
