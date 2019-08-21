import { initialState } from '../initialState/initialState';
import { 
  INCREMENT_COUNTER, 
  DECREMENT_COUNTER 
} from '../constants/counterConstants';

export const counterReducer = (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch ( action.type ) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default: 
      return state;
  }
}