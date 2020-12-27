export default function FormInputModal({ children, gap = 'my-0', success, error, errmessage, ...props}){
  return (
    <div className={`${gap} relative`}>
      <input className={`${success && 'ring-green-600 ring-2'} ${error &&'ring-red-600 ring-2'} focus:outline-none placeholder-background-light font-light tracking-wide disabled:opacity-50 focus:bg-background-light focus:border-background-light focus:placeholder-secondary w-full py-2 px-3 rounded border border-background-dark bg-background-dark overflow-hidden`} {...props}/>
      {children}
      {errmessage && 
        <p className="mt-2 text-xs tracking-wider text-red-500 p-1 border-l-4 border-red-500 rounded px-2 font-light">
          {errmessage}
        </p>
      }
    </div>
  );
};