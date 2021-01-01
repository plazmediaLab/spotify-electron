import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { errManagerUploadFile } from 'utils/Api';

export default function AlbumAvatarUpload({ coverUrl, setCoverUrl, setFileUpload }) {
  const [error] = useState(!false);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setFileUpload(file);
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

  return (
    <>
      <input {...getInputProps()} />
      <div
        className={`${error || fileRejections.length > 0 ? 'mb-1' : 'mb-4'} ${
          isDragActive
            ? 'border-solid border-brand-500 text-secondaryn'
            : 'border-background-light border-dashed text-secondary-dark'
        } p-small overflow-hidden grid place-items-center h-24 w-24 rounded-md bg-background-dark border-2 cursor-pointer row-span-2`}
        {...getRootProps()}>
        {coverUrl ? (
          <div
            className="bg-cover bg-center h-full w-full rounded"
            style={{ backgroundImage: `url(${coverUrl})` }}
          />
        ) : (
          <div>
            <svg
              className={`w-8 h-8 ${
                (error || fileRejections.length > 0) && 'text-red-500'
              } mx-auto`}
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
            <p className="text-xs mt-1 tracking-wider">Portada</p>
          </div>
        )}
      </div>
      {/* {fileRejections.length > 0 &&
        fileRejections[0].errors.map((err) => (
          <p className="mb-4 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
            {errManagerUploadFile(err.code)}
          </p>
        ))}
      {error && (
        <p className="mb-4 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
          {error}
        </p>
      )} */}
    </>
  );
}
