import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
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


const AuthCard = props => {
  const { classes, children, title, icon } = props;
  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        {icon}
      </Avatar>
      <Typography component="h1" variant="h5">
        {title}
      </Typography>
      {children}
    </Paper>
  )
};

AuthCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element
};


export default withStyles(styles)(AuthCard)