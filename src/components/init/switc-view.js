import Login from './login/login';

export default function SwitchView({ show, setShow }) {
  switch (show) {
    case 'login':
      return <Login setShow={setShow} />;
    case 'signup':
      return <h1>Sign up</h1>;

    default:
      return (
        <div>
          <h1 className="text-2xl font-medium text-center">
            Millones de canciones gratis en Platify
          </h1>
          <nav className="mt-10">
            <button
              className="bg-brand-primary font-medium uppercase text-xs tracking-wider w-full block p-3 rounded-full mb-3"
              type="button"
              onClick={() => setShow('login')}>
              Registrate gratis
            </button>
            <button
              className="bg-secondary text-background-dark font-medium uppercase text-xs tracking-wider w-full block p-3 rounded-full"
              type="button"
              onClick={() => setShow('signup')}>
              Iniciar sesión
            </button>
          </nav>
        </div>
      );
  }
}
