import { Fragment } from 'react';
import LoginForm from './login_form';

export default function Login({ setShow }) {
  return (
    <Fragment>
      <h1 className="text-3xl font-medium text-center">Escucha toda tu música en un solo lugar.</h1>
      <LoginForm setShow={setShow} />
      <button
        type="button"
        onClick={() => setShow(null)}
        className="block mx-auto uppercase py-1 px-3 tracking-widest mt-4">
        Volver
      </button>
    </Fragment>
  );
}
