import firebase from 'utils/Firebase';
import 'firebase/auth';
import 'firebase/storage';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import useUserDataUpdate from 'hooks/useUserDataUpdate';

export default function AvatarUpload({ uid, photoURL }) {
  const [avatarUrl, setAvatarUrl] = useState('');

  const [userDataUpdate] = useUserDataUpdate();

  useEffect(() => {
    if (photoURL) {
      setAvatarUrl(photoURL);
    }
  }, [photoURL]);

  const uploadImage = (file) => {
    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    return ref.put(file);
  };

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setAvatarUrl(URL.createObjectURL(file));
    uploadImage(file).then((res) => {
      updateUserAvatar();
    });
  });

  const updateUserAvatar = () => {
    firebase
      .storage()
      .ref(`avatar/${uid}`)
      .getDownloadURL()
      .then((res) => {
        userDataUpdate({ photoURL: res });
      });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    onDrop
  });

  return (
    <div
      className={`${
        isDragActive ? 'border-solid border-brand-500' : 'border-dashed border-secondary-dark'
      } rounded-full w-20 h-20 border-2 p-1 overflow-hidden cursor-pointer grid place-items-center`}
      {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
      ) : avatarUrl ? (
        <img src={avatarUrl} alt="Perfil Avatar" className="rounded-full" />
      ) : (
        <svg
          className="w-full h-full"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}
    </div>
  );
}
