import {
  SET_LASTVOLUME,
  SET_MUTE,
  SET_PLAYING,
  SET_TIME,
  SET_VOLUME,
  SET_TOTALTIME,
  SET_LOOP
} from '../types';

export default function PlayerReducer(state, action) {
  switch (action.type) {
    case SET_PLAYING:
      return {
        ...state,
        play: !state.play
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
    case SET_LOOP:
      return {
        ...state,
        loop: !state.loop
      };

    default:
      return state;
  }
}
