import { GET_ALBUMS, GET_ARTITS, GET_SONGS } from '../types';

export default function AppReducer(state, action) {
  switch (action.type) {
    case GET_ARTITS:
      return {
        ...state,
        artists: action.payload
      };
    case GET_ALBUMS:
      return {
        ...state,
        albums: action.payload
      };
    case GET_SONGS:
      return {
        ...state,
        songs: action.payload
      };

    default:
      return state;
  }
}
