import { useState } from 'react';

export default function PlayButton() {
  const [played, setPlayed] = useState(false);

  const handlePlayed = () => {
    setPlayed(!played);
  };

  return (
    <>
      {played ? (
        <button
          type="button"
          onClick={handlePlayed}
          className="cursor-auto w-10 h-10 grid place-items-center transform hover:scale-105 duration-200 motion-reduce:transform-none hover:text-secondary">
          <svg
            className="w-9 h-9"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.59 22.59">
            <title>{'Pausar canción'}</title>
            <g data-name="Capa 2">
              <g data-name="Capa 1">
                <path d="M11.3 0a11.3 11.3 0 1011.29 11.3A11.31 11.31 0 0011.3 0zm0 21.59A10.3 10.3 0 1121.59 11.3 10.31 10.31 0 0111.3 21.59z" />
                <path d="M7.3 7.3h2.68v8H7.3zM12.62 7.3h2.68v8h-2.68z" />
              </g>
            </g>
          </svg>
        </button>
      ) : (
        <button
          type="button"
          onClick={handlePlayed}
          className="cursor-auto w-10 h-10 grid place-items-center transform hover:scale-105 duration-200 motion-reduce:transform-none hover:text-secondary">
          <svg
            className="w-9 h-9"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.59 22.59">
            <title>{'Reproducir canción'}</title>
            <g data-name="Capa 2">
              <g data-name="Capa 1">
                <path d="M8.19 16.3l8.66-5.01-8.66-5V16.3z" />
                <path d="M11.3 0a11.3 11.3 0 1011.29 11.3A11.31 11.31 0 0011.3 0zm0 21.59A10.3 10.3 0 1121.59 11.3 10.31 10.31 0 0111.3 21.59z" />
              </g>
            </g>
          </svg>
        </button>
      )}
    </>
  );
}
