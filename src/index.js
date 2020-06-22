import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import todoDispatcher from './components/dispatcher/todoDispatcher'
import {getTodos} from './components/actions/todoActions'

//enable redux extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


//combine reducer, middlewares and redux chrome extension
const store = createStore(todoDispatcher, composeEnhancers(applyMiddleware(thunk)))

//combine providers and give store access to app
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /> </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

//get available todos on page load
store.dispatch(getTodos())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
