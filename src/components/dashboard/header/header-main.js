import AvatarName from 'components/resources/avatar-name';
import { useContext } from 'react';
import AuthContext from 'reducer/Auth/AuthContext';

export default function HeaderMain() {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const { displayName = '' } = user;

  return (
    <header className="bg-gradient-to-b from-background-light to-background flex items-center px-5">
      <div className="flex space-x-2 items-center">
        <AvatarName name={displayName} />
        <h1>{displayName}</h1>
      </div>
    </header>
  );
}
