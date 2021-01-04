import { useReducer } from 'react';
import { GET_ARTITS, GET_ALBUMS } from '../types';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    artists: [],
    albums: []
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
  const getAlbumsMethod = (data) => {
    dispath({
      type: GET_ALBUMS,
      payload: data
    });
  };

  return (
    <AppContext.Provider
      value={{
        artists: state.artists,
        albums: state.albums,
        getArtistMethod,
        getAlbumsMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default UserState;
