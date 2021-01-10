export default function RepeatButton({ loop, setLoopMethod }) {
  return (
    <button
      type="button"
      className={`${
        loop ? 'text-brand-400 hover:text-brand-300' : 'hover:text-secondary'
      } w-8 h-8 grid place-items-center relative`}
      onClick={setLoopMethod}>
      <svg
        className="w-3.5 h-3.5"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 11 10">
        <title>{'repeat'}</title>
        <g data-name="Capa 2">
          <g data-name="Capa 1">
            <path d="M1 5a2.51 2.51 0 012.5-2.5h3V4l2.14-1.22 1-.56L10 2 6.53 0v1.5h-3A3.51 3.51 0 000 5a3.22 3.22 0 00.21 1.16l.88-.51A2.37 2.37 0 011 5zM10.8 3.84l-.89.51A2.37 2.37 0 0110 5a2.5 2.5 0 01-2.5 2.5h-3V6L2.37 7.22l-1 .56L1 8l3.46 2V8.5h3A3.5 3.5 0 0011 5a3.45 3.45 0 00-.2-1.16z" />
          </g>
        </g>
      </svg>
      {loop && <div className="absolute w-1 h-1 rounded-full bg-brand-400 bottom-0"></div>}
    </button>
  );
}
