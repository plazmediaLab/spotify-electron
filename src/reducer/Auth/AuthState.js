import { useReducer } from 'react';
import { LOADING_PROCESS, AUTH_LOGIN, EMAIL_VERIFIED, TOAST_MESSAGE } from '../types';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';

const UserState = ({ children }) => {
  // Initial State
  const initialState = {
    user: null,
    emailVerified: null,
    loadingProcess: true,
    toastMessage: null
  };

  // Reducer
  const [state, dispath] = useReducer(AuthReducer, initialState);

  // Auth Methods
  const loadingProcessMethod = (process) => {
    dispath({
      type: LOADING_PROCESS,
      payload: process
    });
  };
  const loginMethod = (data) => {
    dispath({
      type: AUTH_LOGIN,
      payload: data
    });
  };
  const emailVerifiedMethod = (verifi) => {
    dispath({
      type: EMAIL_VERIFIED,
      payload: verifi
    });
  };
  const toastMessageMethod = (body) => {
    dispath({
      type: TOAST_MESSAGE,
      payload: body
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        emailVerified: state.emailVerified,
        loadingProcess: state.loadingProcess,
        toastMessage: state.toastMessage,
        loadingProcessMethod: loadingProcessMethod,
        loginMethod: loginMethod,
        emailVerifiedMethod: emailVerifiedMethod,
        toastMessageMethod: toastMessageMethod
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default UserState;
