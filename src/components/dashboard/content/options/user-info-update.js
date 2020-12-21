import CircularProgressMaterialIcon from 'components/resources/circular-progress-material-icon';
import LoadingIcon from 'components/resources/loading-icon';
import ModalContent from 'components/resources/modal-content';
import { Fragment, useState } from 'react';
import AvatarUpload from './avatar-upload';

export default function UserInfoUpdate({ user, reloadData }) {
  const [open, setOpen] = useState(false);
  const [loading] = useState(false);
  const [initialName, setInitialName] = useState(user.displayName);

  const { photoURL, displayName, uid } = user;

  return (
    <Fragment>
      <h4 className="font-medium block">Información de usuario</h4>
      <hr className="block border-background-middlelight my-2" />
      <article className="grid grid-cols-auto-1fr-auto w-full gap-x-3 items-center relative my-5">
        <img src={photoURL} alt="Avatar perfil" className="w-20 h-20 rounded-full" />
        <div>
          <h2 className="text-lg font-medium">{displayName}</h2>
          {/* <NameUpdate displayName={user.displayName} /> */}
          <p className="text-xs">PLATIFY FREE</p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="text-sm rounded-full py-1 px-3 bg-secondary text-background-dark hover:bg-secondary-dark">
          Actualizar
        </button>
      </article>
      <ModalContent
        show={open}
        closeModal={() => setOpen(!open)}
        title="Actualizar Información de Usuario">
        <section className="relative mx-auto mb-5">
          <AvatarUpload uid={uid} photoURL={photoURL} reloadData={reloadData} />
        </section>
        <input
          disabled={loading}
          type="text"
          className="font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark placeholder-background-light overflow-hidden"
          placeholder="Escribe tu nuevo nombre de usuario"
          value={initialName}
        />
        <button
          disabled={loading}
          type="submit"
          className="disabled:opacity-50 w-full rounded-full py-2 px-3 bg-brand-500 border border-brand-500 font-light mt-5">
          {loading ? <LoadingIcon w="24" h="24" fill="#ffffff" classN="mx-auto" /> : 'Guardar'}
        </button>
      </ModalContent>
    </Fragment>
  );
}
