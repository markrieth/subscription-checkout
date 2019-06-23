import reducer from '../reducers';
import * as types from '../types';
import * as actions from '../actions';
import {initialState} from "../reducers";

describe('ui reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });
  
  it('should handle CHANGE_VISIBLE_AUTH_FORM', () => {
    const formName = 'fooform';
    const action = actions.changeVisibleAuthForm(formName);
    
    expect(reducer(undefined, action)).toEqual({
      signUp: {
        visibleForm: formName
      }
    })
  });
});