import { LOADING_PROCESS, AUTH_LOGIN, EMAIL_VERIFIED, TOAST_MESSAGE, AUTH_SIGNOUT } from '../types';

export default function AuthReducer(state, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case AUTH_LOGIN:
      return {
        state: action.payload
      };
    case LOADING_PROCESS:
      return {
        ...state,
        loadingProcess: action.payload
      };
    case EMAIL_VERIFIED:
      return {
        ...state,
        emailVerified: action.payload
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
