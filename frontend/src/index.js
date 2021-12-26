import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import mainReducer from "./redux/reducers/mainReducer.js";

const globalStore = createStore(mainReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

