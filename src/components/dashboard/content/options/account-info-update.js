import ModalContent from 'components/resources/modal-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useRef, useState } from 'react';
import SignupFormShowpass from 'components/resources/signup_form_showpass';
import { reauthenticate } from 'utils/Api';
import AuthContext from 'reducer/Auth/AuthContext';

export default function AccountInfoUpdate({ user }) {
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState(1);
  const [open, setOpen] = useState(false);

  const passRef = useRef(null);

  const { email } = user;

  const authContext = useContext(AuthContext);
  const { toastMessageMethod } = authContext;

  const formik = useFormik({
    initialValues: {
      email: email,
      pass: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Introduce un correo electrónico valido.')
        .test(
          'same-value',
          'El email de la cuenta tiene que ser diferente para poder ser actualizado.',
          (value) => value !== email
        )
    }),
    onSubmit: async (values) => {
      if (step === 1) {
        setStep(2);
        setTimeout(() => {
          passRef.current.focus();
        }, 200);
      }
      if (step === 2) {
        reauthenticate(values.pass)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log('Error: ' + err);
            toastMessageMethod({
              type: 'error',
              message: 'SIN ACCESO: La contraseña no coincide con la cuenta.',
              closeTime: 4000
            });
          })
          .finally(() => {
            console.log('Finish...');
          });
      }
      // await userDataUpdate({ displayName: values.name });
      // setOpen(!open);
    }
  });

  return (
    <>
      <h4 className="font-medium block">Información de cuenta</h4>
      <hr className="block border-background-middlelight my-2" />
      <article className="my-5 grid grid-cols-1fr-auto relative">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-background-dark bg-opacity-50 rounded-md"></div>
        <p className="col-span-2 text-green-500">Proximamente...</p> */}
        <p className="tracking-wider">{email}</p>
        <button
          onClick={() => setOpen(!open)}
          className="text-sm rounded-full py-1 px-3 bg-secondary text-background-dark hover:bg-secondary-dark">
          Cambiar
        </button>
      </article>
      <ModalContent
        show={open}
        closeModal={() => setOpen(!open)}
        title="Actualizar Información de Cuenta">
        <form onSubmit={formik.handleSubmit}>
          <input
            disabled={step === 2}
            type="email"
            name="email"
            id="email"
            className="mb-3 placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden"
            placeholder="Escribe tu nuevo correo"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <p className="text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 mt-2">
              {formik.errors.email}
            </p>
          )}
          {step === 2 && (
            <p
              className={`${
                formik.errors.email ? 'mt-3' : ''
              } leading-4 text-sm mb-3 text-green-500`}>
              Se requiere acceso para realizar esta acción.
            </p>
          )}
          <div className={`relative ${step === 2 ? '' : 'hidden'}`}>
            <input
              ref={passRef}
              type={!showPass ? 'password' : 'text'}
              name="pass"
              id="pass"
              className="focus:outline-none focus:ring-2 focus:ring-green-600  placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden"
              placeholder="Escribe tu contraseña"
              value={formik.values.pass}
              onChange={formik.handleChange}
            />
            <SignupFormShowpass showPass={showPass} setShowPass={setShowPass} />
          </div>
          <div className="flex space-x-2">
            {(formik.errors.email || step === 2) && (
              <button
                type="button"
                onClick={() => {
                  setOpen(!open);
                  setStep(1);
                }}
                className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-secondary text-background-dark font-normal border border-secobg-secondary mt-5">
                Cancelar
              </button>
            )}
            {step === 1 && (
              <button
                disabled={formik.errors.email}
                type="submit"
                className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-brand-500 border border-brand-500 font-light mt-5">
                Siguiente
              </button>
            )}
            {step === 2 && (
              <button
                disabled={formik.errors.email}
                type="submit"
                className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-brand-500 border border-brand-500 font-light mt-5">
                Guardar
              </button>
            )}
          </div>
        </form>
      </ModalContent>
    </>
  );
}
