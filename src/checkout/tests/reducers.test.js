import reducer from '../reducers';
import * as types from '../types';
import * as actions from '../actions';
import {initialState} from '../reducers';

describe('checkout reducer', () => {
  it('initialize state properly', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  });
  
  it('initializes products with an interval field', () => {
    expect(reducer(undefined, {})).toMatchObject({
      products: [{
        interval: 'year'
      }, {
        interval: 'month'
      }]
    })
  });
  
  it('handles SUBMIT_SHIPPING_SUCCESS', () => {
    const action = actions.submitShippingSuccess({data: {id: 1}});
    expect(reducer(undefined, action)).toMatchObject({
      addressId: 1
    })
  })
});