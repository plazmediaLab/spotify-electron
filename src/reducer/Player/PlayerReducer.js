import { SET_LASTVOLUME, SET_MUTE, SET_PLAYING, SET_VOLUME } from '../types';

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

    default:
      return state;
  }
}
