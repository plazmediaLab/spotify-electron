import { useState } from 'react';

function useLogin() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginMethod = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Login...');
      setLoading(false);
    }, 3000);
  };

  return [loginMethod, loading, error];
}

export default useLogin;
