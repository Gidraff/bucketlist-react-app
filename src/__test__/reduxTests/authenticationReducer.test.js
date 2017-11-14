import authenticationReducer from '../../reducers/authenticationReducer';

const initialState = {
  token: null,
  isRegistered: false,
  isRegisterFailed: false,
  redirectToReferrer: false,
  shouldRedirect: false,
  error: '',
  message: '',
  isAuthenticated: false,
  isLoggedIn: false,
  isLoggedOut: true,
};

describe('Authentication reducer', () => {
  it('CASE : REGISTER_USER_FULFILLED', () => {
    const action = {
      type: 'REGISTER_USER_FULFILLED',
      payload: {
        data: {
          access_token: 'testsToken',
          message: 'mansnothot'
        }
      }
    };
    const expected = {
      token: 'testsToken',
      isRegistered: true,
      isRegisterFailed: false,
      redirectToReferrer: false,
      shouldRedirect: false,
      error: '',
      message: 'mansnothot',
      isAuthenticated: false,
      isLoggedIn: false,
      isLoggedOut: true,
    };
    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: REGISTER_USER_REJECTED', () => {
    const action = {
      type: 'REGISTER_USER_REJECTED',
      payload: {
        response: {
          data:{
            error: 'registration failed'
          }
        }
      }
    };
    const expected = {
      token: null,
      isRegistered: false,
      isRegisterFailed: false,
      redirectToReferrer: false,
      shouldRedirect: false,
      message: 'registration failed',
      error: '',
      isAuthenticated: false,
      isLoggedIn: false,
      isLoggedOut: true,
    };
    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: LOGIN_USER_FULFILLED', () => {
    const action ={
      type: 'LOGIN_USER_FULFILLED',
      payload: {
        data: {
          access_token: 'logintestlogin',
          message: 'Successfully logged in'
        }
      }
    };
    const expected = {
      token: 'logintestlogin',
      message: 'Successfully logged in',
      isRegistered: false,
      isRegisterFailed: false,
      redirectToReferrer: false,
      shouldRedirect: true,
      error: '',
      isAuthenticated: true,
      isLoggedIn: true,
      isLoggedOut: false,
    };
    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('CASE: RESET_REDIRECT_TO_REFERRER', () => {
    const action = {
      type: 'RESET_REDIRECT_TO_REFERRER',
    };

    const expected = {
      token: null,
      isRegistered: false,
      isRegisterFailed: false,
      redirectToReferrer: true,
      shouldRedirect: false,
      error: '',
      message: '',
      isAuthenticated: false,
      isLoggedIn: false,
      isLoggedOut: true,
    };
    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: IF_NOT_MATCH', () => {
    const action = {
      type: 'IF_NOT_MATCH',
      payload: 'No match found'
    };

    const expected = {
      token: null,
      isRegistered: false,
      isRegisterFailed: false,
      redirectToReferrer: false,
      shouldRedirect: false,
      error: 'No match found',
      message: '',
      isAuthenticated: false,
      isLoggedIn: false,
      isLoggedOut: true,
    };

    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: LOGOUT_USER_FULFILLED', () => {
    const action = {
      type: 'LOGOUT_USER_FULFILLED'
    };
    const expected = initialState;
    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: LOGOUT_REJECTED', () => {
    const action = {
      type: 'LOGOUT_REJECTED'
    };
    const expected = initialState;
    const newState = authenticationReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
});
