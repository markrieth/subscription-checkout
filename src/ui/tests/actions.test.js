import * as actions from '../actions'
import * as types from '../types'

describe('actions', () => {
  it('should create an action to change visible auth form', () => {
    const formName = 'fooform';
    const expectedAction = {
      type: types.CHANGE_VISIBLE_AUTH_FORM,
      payload: {
        formName
      }
    };
    
    expect(actions.changeVisibleAuthForm(formName)).toEqual(expectedAction)
  })
});
