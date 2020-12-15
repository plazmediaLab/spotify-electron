import { Link } from '@reach/router';
import SignupForm from 'components/home/signup/signup_form';
import { Fragment } from 'react';

export default function SignUp() {
  return (
    <Fragment>
      <h1 className="text-4xl font-bold text-center">
        Almacena y escucha tu música con una cuenta gratuita
      </h1>
      <SignupForm />
      <div className="text-center">
        <Link to="/" className="inline-block mx-auto uppercase py-1 px-3 tracking-widest mt-4">
          Volver
        </Link>
      </div>
      <p className="uppercase text-background-light text-xs text-center font-medium">
        ¿Ya tienes platify? &nbsp;
        <Link
          to="/login"
          className="underline text-secondary tracking-widest cursor-pointer font-light">
          Iniciar sesión
        </Link>
      </p>
    </Fragment>
  );
}
