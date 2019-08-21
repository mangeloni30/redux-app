import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { productReducer } from './components/reducers/productsReducer';
import { initialState } from './components/initialState/initialState';
import { counterAction } from './components/actions/counterActions';

const userReducer = (state='', action) => {
  switch ( action.type ) {
    case 'UPDATE_USER':
      return action.payload.user;
    default: 
      return state;
  }
}

const counterReducer = (state = initialState, action) => {
  console.log('COUNTERREDUCER')
  console.log('STATE: ', state);
  switch ( action.type ) {
    case 'INCREMENT_COUNTER':
      return state + 1;
    default: 
      return state;
  }
}

const allReducers = combineReducers ({
  products: productReducer,
  user: userReducer,
  counter : counterReducer
});

const store = createStore(allReducers, initialState);

console.log(store.getState());


// store.dispatch(userAction);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

