import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {Field, getFormValues, reduxForm} from "redux-form";
import TestForm from "../components/TestForm";
import Stepper from "@material-ui/core/Stepper/Stepper";
import Step from "@material-ui/core/Step/Step";
import StepButton from "@material-ui/core/StepButton/StepButton";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import Divider from "@material-ui/core/Divider/Divider";
import Avatar from "@material-ui/core/Avatar/Avatar";
import SubscriptionRadioButton from "../components/SubscriptionRadioButton";
import SubscriptionCard from "../components/SubscriptionCard";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckoutLayout from "./CheckoutLayout";
import ShippingForm from "../components/ShippingForm";
import ShippingCard from "../components/ShippingCard";
import {FORM_NAMES} from "../form/constants";
import {connect} from "react-redux";
import {submitShipping} from "../checkout/operations";

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

function Shipping(props) {
  const {classes} = props;
  
  return (
      <CheckoutLayout {...props}>
        <main className={classes.main}>
          <CssBaseline />
          <ShippingCard classes={classes}>
            <ShippingForm {...props}/>
          </ShippingCard>
        </main>
      </CheckoutLayout>
  );
}

Shipping.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ui: state.ui,
});

const mapDispatchToProps = {
  submitShipping
};

// Decorate component as needed
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(
    Shipping
  )
);
