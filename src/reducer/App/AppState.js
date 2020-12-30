import { useReducer } from 'react';
import { GET_ARTITS } from '../types';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    artists: []
  };

  // Reducer
  const [state, dispath] = useReducer(AppReducer, initialState);

  // Methods
  const getArtistMethod = (data) => {
    dispath({
      type: GET_ARTITS,
      payload: data
    });
  };

  return (
    <AppContext.Provider
      value={{
        artists: state.artists,
        getArtistMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default UserState;
