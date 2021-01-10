export default function PrevButton({ handlePrevSong }) {
  return (
    <button
      onClick={handlePrevSong}
      type="button"
      className="w-8 h-8 grid place-items-center hover:text-secondary active:text-secondary-dark cursor-auto">
      <svg
        className="w-2.5 h-2.5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6.93 8">
        <title>{'Anterior'}</title>
        <g data-name="Capa 2">
          <path d="M6.93 0L1.5 3.13V0H0v8h1.5V4.87L6.93 8V0z" data-name="Capa 1" />
        </g>
      </svg>
    </button>
  );
}
