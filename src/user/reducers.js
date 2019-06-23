import * as types from './types';

const reducer = (state = {}, action) => {
  switch(action.type) {
    
    case types.LOGIN_SUCCESS:
      console.log(action);
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email
      };
  
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loginError: (action.payload.data && action.payload.data.message) || 'Error.'
      };
    
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        token: action.payload.token
      };
      
    case types.LOGOUT:
      return {
        ...state,
        token: undefined,
        email: undefined
      };
      
    default:
      return state;
  }
};

export default reducer;