export default function ActionWindowsButtons() {
  return (
    <section className="absolute top-0 right-0 flex items-center" style={{ zIndex: 10 }}>
      <p>
        Proximamente{' '}
        <svg
          className="w-4 h-4 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </p>
      <button
        id="minimize"
        disabled={true}
        type="button"
        style={{ width: '30px', height: '30px' }}
        className="disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center text-secondary bg-background-dark hover:bg-background-light">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          stroke="currentColor">
          <path d="M5 20h14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        id="maximize"
        disabled={true}
        type="button"
        style={{ width: '30px', height: '30px' }}
        className="disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center text-secondary bg-background-dark hover:bg-background-light">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          stroke="currentColor">
          <path
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        id="close"
        disabled={true}
        type="button"
        style={{ width: '30px', height: '30px' }}
        className="disabled:opacity-50 disabled:cursor-not-allowed grid place-items-center text-secondary bg-background-dark hover:bg-red-500">
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="currentColor"
          stroke="currentColor">
          <path
            d="M6 6l12 12M6 18L18 6 6 18z"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
