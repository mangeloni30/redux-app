export function userAction() {
  return {
    type: 'UPDATE_USER',
    payload: {
      user: 'John Wick'
    }
  }
}