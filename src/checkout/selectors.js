import {createSelector} from 'reselect';
import {getFormValues} from "redux-form";
import {FORM_NAMES} from "../form/constants";

export const getCheckout = state => state.checkout;
export const getProducts = state => state.checkout.products;

export const getSelectedProduct = createSelector(
  [ getProducts, getFormValues(FORM_NAMES.SUBSCRIPTION) ],
  (products, subscriptionForm) => {
    if (subscriptionForm && Array.isArray(products)) {
      if (!subscriptionForm.interval) {
        return null;
      }
      return products.find(product => product.interval === subscriptionForm.interval)
    }
  }
);

// TODO: not free shipping / tax
export const getShippingCost = state => 0;
export const getTaxCost = state => 0;

/**
 * @return {number} The cost in cents (due today) for the product.
 * For the annual subscription this will be 12*price. For monthly, it'll just be the price.
 */
export const getProductCost = createSelector(
  [ getSelectedProduct ],
  product => (product || 0) && Math.floor(
    parseFloat(
      (product.interval === 'year' ? product.price * 12 : product.price)
    ) * 100
  )
);

export const getGrandTotal = createSelector(
  [ getProductCost, getShippingCost, getTaxCost ],
  (productCost, shippingCost, taxCost) => productCost + shippingCost + taxCost
);