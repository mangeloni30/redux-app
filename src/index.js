import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from './components/Container';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { counterReducer } from './components/reducers/counterReducer';
import { counterAction } from './components/actions/counterAction';

const allReducers = combineReducers ({
  counter: counterReducer
})

const initialState = {
  state: 'Original State'
}

const store = createStore(allReducers, initialState);

console.log(store.getState());



store.dispatch(counterAction);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);

