import { useReducer } from 'react';
import { SET_PLAYING } from '../types';
import PlayerContext from './PlayerContext';
import PlayerReducer from './PlayerReducer';

const PlayerState = ({ children }) => {
  // Initial State
  const initialState = {
    play: false
  };

  //Reducer
  const [state, dispath] = useReducer(PlayerReducer, initialState);

  // Methods
  const setPlayingMethod = () => {
    dispath({
      type: SET_PLAYING
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        play: state.play,
        setPlayingMethod
      }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
