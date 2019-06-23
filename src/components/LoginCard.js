import React from 'react';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {Field} from "redux-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Person from '@material-ui/icons/Person';

const LoginCard = props => {
  const { history, classes } = props;
  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <Person />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input id="email" name="email" autoComplete="email" autoFocus />
        </FormControl>
        <Field name="password" component={props =>
          <TextField {...props}
                     type="password"
                     fullWidth
                     label="Password"
                     required />
        }
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => history.push('/shipping')}
        >
          Sign in
        </Button>
      </form>
    </Paper>
  )
};

