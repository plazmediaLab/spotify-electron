import { useReducer } from 'react';
import { SET_PLAYING, SET_VOLUME, SET_LASTVOLUME, SET_MUTE } from '../types';
import PlayerContext from './PlayerContext';
import PlayerReducer from './PlayerReducer';

const PlayerState = ({ children }) => {
  // Initial State
  const initialState = {
    play: false,
    volume: 0.5,
    lastVolume: undefined,
    mute: false,
    time: 0,
    lastTime: undefined,
    totalTime: undefined,
    actualSong: null
  };

  //Reducer
  const [state, dispath] = useReducer(PlayerReducer, initialState);

  // Methods
  const setPlayingMethod = () => {
    dispath({
      type: SET_PLAYING
    });
  };
  const setVolumeMethod = (volume) => {
    dispath({
      type: SET_VOLUME,
      payload: volume
    });
  };
  const setLastVolumeMethod = (volume) => {
    dispath({
      type: SET_LASTVOLUME,
      payload: volume
    });
  };
  const setMuteMethod = (state) => {
    dispath({
      type: SET_MUTE,
      payload: state
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        play: state.play,
        volume: state.volume,
        lastVolume: state.lastVolume,
        mute: state.mute,
        setPlayingMethod,
        setVolumeMethod,
        setLastVolumeMethod,
        setMuteMethod
      }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
