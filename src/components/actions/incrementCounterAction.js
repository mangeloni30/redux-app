import { 
  INCREMENT_COUNTER, 
  DECREMENT_COUNTER 
} from '../constants/counterConstants'

export function incrementCounterAction() {
  return {
    type: INCREMENT_COUNTER
  }
}

export function decrementCounterAction() {
  return {
    type: DECREMENT_COUNTER
  }
}