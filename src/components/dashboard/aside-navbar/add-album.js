import ModalContent from 'components/resources/modal-content';
import { useState } from 'react';
import NewAlbumForm from './albums/new-album-form';

export default function AddAlbum() {
  const [show, setShow] = useState(false);

  return (
    <>
      <ModalContent show={show} closeModal={() => setShow(!show)} title="Nuevo Album">
        <NewAlbumForm setShow={setShow} />
      </ModalContent>
      <button
        className="pl-5 pr-5 py-1 flex w-full justify-between items-center hover:text-secondary"
        onClick={() => setShow(!show)}>
        <span>Nuevo Album</span>
        <svg
          className="w-4 h-4"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 6v3m0 0v3m0-3h3M9 9H6M17 3v12a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h12a2 2 0 012 2z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
