import ModalContent from 'components/resources/modal-content';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import * as Yup from 'yup';

export default function PassUpdate({ user }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);

  const passwordRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      pass1: '',
      pass2: ''
    },
    validationSchema: Yup.object({
      pass1: Yup.string().required('El campo CONTRASEÑA es requerido.'),
      pass2: Yup.string().required('El campo CONTRASEÑA es requerido.')
    }),
    onSubmit: async (values) => {
      console.log(values);
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
            <div className="relative">
              <input type="password" ref={passwordRef} />
            </div>
          )}
        </form>
      </ModalContent>
    </>
  );
}
