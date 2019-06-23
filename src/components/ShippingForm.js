import React from 'react';
import {Field, reduxForm, SubmissionError} from "redux-form";
import Button from "@material-ui/core/Button";
import {FORM_NAMES, UNITED_STATES} from "../form/constants";
import {renderSelect, required, zipCode} from "../form/utils";
import {renderTextField} from "../form/utils";
import Grid from "@material-ui/core/Grid";


class ShippingForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(shippingFormValues) {
    const {submitShipping, history} = this.props;
    return submitShipping(shippingFormValues)
      .then(() => history.push('/payment'));
  }
  
  render() {
    const {invalid, error, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="firstname"
              validate={[required]}
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="lastname"
              validate={[required]}
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="billing address-line1"
              validate={[required]}
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="billing address-line2"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              validate={[required]}
              autoComplete="billing address-level2"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              id="state"
              name="state"
              label="State"
              fullWidth
              required
              component={renderSelect}
              validate={[required]}
              options={UNITED_STATES}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              fullWidth
              type="number"
              validate={[required, zipCode]}
              autoComplete="billing postal-code"
              component={renderTextField}
            />
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

ShippingForm = reduxForm({
  form: FORM_NAMES.SHIPPING,
  destroyOnUnmount: false,
})(ShippingForm);

export default ShippingForm;