import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';
import firebase from 'utils/Firebase';

export default function HeaderMain() {
  const authContext = useContext(AuthContext);
  const { user, logOutMethod } = authContext;

  // console.log(user);

  const { displayName, photoURL } = user;

  const SignOut = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        logOutMethod();
      });
  };

  return (
    <header className="bg-gradient-to-b from-background-light to-background flex justify-end space-x-4 items-center px-5">
      <div className="flex space-x-2 items-center">
        {photoURL ? (
          <div className="w-7 h-7 rounded-full bg-background-dark text-secondary"></div>
        ) : (
          <svg
            className="w-7 h-7 rounded-full bg-background-dark text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
        <h1>{displayName}</h1>
      </div>
      <button
        type="button"
        className="py-1 px-3 rounded-full text-xs bg-red-500 text-white"
        onClick={SignOut}>
        Log Out
      </button>
    </header>
  );
}
