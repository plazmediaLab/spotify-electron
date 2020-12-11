import FormInput from 'components/resources/form-input';
import LoadingIcon from 'components/resources/loading-icon';
import useLogin from 'hooks/useLogin';
import { useState } from 'react';
import LoginFormShowpass from './login_form_showpass';
import './style.css';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  const [formik, loading] = useLogin();

  return (
    <form className="mt-7 grid grid-flow-row gap-y-3" onSubmit={formik.handleSubmit}>
      <FormInput
        error={formik.touched.name && formik.errors.name ? formik.errors.name : null}
        disabled={loading}
        type="text"
        name="name"
        id="name"
        placeholder="Escribe tu nombre completo"
        value={formik.values.name}
        onChange={formik.handleChange}></FormInput>
      <FormInput
        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        disabled={loading}
        type="email"
        name="email"
        id="email"
        placeholder="Ingresa tu correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}></FormInput>
      <FormInput
        error={formik.touched.pass && formik.errors.pass ? formik.errors.pass : null}
        disabled={loading}
        type={!showPass ? 'password' : 'text'}
        name="pass"
        id="pass"
        placeholder="Escribe tu contraseña"
        value={formik.values.pass}
        onChange={formik.handleChange}>
        <LoginFormShowpass showPass={showPass} setShowPass={setShowPass} />
      </FormInput>
      <button
        disabled={loading}
        type="submit"
        className="disabled:opacity-50 bg-brand-500 hover:bg-brand-600 active:bg-brand-600 font-medium uppercase text-xs tracking-wider w-full block p-3 rounded-full mb-3 mt-2">
        {loading ? <LoadingIcon w="16" h="16" fill="#F3F3F9" classN="mx-auto" /> : 'Continuar'}
      </button>
    </form>
  );
}
