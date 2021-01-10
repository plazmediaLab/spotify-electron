import { useReducer } from 'react';
import {
  SET_PLAYING,
  SET_VOLUME,
  SET_LASTVOLUME,
  SET_MUTE,
  SET_TIME,
  SET_TOTALTIME,
  SET_SHUFFLE,
  SET_LOOP,
  SET_UPLOADPROGRESS,
  SET_SONGONPLAY
} from '../types';
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
    totalTime: undefined,
    shuffle: false,
    loop: false,
    actualSong: null,
    uploadProgress: 0,
    songOnPlay: null
  };

  //Reducer
  const [state, dispath] = useReducer(PlayerReducer, initialState);

  // Methods
  const setPlayingMethod = (state) => {
    dispath({
      type: SET_PLAYING,
      payload: state
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
  const setTimeMethod = (time) => {
    dispath({
      type: SET_TIME,
      payload: time
    });
  };
  const setTotalTimeMethod = (time) => {
    dispath({
      type: SET_TOTALTIME,
      payload: time
    });
  };
  const setShuffleMethod = () => {
    dispath({
      type: SET_SHUFFLE
    });
  };
  const setLoopMethod = () => {
    dispath({
      type: SET_LOOP
    });
  };
  const uploadProgressMethod = (progress) => {
    dispath({
      type: SET_UPLOADPROGRESS,
      payload: progress
    });
  };
  const setSongOnPlayMethod = (song) => {
    dispath({
      type: SET_SONGONPLAY,
      payload: song
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        play: state.play,
        volume: state.volume,
        lastVolume: state.lastVolume,
        mute: state.mute,
        time: state.time,
        totalTime: state.totalTime,
        shuffle: state.shuffle,
        loop: state.loop,
        uploadProgress: state.uploadProgress,
        songOnPlay: state.songOnPlay,
        setPlayingMethod,
        setVolumeMethod,
        setLastVolumeMethod,
        setMuteMethod,
        setTimeMethod,
        setTotalTimeMethod,
        setShuffleMethod,
        setLoopMethod,
        uploadProgressMethod,
        setSongOnPlayMethod
      }}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
