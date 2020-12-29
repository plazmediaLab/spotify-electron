export default function SlideNextButton(props){
  const { className, style, onClick } = props;

  return (
    <button 
      type="button" 
      onClick={onClick}
      className="bg-background-light bg-opacity-50 rounded-r-md text-secondary-dark hover:text-secondary hover:bg-opacity-75"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
    </button>
  );
};