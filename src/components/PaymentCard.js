import React from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Avatar from "@material-ui/core/Avatar";
import {formatPrice} from "../checkout/utils";


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
  },
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    alignItems: 'center'
  },
  paymentNote: {
    fontStyle: 'italic'
  }
});

function PaymentCard(props) {
  let { classes, address, product, paymentForm, productCost, shippingCost, taxCost, grandTotal } = props;
  if (!product) {
    product = {}
  }
  if (!address) {
    address = {firstName: 'Mark', lastName: 'Rieth', address1: '11509 venice Blvd', city: 'Los Angeles', state: 'CA', zip: 90066};
  
  }
  
  return (
    <Paper className={classes.paper}>
      <Grid container direction="column" alignItems="center">
        <Avatar className={classes.avatar}>
          <ShoppingCart/>
        </Avatar>
      </Grid>
      <Typography variant="h5" gutterBottom align="center">
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem className={classes.listItem} key={product.title}>
          <ListItemText primary={product.title} secondary={product.checkoutSummary} />
          <Typography variant="body2">
            {formatPrice(productCost)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Shipping" />
          <Typography variant="body2">
            {formatPrice(shippingCost)}
          </Typography>
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Tax" />
          <Typography variant="body2">
            {formatPrice(taxCost)}
          </Typography>
        </ListItem>
        <Divider/>
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {formatPrice(grandTotal)}
          </Typography>
        </ListItem>
        <Divider/>
      </List>
      <Grid container direction="row" justify="center" spacing={16}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom align="center" className={classes.title}>
            Shipping
          </Typography>
          <Typography align="center">{address.firstName} {address.lastName}</Typography>
          <Typography align="center">
            {address.address1 + ' ' + (address.address2 || '')}
            </Typography>
          <Typography align="center" gutterBottom>
            {address.city + ', ' + address.state + ' ' + address.zip}
          </Typography>
        </Grid>
        <Grid item container direction="column" sm={12}>
          <Typography variant="h6" gutterBottom align="center" className={classes.title}>
            Payment details
          </Typography>
          <Typography className={classes.paymentNote} align="center" color="secondary" variant="body2">
            * No need to enter payment! This is for demonstration purposes only.
          </Typography>
            {paymentForm}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default withStyles(styles)(PaymentCard)