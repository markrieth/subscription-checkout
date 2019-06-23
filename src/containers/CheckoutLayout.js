import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Stepper from "@material-ui/core/Stepper/Stepper";
import Step from "@material-ui/core/Step/Step";
import StepButton from "@material-ui/core/StepButton/StepButton";
import ThemeForm from "../components/ThemeForm";
import {changePrimaryColor} from "../theme/actions";
import {connect} from "react-redux";

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  }
];

const steps = [{
  title: 'Choose Plan',
  route: '/choose-plan'
}, {
  title: 'Sign Up',
  route: '/sign-up'
}, {
  title: 'Shipping',
  route: '/shipping'
}, {
  title: 'Payment',
  route: '/payment'
}];

class CheckoutLayout extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {classes, children, location, history} = this.props;
    const activeStep = steps.findIndex(step => step.route === location.pathname);
    
    return (
      <React.Fragment>
        <CssBaseline/>
        <AppBar position="static" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
              Mark Rieth
            </Typography>
          </Toolbar>
        </AppBar>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={step.title} onClick={() => (index < activeStep) && history.push(step.route)}>
              <StepButton completed={index < activeStep}>
                {step.title}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        {children}
        <footer className={classNames(classes.footer, classes.layout)}>
          <Grid container spacing={32} justify="space-evenly">
            {footers.map(footer => (
              <Grid item xs key={footer.title}>
                <Typography variant="h6" color="textPrimary" gutterBottom>
                  {footer.title}
                </Typography>
                {footer.description.map(item => (
                  <Typography key={item} variant="subtitle1" color="textSecondary">
                    {item}
                  </Typography>
                ))}
              </Grid>
            ))}
            <Grid item xs>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Change Theme
              </Typography>
              <ThemeForm {...this.props}/>
            </Grid>
          </Grid>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
  
}

CheckoutLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = null;
const mapDispatchToProps = {
  changePrimaryColor
};

CheckoutLayout = connect(mapStateToProps, mapDispatchToProps)(CheckoutLayout);

export default withStyles(styles)(CheckoutLayout);
