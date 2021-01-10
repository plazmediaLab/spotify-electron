import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { errManagerUploadFileMp3 } from 'utils/Api';

export default function SongFileUpload({ fileSong, setFileSong, formikError, ...props }) {
  const [uploadFileError, setUploadFileError] = useState(null);
  const [coverUrl] = useState(false);

  const onDrop = useCallback((acceptedFile) => {
    const file = acceptedFile[0];
    setFileSong(file);
    console.log(acceptedFile[0]);
    // eslint-disable-next-line
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    accept: 'audio/mp3, audio/mpeg',
    noKeyboard: true,
    multiple: false,
    maxSize: 6815744,
    onDrop
  });

  useEffect(() => {
    if (fileRejections.length > 0) {
      setUploadFileError(fileRejections[0]?.errors);
    } else {
      setUploadFileError(null);
    }
    // eslint-disable-next-line
  }, [fileRejections]);

  return (
    <div {...props}>
      <p className="text-sm text-center text-secondary-dark mb-2">Cargar un archivo .mp3</p>
      <input {...getInputProps()} {...props} />
      <div
        className={`${
          uploadFileError || fileRejections.length > 0 || fileSong || formikError ? 'mb-1' : 'mb-4'
        } ${
          isDragActive
            ? 'border-solid border-brand-500 text-secondaryn'
            : 'border-background-light border-dashed text-secondary-dark'
        } p-small overflow-hidden grid place-items-center h-16 rounded-md bg-background-dark border-2 cursor-pointer`}
        {...getRootProps()}>
        {fileSong ? (
          <div className="flex">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        ) : (
          <svg
            className={`w-8 h-8 ${
              (uploadFileError || fileRejections.length > 0 || formikError) && 'text-red-500'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      {fileSong && (
        <p className="text-sm text-center text-green-500 truncate my-2">{fileSong.path}</p>
      )}
      {fileRejections.length > 0 &&
        fileRejections[0].errors.map((err) => (
          <p className="mb-4 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
            {errManagerUploadFileMp3(err.code)}
          </p>
        ))}
      {formikError && !fileSong && (
        <p className="trun text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
          {formikError}
        </p>
      )}
    </div>
  );
}
