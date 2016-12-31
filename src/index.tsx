import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import * as io from 'socket.io-client';
import './index.scss';
import { createInitialState } from './views/InitialState';
import { init as unirouterInit } from 'unirouter'
import reducers from './views/reducers/index';

let socket = io();
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let store = createStore(reducers, createInitialState(), applyMiddleware(socketIoMiddleware));

// router
const routes = {
    menu: 'GET /',
    about: 'GET /about',
    options: 'GET /options',
    death: 'GET /death',
    game: 'GET /game',
    newGame: 'POST /city',
    heroDetails: 'GET /actor/:actorId',
}
const aliases = {
    'GET /':'menu'
}
unirouterInit(store, routes, aliases);

store.subscribe(() => {
  console.log('new client state', store.getState());
});
store.dispatch({ type: 'server/hello', data: 'Hello!' });

import Plague from "./views/Plague";
if (process.env.NODE_ENV !== 'production'){
  localStorage['debug'] = true;
}
ReactDOM.render(
  <Provider store={store}>
    <Plague store={store} dispatch={store.dispatch} />
  </Provider>,
  document.getElementById("plague")
);