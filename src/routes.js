import React from 'react';
import ChoosePlan from './containers/ChoosePlan';
import SignUp from './containers/SignUp';
import Shipping from './containers/Shipping';
import Payment from './containers/Payment';

const routes = [
  {path: '/choose-plan', exact: true, name: 'Choose ELDs', component: ChoosePlan},
  {path: '/shipping', exact: true, name: 'Shipping', component: Shipping},
  {path: '/sign-up', exact: true, name: 'Sign Up', component: SignUp},
  {path: '/payment', exact: true, name: 'Payment', component: Payment}
];

export default routes;