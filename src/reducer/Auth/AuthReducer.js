import {
  LOADING_PROCESS,
  AUTH_LOGIN,
  EMAIL_VERIFIED,
  TOAST_MESSAGE,
  AUTH_LOGOUT,
  IS_ADMIN,
  AUTH_RELOAD
} from '../types';

export default function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case AUTH_LOGOUT:
      return {
        state: action.payload
      };
    case LOADING_PROCESS:
      return {
        ...state,
        loadingProcess: action.payload
      };
    case AUTH_RELOAD:
      return {
        ...state,
        reloadData: action.payload
      };
    case EMAIL_VERIFIED:
      return {
        ...state,
        emailVerified: action.payload
      };
    case IS_ADMIN:
      return {
        ...state,
        isAdmin: action.payload
      };
    case TOAST_MESSAGE:
      return {
        ...state,
        toastMessage: action.payload
      };

    default:
      return state;
  }
}
