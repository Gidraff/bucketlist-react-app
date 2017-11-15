export const initialState = {
  token: null,
  isRegistered: false,
  isRegisterFailed: false,
  loginStatus: null,
  redirectToReferrer: false,
  shouldRedirect: false,
  error: '',
  message: '',
  isAuthenticated: false,
  isLoggedIn: false,
  isLoggedOut: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'REGISTER_USER_FULFILLED':
    return {
      ...state,
      isRegistered: true,
      token: action.payload.data.access_token,
      message: action.payload.data.message,
    };
  case 'REGISTER_USER_REJECTED':
    return {
      ...state,
      message: action.payload.response.data.error,
    };
  case 'IF_NOT_MATCH':
    return {
      ...state, error: action.payload,
    };
  case 'LOGIN_USER_FULFILLED':
    return {
      ...state,
      isAuthenticated: true,
      isLoggedIn: true,
      isLoggedOut: false,
      shouldRedirect: true,
      loginStatus: action.payload.status,
      message: action.payload.data.message,
      token: action.payload.data.access_token,
    };

  case 'RESET_REDIRECT_TO_REFERRER':
    return {
      ...state,
      redirectToReferrer: true,
    };

  case 'LOGIN_USER_REJECTED':
    /* eslint-disable no-console */
    console.log('not authorized to login!!!', action);
    /* eslint-enable no-console */
    return {
      ...state,
      redirectToReferrer: false,
      error: action.payload.response.data.message,
    };

  case 'LOGOUT_USER_FULFILLED':
    return {
      ...initialState
    };

  case 'LOGOUT_REJECTED':
    return {
      ...initialState
    };

  default:
    return state;
  }
};
