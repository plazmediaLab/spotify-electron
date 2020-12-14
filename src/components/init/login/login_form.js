import FormInput from 'components/resources/form-input';
import LoadingIcon from 'components/resources/loading-icon';
import SignupFormShowpass from 'components/resources/signup_form_showpass';
import useLogin from 'hooks/useLogin';
import { useState } from 'react';

export default function LoginForm() {
  const [showPass, setShowPass] = useState(false);

  const [formik, loading] = useLogin();

  return (
    <form className="mt-7 grid grid-flow-row gap-y-3" onSubmit={formik.handleSubmit}>
      <FormInput
        type="email"
        name="email"
        id="email"
        placeholder="Escribe tu correo electrónico"
        error={formik.touched.email && formik.errors.email ? formik.errors.email : null}
        disabled={loading}
        value={formik.values.email}
        onChange={formik.handleChange}></FormInput>
      <FormInput
        type={!showPass ? 'password' : 'text'}
        name="pass"
        id="pass"
        placeholder="Escribe tu contraseña"
        error={formik.touched.pass && formik.errors.pass ? formik.errors.pass : null}
        disabled={loading}
        value={formik.values.pass}
        onChange={formik.handleChange}>
        <SignupFormShowpass showPass={showPass} setShowPass={setShowPass} />
      </FormInput>
      <button
        disabled={loading}
        type="submit"
        className="disabled:opacity-50 bg-secondary hover:bg-white active:bg-white text-background-dark font-medium uppercase text-xs tracking-wider w-full block p-3 rounded-full mb-3 mt-2">
        {loading ? <LoadingIcon w="16" h="16" fill="#494A4E" classN="mx-auto" /> : 'Iniciar sesión'}
      </button>
    </form>
  );
}
