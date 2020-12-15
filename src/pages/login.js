import { Link } from '@reach/router';
import LoginForm from 'components/home/login/login_form';
import { Fragment } from 'react';

export default function Login({ setShow }) {
  return (
    <Fragment>
      <h1 className="text-3xl font-medium text-center">Escucha toda tu música en un solo lugar.</h1>
      <LoginForm />
      <div className="text-center">
        <Link to="/" className="inline-block mx-auto uppercase py-1 px-3 tracking-widest mt-4">
          Volver
        </Link>
      </div>
    </Fragment>
  );
}
