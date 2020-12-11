export default function FormInput({ label, children, ...props }) {
  return (
    <div className="relative">
      <input
        {...props}
        className={`${
          children ? 'pr-12' : 'pr-3'
        } disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background bg-background placeholder-background-light overflow-hidden`}
      />
      {children}
    </div>
  );
}
