import SignupForm from 'components/init/signup/signup_form';
import { Fragment } from 'react';

export default function SignUp() {
  return (
    <Fragment>
      <h1 className="text-4xl font-bold text-center">
        Almacena y escucha tu música con una cuenta gratuita
      </h1>
      <SignupForm />
      <button
        type="button"
        // onClick={() => setShow(null)}
        className="block mx-auto uppercase py-1 px-3 tracking-widest my-4">
        Volver
      </button>
      <p className="uppercase text-background-light text-xs text-center font-medium">
        ¿Ya tienes platify? &nbsp;
        <span
          className="underline text-secondary tracking-widest cursor-pointer font-light"
          // onClick={() => setShow('signup')}
        >
          Iniciar sesión
        </span>
      </p>
    </Fragment>
  );
}
