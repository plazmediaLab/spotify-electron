export default function FormInput({ label, children, error, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`${
          children ? 'pr-12' : 'pr-3'
        } font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background bg-background placeholder-background-light overflow-hidden`}
      />
      {children}
      {error && <p className="text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 mt-2">{error}</p>}
    </div>
  );
}
