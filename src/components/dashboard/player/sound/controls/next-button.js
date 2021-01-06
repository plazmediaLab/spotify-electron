export default function NextButton() {
  return (
    <button
      type="button"
      className="w-8 h-8 grid place-items-center hover:text-secondary active:text-secondary-dark cursor-auto">
      <svg
        className="w-2.5 h-2.5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6.93 8">
        <title>{'Siguiente'}</title>
        <g data-name="Capa 2">
          <path d="M5.43 0v3.13L0 0v8l5.43-3.13V8h1.5V0h-1.5z" data-name="Capa 1" />
        </g>
      </svg>
    </button>
  );
}
