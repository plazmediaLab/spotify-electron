import { useReducer } from 'react';
import {} from '../types';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    artists: []
  };

  // Reducer
  const [state, dispath] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        artists: state.artistsn
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default UserState;
