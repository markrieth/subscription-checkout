import * as types from './types';

export const changePrimaryColor = (color) => ({
  type: types.CHANGE_PRIMARY_COLOR,
  payload: {
    color
  }
});