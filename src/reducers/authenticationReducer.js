export const initialState = {
  token: null,
  isRegistered: false,
  isRegisterFailed: false,
  isRegisterClicked: false,
  shouldRedirect: false,
  error: "",
  message: "",
  isAuthenticated: false,
  isLoggedIn: false,
  isLoggedOut: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case "REGISTER_USER_FULFILLED":
    return {
      ...state,
      isRegistered: true,
      message: action.payload.data.message,
    };
  case "REGISTER_USER_REJECTED":
    return {
      ...state,
      message: action.payload.response.data.error,
    };
  case "IF_NOT_MATCH":
    return {
      ...state, error: action.payload,
    };
  case "LOGIN_USER_FULFILLED":
    return {
      ...state,
      isAuthenticated: true,
      isLoggedIn: true,
      isLoggedOut: false,
      shouldRedirect: true,
      message: action.payload.data.message,
      token: action.payload.data.access_token,
    };
  case "LOGIN_USER_REJECTED":
    return {
      ...state,
      error: action.payload.response.data.message,
    };

  case "LOGOUT_USER_FULFILLED":
    return {
      ...initialState
    };

  default:
    return state;
  }
};
