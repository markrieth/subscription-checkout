import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';
import CheckoutLayout from "./CheckoutLayout";
import {connect} from "react-redux";
import PaymentCard from "../components/PaymentCard";
import PaymentForm from "../components/PaymentForm";
import {getFormValues} from "redux-form";
import {FORM_NAMES} from "../form/constants";
import {submitOrder} from "../checkout/operations";
import {
  getCheckout, getGrandTotal, getProductCost, getSelectedProduct, getShippingCost,
  getTaxCost
} from "../checkout/selectors";

const styles = theme => ({
  main: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function Payment(props) {
  const {classes} = props;
  
  return (
    <CheckoutLayout {...props}>
      <main className={classes.main}>
        <CssBaseline />
        <PaymentCard
          {...props}
          paymentForm={
            <PaymentForm {...props} />
          }
        />
      </main>
    </CheckoutLayout>
  );
}

Payment.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ui: state.ui,
  checkout: state.checkout,
  product: getSelectedProduct(state),
  productCost: getProductCost(state),
  shippingCost: getShippingCost(state),
  taxCost: getTaxCost(state),
  grandTotal: getGrandTotal(state),
  address: getFormValues(FORM_NAMES.SHIPPING)(state)
});

const mapDispatchToProps = {
  submitOrder
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(
    Payment
  )
);