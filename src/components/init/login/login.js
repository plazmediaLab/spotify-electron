import LoginForm from './login_form';

export default function Login({ setShow }) {
  return (
    <div>
      <h1 className="text-3xl font-medium text-center">
        Almacena y escucha tu música con una cuenta gratuita
      </h1>
      <LoginForm setShow={setShow} />
      <button
        type="button"
        onClick={() => setShow(null)}
        className="block mx-auto uppercase py-1 px-3 tracking-widest my-4">
        Volver
      </button>
      <p className="uppercase text-background-light text-xs text-center font-medium">
        ¿Ya tienes platify? &nbsp;
        <span
          className="underline text-secondary tracking-widest cursor-pointer"
          onClick={() => setShow('signup')}>
          Iniciar sesión
        </span>
      </p>
    </div>
  );
}
