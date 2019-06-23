import React from 'react';
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {FORM_NAMES} from "../form/constants";
import {renderTextField} from "../form/utils";
import Grid from "@material-ui/core/Grid";


class PaymentForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const {submitOrder, history, checkout, product} = this.props;
    
    return submitOrder({
      addressId: checkout.addressId,
      productId: product.interval
    })
      .then(() => history.push('/success'));
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Field
              name="card"
              disabled
              label="Card Number"
              fullWidth
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field
              name="expiration"
              label="Exp. Date"
              fullWidth
              disabled
              placeholder="MM/YY"
              autoComplete="expiration"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Field id="zip"
                   disabled
                   name="zip"
                   label="Zipcode"
                   fullWidth
                   component={renderTextField} />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary">
              Continue
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

PaymentForm = reduxForm({
  form: FORM_NAMES.PAYMENT,
  destroyOnUnmount: false,
})(PaymentForm);

export default PaymentForm;