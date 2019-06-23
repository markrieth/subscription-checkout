import * as types from './types';

export const changeVisibleAuthForm = (formName) => ({
  type: types.CHANGE_VISIBLE_AUTH_FORM,
  payload: {
    formName
  }
});
