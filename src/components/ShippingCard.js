import React from 'react';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  }
});

const ShippingCard = props => {
  const { classes, children } = props;
  return (
    <Paper className={classes.paper}>
      <Typography variant="h5" gutterBottom align="center">
        Shipping address
      </Typography>
      {children}
    </Paper>
  )
};

ShippingCard.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};


export default withStyles(styles)(ShippingCard)