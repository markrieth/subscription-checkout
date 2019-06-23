import React from 'react';
import {Field, reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import {FIELD_NAMES, FORM_NAMES} from "../form/constants";
import Grid from "@material-ui/core/Grid";
import SubscriptionRadioButton from "./SubscriptionRadioButton";


class SubscriptionForm extends React.Component {
  
  render() {
    const { classes, products, history } = this.props;
    return (
      <form>
        <main className={classes.main}>
          <Grid container spacing={40}  alignItems="center" justify="center">
            {products.map(productPlan => (
              <Grid item key={productPlan.title} xs={12} sm={6} md={4}>
                <Field type="radio"
                       name={FIELD_NAMES[FORM_NAMES.SUBSCRIPTION].INTERVAL}
                       value={productPlan.interval}
                       component={props =>
                         <SubscriptionRadioButton {...props}
                                                  productPlan={productPlan}
                                                  classes={classes} />
                       }
                />
              </Grid>
            ))}
          </Grid>
      
          <div className={classes.nextButton}>
            <Grid container spacing={40} alignItems="center" justify="center">
              <Grid item xs={12} md={6}>
                <Button onClick={() => history.push('/sign-up')} variant="contained" color="primary" fullWidth>Continue</Button>
              </Grid>
            </Grid>
          </div>
        </main>
      </form>
    )
  }
};

SubscriptionForm = reduxForm({
  form: FORM_NAMES.SUBSCRIPTION,
  destroyOnUnmount: false,
  initialValues: {
    [FIELD_NAMES[FORM_NAMES.SUBSCRIPTION].INTERVAL]: 'year'
  }
})(SubscriptionForm);

export default SubscriptionForm;