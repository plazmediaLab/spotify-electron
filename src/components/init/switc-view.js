import Login from './login/login';
import Signup from './signup/signup';

export default function SwitchView({ show, setShow }) {
  switch (show) {
    case 'login':
      return <Signup setShow={setShow} />;
    case 'signup':
      return <Login setShow={setShow} />;

    default:
      return (
        <div>
          <h1 className="text-4xl font-bold text-center">
            Millones de canciones gratis en Platify
          </h1>
          <nav className="mt-10">
            <button
              className="bg-brand-500 hover:bg-brand-600 active:bg-brand-600 uppercase text-xs tracking-wider w-full block p-3 rounded-full mb-3"
              type="button"
              onClick={() => setShow('login')}>
              Registrate gratis
            </button>
            <button
              className="bg-secondary hover:bg-primary active:bg-primary text-background-dark uppercase text-xs tracking-wider w-full block p-3 rounded-full"
              type="button"
              onClick={() => setShow('signup')}>
              Iniciar sesión
            </button>
          </nav>
        </div>
      );
  }
}
