import React from 'react';
import { Link } from '@reach/router';

export default function HomeMainNav(){
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Millones de canciones gratis en Platify
      </h1>
      <nav className="mt-10">
        <Link to="/signup"
          className="text-center bg-brand-500 hover:bg-brand-600 active:bg-brand-600 uppercase text-xs tracking-wider w-full block p-3 rounded-full mb-3"
        >
          Registrate gratis
        </Link>
        <Link to="/login"
          className="text-center bg-secondary hover:bg-primary active:bg-primary text-background-dark uppercase text-xs tracking-wider w-full block p-3 rounded-full"
        >
          Iniciar sesión
        </Link>
      </nav>
    </div>
  );
};