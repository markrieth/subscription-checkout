import * as types from './types';
import _ from 'lodash';

export const initialState = {
  //TODO: get products from the server, remove hardcode
  products: [
    {
      title: 'Annual Subscription',
      interval: 'year',
      subheader: 'Most popular',
      price: '6.99',
      description: [
        'Billed annually',
        'Best value'
      ],
      checkoutSummary: '$6.99/mo, billed every 12 months.',
      buttonText: 'Select Annual',
      buttonVariant: 'contained',
    },
    {
      title: 'Monthly Subscription',
      price: '12.99',
      interval: 'month',
      description: ['Enjoy added flexibility'],
      checkoutSummary: 'Cancel any time.',
      buttonText: 'Select Monthly',
      buttonVariant: 'contained',
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    
    case types.SUBMIT_SHIPPING_SUCCESS:
      console.log(action);
      return {
        ...state,
        addressId: _.get(action, 'payload.data.id')
      };
      
    case types.SUBMIT_ORDER_SUCCESS:
      return {
        ...state,
        confirmationId: _.get(action, 'payload.data.confirmationId')
      };
    
    default:
      return state;
  }
};

export default reducer;