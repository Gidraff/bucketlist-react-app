import React from 'react';
import promiseMiddleWare from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import instance from '../../configs/axiosConfigs';
import * as allAction from '../../actions/UserActions';


const middleWare = [thunk, promiseMiddleWare()];
const mockStore = configureMockStore(middleWare);

describe('user actions', () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });

  it('Register action is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const registerData = {
      username: 'testuser',
      email: 'test@test.com',
      password: 'testpassword'
    };
    const payload = {
      message: 'You have been successfully registered',
      token: 'testTokenfortest',
    };
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 201,
        response: payload
      });
    });
    const expectedActions = ['REGISTER_USER_PENDING', 'REGISTER_USER_FULFILLED'];
    const store = mockStore({});
    return store.dispatch(allAction.registerUser(registerData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Login actions is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const loginData = {
      email: 'test@test.com',
      password: 'testpassword'
    };

    const payload = {
      message: 'You have been successfully logged in',
      token: 'loggingTestToken'
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['LOGIN_USER_FULFILLED', 'LOGIN_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.loginUser(loginData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Logout user action is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const payload = {
      message: 'You have successfully logged out'
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['LOGOUT_USER', 'LOGOUT_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.logoutUser()).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });


});
