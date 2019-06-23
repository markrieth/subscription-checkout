import axios from 'axios';
import * as actions from './actions';

const apiBase = process.env.REACT_APP_API_BASE;

export const login = (form) => (dispatch) => {
  const { username, password } = form;
  if (!username || !password) {
    return null; //todo don't return null. other parts of the app expect login to return a promise
  }
  dispatch(actions.loginRequest());
  return axios
    .post(`${apiBase}/login`, {
      username,
      password
    })
    .then(response => dispatch(actions.loginSuccess(response)))
    .catch(error => dispatch(actions.loginFailure(error.response)));
};

export const register = (form) => (dispatch) => {
  const { username, password } = form;
  
  dispatch(actions.registerRequest());
  return axios
    .post(`${apiBase}/register`, {
      username,
      password
    })
    .then(response => dispatch(actions.registerSuccess(response)))
    .catch(error => dispatch(actions.registerFailure(error.response)));
};


// TODO:
// export const requestPasswordReset = () => {
//
// };
//
// export const resetPassword = () => {
//
// };

