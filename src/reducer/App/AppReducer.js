import { GET_ARTITS } from '../types';

export default function AppReducer(state, action) {
  switch (action.type) {
    case GET_ARTITS:
      return {
        ...state,
        artists: action.payload
      };

    default:
      return state;
  }
}
