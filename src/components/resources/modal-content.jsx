import ReactDOM from 'react-dom';

export default function ModalContent({ children, show, closeModal }){
  return show && ReactDOM.createPortal(
      <section className="absolute z-30 top-0 left-0 w-full h-screen bg-background-dark bg-opacity-60 grid place-items-center">
        <button className="absolute top-0 left-0 w-full h-screen bg-transparent cursor-default" onClick={closeModal}></button>
        <div className="w-1/2 p-4 bg-background shadow-container relative z-10">
          <h1>Modal container</h1>
          <button onClick={closeModal} className="absolute top-4 right-4 text-background-middlelight hover:text-background-light active:bg-background-light">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
          </button>
        </div>
      </section>
    , document.getElementById('main-latout'))
};