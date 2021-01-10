export default function ShuffleButton({ shuffle, setShuffleMethod }) {
  return (
    <button
      type="button"
      className={`${
        shuffle ? 'text-brand-400 hover:text-brand-300' : 'hover:text-secondary'
      } w-8 h-8 grid place-items-center relative`}
      onClick={setShuffleMethod}>
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11.6 10">
        <title>{'Aleatorio'}</title>
        <g data-name="Capa 2">
          <g data-name="Capa 1">
            <path d="M8.14 7.2a5 5 0 01-2.05-1.54 3.15 3.15 0 00-.22.34l-.52.68a5.62 5.62 0 002.79 1.77V10l3.46-2-3.46-2zM.51 2.32A4.91 4.91 0 012.77 3.5a4.59 4.59 0 01.52.55c.23-.3.47-.63.73-1-.15-.17-.31-.32-.47-.47A6.11 6.11 0 00.7 1.13a.6.6 0 00-.19 1.19zM8.14 2.53V4l3.46-2-3.46-2v1.28a6.64 6.64 0 00-3.45 2.59c-.21.26-.4.51-.58.76l-.17.23a10.51 10.51 0 01-1.17 1.37A5 5 0 01.51 7.41.6.6 0 00.6 8.6h.1a6.15 6.15 0 002.87-1.48 9.31 9.31 0 001.12-1.27c.13-.16.25-.33.38-.5l.36-.48a6.26 6.26 0 012.71-2.34z" />
          </g>
        </g>
      </svg>
      {shuffle && <div className="absolute w-1 h-1 rounded-full bg-brand-400 bottom-0"></div>}
    </button>
  );
}
