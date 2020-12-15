import ToastAnimated, { showToast } from 'components/resources/toast';
import { useContext, useEffect } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';

export default function LayoutToast({ children }) {
  const authContext = useContext(AuthContext);
  const { toastMessage } = authContext;

  useEffect(() => {
    if (toastMessage) {
      showToast(toastMessage);
    }
  }, [toastMessage]);
  return (
    <main className="h-screen w-full relative bg-background-dark text-secondary">
      <section className="absolute top-0 z-50">
        <ToastAnimated />
      </section>
      {children}
    </main>
  );
}
