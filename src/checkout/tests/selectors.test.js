import * as selectors from '../selectors';
import initialState from '../reducers';
import {FIELD_NAMES, FORM_NAMES} from "../../form/constants";

describe('checkout selectors', () => {
  
  describe('getProducts', () => {
    it('gets the products', () => {
      const products = [];
      const state = {
        checkout: {
          products
        }
      };
      expect(selectors.getProducts(state)).toBe(products);
    })
  });
  
  describe('getSelectedProduct', () => {
    it('gets the selected product when one is selected', () => {
      const subscriptionForm = {
        values: {
          [FIELD_NAMES[FORM_NAMES.SUBSCRIPTION].INTERVAL]: 'year'
        }
      };
      const products = [{interval: 'year'}, {interval: 'month'}];
      const state = {
        form: {
          [FORM_NAMES.SUBSCRIPTION]: subscriptionForm
        },
        checkout: {
          products
        }
      };
      
      expect(selectors.getSelectedProduct(state)).toEqual(products[0]);
    });
  })
});