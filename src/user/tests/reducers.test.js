import reducer from '../reducers';
import * as types from '../types';
import * as actions from '../actions';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({})
  });
  
  it('should handle LOGIN_SUCCESS', () => {
    const responseToken = 'a_token';
    const action = {
      type: types.LOGIN_SUCCESS,
      payload: {
        token: responseToken
      }
    };
    
    expect(reducer(undefined, action)).toEqual({
      token: responseToken
    })
    
  });
  
  it('should handle LOGIN_FAILURE with no data', () => {
    const errorResponse = {};
    const action = actions.loginFailure(errorResponse);
    
    expect(reducer(undefined, action)).toEqual({
      loginError: 'Error.'
    })
    
  });
  
  it('should handle LOGIN_FAILURE with a message', () => {
    const errorResponse = {
      data: {
        message:'Not the default error msg.'
      }
    };
    const action = actions.loginFailure(errorResponse);
    
    expect(reducer(undefined, action)).toEqual({
      loginError: 'Not the default error msg.'
    })
    
  });
  
  it('handles REGISTER SUCCESS', () => {
    const token = 'a_token';
    const action = {
      type: types.REGISTER_SUCCESS,
      payload: {
        token
      }
    };
    expect(reducer(undefined, action)).toEqual({
      token
    });
  });
  
  it('handles LOGOUT', () => {
    const initialState = {
      token: 'a_token'
    };
    const action = actions.logout();
    expect(reducer(initialState, action)).toEqual({
      token: undefined
    });
  });
});