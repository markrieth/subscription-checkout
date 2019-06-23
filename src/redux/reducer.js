import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import user from '../user';
import ui from '../ui';
import checkout from '../checkout';
import theme from '../theme';


const rootReducer = combineReducers({
  form,
  user,
  ui,
  checkout,
  theme
});

export default rootReducer;