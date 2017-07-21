import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import logger from './logger';
import reducers from './reducers';


const middlewares = [thunk];

if (__DEBUG__) {
  middlewares.push(logger);
}

export default (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(...middlewares));
