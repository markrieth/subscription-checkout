import React from 'react';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Person from '@material-ui/icons/Person';
import {FORM_NAMES} from "../form/constants";
import {renderTextField} from "../form/utils";


class LoginForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const {login, loginFormValues, history} = this.props;
    return login(loginFormValues)
      .then(() => history.push('/shipping'));
  }
  
  render() {
    const { classes, login, loginFormValues } = this.props;
    return (
      <form className={classes.form} onSubmit={this.handleSubmit}>
        <Field name="username" fullWidth label="Email" required component={renderTextField}/>
        <Field name="password" fullWidth label="Password" type="password" requried component={renderTextField}/>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
      </form>
    )
  }
};

LoginForm = reduxForm({
  form: FORM_NAMES.LOGIN
})(LoginForm);

export default LoginForm;