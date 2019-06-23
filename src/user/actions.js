import * as types from './types';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST,
  payload: {}
});

export const loginSuccess = (response) => ({
  type: types.LOGIN_SUCCESS,
  payload: {
    token: response.data.token,
    email: response.data.email
  }
});

export const loginFailure = (response) => ({
  type: types.LOGIN_FAILURE,
  payload: {
    ...response
  }
});

export const registerRequest = () => ({
  type: types.REGISTER_REQUEST,
  payload: {}
});

export const registerSuccess = (response) => ({
  type: types.REGISTER_SUCCESS,
  payload: {
    token: response.data.token
  }
});

export const registerFailure = (response) => ({
  type: types.REGISTER_SUCCESS,
  payload: {
    ...response
  }
});

export const logout = () => ({
  type: types.LOGOUT,
  payload: {}
});