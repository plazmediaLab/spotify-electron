import {
  SET_LASTVOLUME,
  SET_MUTE,
  SET_PLAYING,
  SET_TIME,
  SET_VOLUME,
  SET_TOTALTIME,
  SET_LOOP,
  SET_UPLOADPROGRESS,
  SET_SONGONPLAY,
  SET_SHUFFLE
} from '../types';

export default function PlayerReducer(state, action) {
  switch (action.type) {
    case SET_PLAYING:
      return {
        ...state,
        play: action.payload
      };
    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      };
    case SET_LASTVOLUME:
      return {
        ...state,
        lastVolume: action.payload
      };
    case SET_MUTE:
      return {
        ...state,
        mute: action.payload
      };
    case SET_TIME:
      return {
        ...state,
        time: action.payload
      };
    case SET_TOTALTIME:
      return {
        ...state,
        totalTime: action.payload
      };
    case SET_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      };
    case SET_LOOP:
      return {
        ...state,
        loop: !state.loop
      };
    case SET_UPLOADPROGRESS:
      return {
        ...state,
        uploadProgress: action.payload
      };
    case SET_SONGONPLAY:
      return {
        ...state,
        songOnPlay: action.payload
      };

    default:
      return state;
  }
}
