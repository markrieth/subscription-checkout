import {INDIGO, muiColorByName} from './constants';
import * as types from './types';

export const initialState = {
  palette: {
    primary: muiColorByName[INDIGO],
  }
};


const reducer = (state = initialState, action) => {
  switch(action.type) {
    
    case types.CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        palette: {
          ...state.palette,
          primary: muiColorByName[action.payload.color]
        }
      };
      
    default:
      return state;
  }
};

export default reducer;