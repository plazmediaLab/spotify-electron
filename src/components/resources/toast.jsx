import { toast, ToastContainer } from 'react-toastify';

export const showToast = ({ type, message, closeTime = 3000 }) => {
  switch (type) {
    case 'success':
      toast.success(<BodyToastSuccess>{message}</BodyToastSuccess>, {
        className: 'toast-class__success',
        bodyClassName: "toast__body",
        autoClose: closeTime
      });
      break;
    case 'warn':
      toast.warn(<BodyToastWarn>{message}</BodyToastWarn>, {
        className: 'toast-class__warn',
        bodyClassName: "toast__body",
        autoClose: closeTime
      });
      break;
    case 'error':
      toast.error(<BodyToastError>{message}</BodyToastError>, {
        className: 'toast-class__error', 
        bodyClassName: "toast__body",
        autoClose: closeTime
      });
      break;
    default:
      toast.info(<BodyToastInfo>{message}</BodyToastInfo>, {
        className: 'toast-class__info', 
        bodyClassName: "toast__body",
        autoClose: closeTime
      });
  }
};

function BodyToastSuccess({ children }){
  return (
    <article className="flex items-center">
      <svg className="toast-icon__class block mr-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      {children}
    </article>
  );
};
function BodyToastWarn({ children }){
  return (
    <article className="flex items-center">
      <svg className="toast-icon__class block mr-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
      {children}
    </article>
  );
};
function BodyToastError({ children }){
  return (
    <article className="flex items-center">
      <svg className="toast-icon__class block mr-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      {children}
    </article>
  );
};
function BodyToastInfo({ children }){
  return (
    <article className="flex items-center">
      <svg className="toast-icon__class block mr-3 text-brand-400" fill="none"  stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
      {children}
    </article>
  );
};

function CloseButton({ closeToast }){
  return (
    <button type="button" onClick={closeToast} className="text-background-light hover:text-secondary mt-1"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
  );
};

export default function ToastAnimated() {
  return <ToastContainer 
    position="bottom-right"
    progressClassName="toast__progress"
    closeButton={CloseButton}
    style={{width: '350px'}}
  >Test</ToastContainer>;
}