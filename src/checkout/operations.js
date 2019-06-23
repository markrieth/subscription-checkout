import axios from 'axios';
import * as actions from './actions';

const apiBase = process.env.REACT_APP_API_BASE;

export const submitShipping = (form) => (dispatch) => {
  console.log(form);
  dispatch(actions.submitShippingRequest());
  return axios
    .post(`${apiBase}/address`, {...form})
    .then(response =>
      dispatch(actions.submitShippingSuccess(response))
    )
    .catch(error =>
      dispatch(actions.submitShippingFailure(error.response))
    );
};

/**
 * Submit an order
 * @param {Object} form
 * @param {Number|String} form.addressId
 * @param {Number|String} form.productId
 * @param {String} form.paymentToken - A token representing payment information
 */
export const submitOrder = (form) => (dispatch) => {
  dispatch(actions.submitOrderRequest());
  return axios
    .post(`${apiBase}/order`, {...form})
    .then(response =>
      dispatch(actions.submitOrderSuccess(response))
    )
    .catch(error =>
      dispatch(actions.submitOrderFailure(error.response))
    );
};

