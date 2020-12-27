import LoadingIcon from "./loading-icon";

export default function FormButton({ children, bg = 'bg-secondary', text = 'text-background', loading, ...props }){
  return (
    <button className={`${bg} ${text} tracking-wide hover:bg-opacity-90 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-full py-2 px-3 mt-4 border`} {...props}>
      {loading ? (
          <LoadingIcon w="20" h="20" fill="#2E2F32" classN="mx-auto my-small" />
        ) : children }
    </button>
  );
};