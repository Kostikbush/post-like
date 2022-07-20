import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { rootReducer } from './redux/rootReducer';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk
  ),
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
