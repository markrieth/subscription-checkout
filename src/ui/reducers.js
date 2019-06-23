import * as types from './types';
import {FORM_NAMES} from '../form/constants';

// The UI state is organized by page.
// For example, the 'signUp' key contains the UI state for the SignUp page.
export const initialState = {
  signUp: {
    visibleForm: FORM_NAMES.REGISTER
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    
    case types.CHANGE_VISIBLE_AUTH_FORM:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          visibleForm: action.payload.formName
        }
      };
      
    default:
      return state;
  }
};

export default reducer;