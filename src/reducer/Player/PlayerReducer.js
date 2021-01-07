import { SET_PLAYING } from '../types';

export default function PlayerReducer(state, action) {
  switch (action.type) {
    case SET_PLAYING:
      return {
        ...state,
        play: !state.play
      };

    default:
      return state;
  }
}
