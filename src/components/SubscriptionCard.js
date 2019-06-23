import React from 'react';
import classNames from 'classnames';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SubscriptionCard = (props) => {
  const {classes, productPlan, checked} = props;
  return (
    <Card className={classNames(classes.card, checked ? classes.selectedCard : null)}>
      <CardHeader
        title={productPlan.title}
        subheader={productPlan.subheader}
        titleTypographyProps={{align: 'center'}}
        subheaderTypographyProps={{align: 'center'}}
        className={classNames(classes.cardHeader, checked ? classes.selectedCardHeader : null)}
      />
      <Grid container justify="flex-start" direction="column" alignItems="center">
        <Grid item>
          <CardContent>
            <div className={classes.cardPricing}>
              <Typography component="h2" variant="h3" color="textPrimary">
                ${productPlan.price}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                /mo
              </Typography>
            </div>
            {productPlan.description.map(line => (
              <Typography variant="subtitle1" align="center" key={line}>
                {line}
              </Typography>
            ))}
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SubscriptionCard;