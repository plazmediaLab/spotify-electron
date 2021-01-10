import { useReducer } from 'react';
import { GET_ARTITS, GET_ALBUMS, GET_SONGS } from '../types';
import AppContext from './AppContext';
import AppReducer from './AppReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    artists: [],
    albums: [],
    songs: []
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
  const getSongsMethod = (data) => {
    dispath({
      type: GET_SONGS,
      payload: data
    });
  };

  return (
    <AppContext.Provider
      value={{
        artists: state.artists,
        albums: state.albums,
        songs: state.songs,
        getArtistMethod,
        getAlbumsMethod,
        getSongsMethod
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default UserState;
