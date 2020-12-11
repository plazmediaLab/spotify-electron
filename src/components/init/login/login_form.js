import FormInput from 'components/resources/form-input';
import LoadingIcon from 'components/resources/loading-icon';
import useLogin from 'hooks/useLogin';
import { useState } from 'react';
import LoginFormShowpass from './login_form_showpass';
import './style.css';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  const [loginMethod, loading] = useLogin();

  return (
    <form className="mt-7 grid grid-flow-row gap-y-3" onSubmit={(e) => loginMethod(e)}>
      <FormInput
        disabled={loading}
        type="text"
        name="name"
        id="name"
        placeholder="Escribe tu nombre completo"></FormInput>
      <FormInput
        disabled={loading}
        type="email"
        name="email"
        id="email"
        placeholder="Ingresa tu correo electrónico"></FormInput>
      <FormInput
        disabled={loading}
        type={!showPass ? 'password' : 'text'}
        name="pass"
        id="pass"
        placeholder="Escribe tu contraseña">
        <LoginFormShowpass showPass={showPass} setShowPass={setShowPass} />
      </FormInput>
      <button
        disabled={loading}
        type="submit"
        className="disabled:opacity-50 bg-brand-primary font-medium uppercase text-xs tracking-wider w-full block p-3 rounded-full mb-3 mt-2">
        {loading ? <LoadingIcon w="16" h="16" fill="#F3F3F9" classN="mx-auto" /> : 'Continuar'}
      </button>
    </form>
  );
}
