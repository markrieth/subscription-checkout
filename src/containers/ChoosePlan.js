import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {getProducts} from "../checkout/selectors";
import {connect} from "react-redux";
const CheckoutLayout = React.lazy(() => import("./CheckoutLayout"));
const SubscriptionForm = React.lazy(() => import("../components/SubscriptionForm"));

const styles = theme => ({
  selectedCard: {
      border: `4px solid ${theme.palette.primary.main}`
  },
  selectedCardHeader: {
    color: theme.palette.primary.main
  },
  card: {
    height: '100%'
  },
  cardHeader: {
      backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
      [theme.breakpoints.up('sm')]: {
          paddingBottom: theme.spacing.unit * 2,
      },
      bottom: 0
  },
  main: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1000 + theme.spacing.unit * 3 * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  nextButton: {
    marginTop: theme.spacing.unit * 8
  }
});

function ChoosePlan(props) {
    const {classes, history} = props;
    return (
      <>
        <React.Suspense fallback={<h1>Loading...</h1>}>
          <section>
            <CheckoutLayout {...props}>
              <SubscriptionForm {...props} />
            </CheckoutLayout>
          </section>
        </React.Suspense>
      </>
      
    );
}

ChoosePlan.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  products: getProducts(state),
});

const mapDispatchToProps = {
};

ChoosePlan = connect(mapStateToProps, mapDispatchToProps)(ChoosePlan);

export default withStyles(styles)(ChoosePlan);
