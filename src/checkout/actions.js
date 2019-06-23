import * as types from './types';

export const submitShippingRequest = () => ({
  type: types.SUBMIT_SHIPPING_REQUEST,
  payload: {}
});

export const submitShippingSuccess = (response) => ({
  type: types.SUBMIT_SHIPPING_SUCCESS,
  payload: {
    ...response
  }
});

export const submitShippingFailure = (response) => ({
  type: types.SUBMIT_SHIPPING_FAILURE,
  payload: {
    ...response
  }
});

export const submitOrderRequest = () => ({
  type: types.SUBMIT_ORDER_REQUEST,
  payload: {}
});

export const submitOrderSuccess = (response) => ({
  type: types.SUBMIT_ORDER_SUCCESS,
  payload: {
    ...response
  }
});

export const submitOrderFailure = (response) => ({
  type: types.SUBMIT_ORDER_FAILURE,
  payload: {
    ...response
  }
});
