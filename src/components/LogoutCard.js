import React from 'react';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Person from '@material-ui/icons/Person';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
});

const LoginCard = props => {
  const { classes, logout, user } = props;
  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <Person />
      </Avatar>
      <Typography variant="body1">
        Currently logged in as
      </Typography>
      <Typography gutterBottom variant="h6">
        {user.email}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => logout()}
      >
        Sign Out
      </Button>
    </Paper>
  )
};

export default withStyles(styles)(LoginCard);

