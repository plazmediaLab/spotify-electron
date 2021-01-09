import { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
// import { errManagerUploadFile } from 'utils/Api';

export default function AlbumAvatarUpload({
  coverUrl,
  setCoverUrl,
  formikError,
  setErrorFileSettings
}) {
  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setCoverUrl(URL.createObjectURL(file));
    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept: 'image/jpeg, image/png',
    noKeyboard: true,
    multiple: false,
    maxSize: 500000,
    onDrop
  });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setErrorFileSettings(fileRejections);
    } else {
      setErrorFileSettings({});
    }
    // eslint-disable-next-line
  }, [fileRejections]);

  return (
    <>
      <input {...getInputProps()} />
      <div
        className={`${formikError || fileRejections.length > 0 ? 'mb-1' : ''} ${
          isDragActive
            ? 'border-solid border-brand-500 text-secondaryn'
            : 'border-background-light border-dashed text-secondary-dark'
        } p-small overflow-hidden grid place-items-center h-10 w-full rounded-md bg-background-dark border-2 cursor-pointer row-span-2`}
        {...getRootProps()}>
        <p
          className={`text-xs mt-1 tracking-wider ${
            formikError || fileRejections.length > 0 ? 'text-red-500' : ''
          }`}>
          <svg
            className={`w-5 h-5 ${
              formikError || fileRejections.length > 0 ? 'text-red-500' : ''
            } inline-block mr-2 mb-small`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>
          Imagen de portada
        </p>
      </div>
    </>
  );
}
