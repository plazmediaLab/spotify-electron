import ModalContent from 'components/resources/modal-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import AvatarUpload from './avatar-upload';
import useUserDataUpdate from 'hooks/useUserDataUpdate';

export default function UserInfoUpdate({ user, reloadData }) {
  const [open, setOpen] = useState(false);

  const { photoURL, displayName, uid } = user;

  const [userDataUpdate] = useUserDataUpdate();

  const formik = useFormik({
    initialValues: {
      name: displayName
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(10, 'Al menos 10 caracteres.')
        .trim()
        .test(
          'same-value',
          'El nombre nombre de usuario tiene que ser diferente para poder ser actualizado.',
          (value) => value !== displayName
        )
    }),
    onSubmit: async (values) => {
      await userDataUpdate({ displayName: values.name });
      setOpen(!open);
    }
  });

  return (
    <>
      <h4 className="font-medium block">Información de usuario</h4>
      <hr className="block border-background-middlelight my-2" />
      <article className="grid grid-cols-auto-1fr-auto w-full gap-x-3 items-center relative my-5">
        <img src={photoURL} alt="Avatar perfil" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-lg font-medium">{displayName}</h2>
          <p className="text-xs">PLATIFY FREE</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="text-sm rounded-full py-1 px-3 bg-secondary text-background-dark hover:bg-secondary-dark">
          Cambiar
        </button>
      </article>
      <ModalContent
        show={open}
        closeModal={() => setOpen(!open)}
        title="Actualizar Información de Usuario">
        <section className="relative mx-auto mb-5">
          <AvatarUpload uid={uid} photoURL={photoURL} reloadData={reloadData} />
        </section>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            className="placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden"
            placeholder="Escribe tu nuevo nombre de usuario"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && (
            <p className="text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 mt-2">
              {formik.errors.name}
            </p>
          )}

          <div className="flex space-x-2">
            {formik.errors.name && (
              <button
                onClick={() => setOpen(!open)}
                className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-secondary text-background-dark font-normal border border-secobg-secondary mt-5">
                Cancelar
              </button>
            )}
            <button
              disabled={formik.errors.name}
              type="submit"
              className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-brand-500 border border-brand-500 font-light mt-5">
              Guardar
            </button>
          </div>
        </form>
      </ModalContent>
    </>
  );
}
