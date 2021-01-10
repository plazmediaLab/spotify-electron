export default function ButtonPlayMusicOnList({
  play,
  setPlaySong,
  setPauseSong,
  onPlay,
  setPlayingMethod
}) {
  if (onPlay && play) {
    return (
      <button
        type="button"
        onClick={setPauseSong}
        className="group w-10 h-10 cursor-auto grid place-items-center transform hover:scale-105 duration-200 transition-transform motion-reduce:transform-none hover:text-secondary">
        <svg
          className="w-8 h-8 p-1.5 bg-background-dark rounded-full group-hover:hidden"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
        <svg
          className="w-8 h-8 p-1.5 bg-background-dark rounded-full hidden group-hover:inline-block"
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
    );
  }
  if (onPlay && !play) {
    return (
      <button
        type="button"
        onClick={() => setPlayingMethod()}
        className="w-10 h-10 cursor-auto grid place-items-center transform hover:scale-105 duration-200 transition-transform motion-reduce:transform-none hover:text-secondary">
        <svg
          className="w-8 h-8 p-1.5 bg-background-dark rounded-full"
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
    );
  }
  return (
    <button
      type="button"
      onClick={setPlaySong}
      className="invisible group-hover:visible grid cursor-auto w-10 h-10 place-items-center transform hover:scale-110 duration-200 transition-transform motion-reduce:transform-none text-secondary-dark hover:text-secondary">
      <svg
        className="w-6 h-6"
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
  );
}
