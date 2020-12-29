import CircularProgressMaterialIcon from 'components/resources/circular-progress-material-icon';
import ToastAnimated, { showToast } from 'components/resources/toast';
import { useContext, useEffect } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';

export default function LayoutToast({ children }) {
  const authContext = useContext(AuthContext);
  const { toastMessage, reloadData } = authContext;

  useEffect(() => {
    if (toastMessage) {
      showToast(toastMessage);
    }
  }, [toastMessage]);
  return (
    <main className="h-screen w-full relative bg-background-dark text-secondary" id="main-layout">
      {reloadData && (
        <section className="text-center absolute top-0 left-0 w-full h-screen bg-background-dark bg-opacity-80 z-50 grid place-items-center">
          <div>
            <div className="w-24 h-24 text-brand-500">
              <CircularProgressMaterialIcon />
            </div>
            <p>Cargando...</p>
          </div>
        </section>
      )}
      <section className="absolute top-0 z-40">
        <ToastAnimated />
      </section>
      {children}
    </main>
  );
}
