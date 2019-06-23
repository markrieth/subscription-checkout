import React from 'react';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Person from '@material-ui/icons/Person';
import {FORM_NAMES} from "../form/constants";
import {renderTextField} from "../form/utils";


class RegisterForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const {register, registerFormValues} = this.props;
    return register(registerFormValues);
  }
  
  render() {
    const { classes, login, loginFormValues } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Field name="username" fullWidth label="Email" required component={renderTextField}/>
        <Field name="password" fullWidth label="Password" required type="password" component={renderTextField}/>
        <Field name="password2" fullWidth label="Confirm Password" type="password" required component={renderTextField}/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
      </form>
    )
  }
};

RegisterForm = reduxForm({
  form: FORM_NAMES.REGISTER
})(RegisterForm);

export default RegisterForm;