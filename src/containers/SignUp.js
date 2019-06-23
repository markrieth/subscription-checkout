import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {getFormValues} from "redux-form";
import withStyles from '@material-ui/core/styles/withStyles';
import CheckoutLayout from "./CheckoutLayout";
import TextField from "@material-ui/core/TextField";
import {login, register} from "../user/operations"
import {changeVisibleAuthForm} from "../ui/actions"
import {connect} from "react-redux";
import {FORM_NAMES} from "../form/constants";
import AuthCard from "../components/AuthCard";
import LoginForm from "../components/LoginForm";
import Grid from "@material-ui/core/Grid";
import RegisterForm from "../components/RegisterForm";
import {logout} from "../user/actions";
import LogoutCard from "../components/LogoutCard";

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  altActions: {
    marginTop: theme.spacing.unit * 2
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function SignUp(props) {
  const { classes, history, ui, changeVisibleAuthForm, user } = props;
  
  return (
    <CheckoutLayout {...props}>
      <main className={classes.main}>
        <CssBaseline />
        {user.token ? (
          <>
            <LogoutCard {...props} />
            <Grid container spacing={16} direction="row" justify="center" alignItems="spaceBetween" className={classes.altActions}>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" color="primary" onClick={() => history.push('/choose-plan')}>Back</Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" color="primary" onClick={() => history.push('/shipping')}>Continue</Button>
              </Grid>
            </Grid>
          </>
        ) : (ui.signUp.visibleForm === FORM_NAMES.LOGIN ? (
          <>
          <AuthCard title="Login" icon={<Lock/>} classes={classes}>
            <LoginForm {...props}/>
          </AuthCard>
          <Grid container direction="column" justify="center" alignItems="center" spacing={16} className={classes.altActions}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">No Account?</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button color="secondary" variant="contained" onClick={() => changeVisibleAuthForm(FORM_NAMES.REGISTER)}>Register</Button>
            </Grid>
          </Grid>
          </>
        ) : (
          <>
          <AuthCard title="Sign Up" icon={<Person/>} classes={classes}>
            <RegisterForm {...props}/>
          </AuthCard>
          <Grid container direction="column" justify="center" alignItems="center" spacing={16} className={classes.altActions}>
            <Grid item xs={12}>
              <Typography variant="h6" align="center">Already have an account?</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button color="secondary" variant="contained" onClick={() => changeVisibleAuthForm(FORM_NAMES.LOGIN)}>Login</Button>
            </Grid>
          </Grid>
          </>
        ))}
      </main>
    </CheckoutLayout>
  );
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ui: state.ui,
  user: state.user,
  loginFormValues: getFormValues(FORM_NAMES.LOGIN)(state),
  registerFormValues: getFormValues(FORM_NAMES.REGISTER)(state)
});

const mapDispatchToProps = {
  login,
  register,
  logout,
  changeVisibleAuthForm
};

SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default withStyles(styles)(SignUp);