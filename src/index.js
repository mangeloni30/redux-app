import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterContainer from './components/counter/CounterContainer';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { productReducer } from './components/reducers/productsReducer';
import { initialState } from './components/initialState/initialState';
import { counterReducer } from './components/reducers/counterReducer';

const userReducer = (state='', action) => {
  switch ( action.type ) {
    case 'UPDATE_USER':
      return action.payload.user;
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

ReactDOM.render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);

