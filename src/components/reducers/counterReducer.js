export function counterReducer(state, action) {
  console.log('Action: ', action);
  if(action.type === 'CHANGE_STATE'){
    return action.payload.newState;
  }
  return 'state';
}
