import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import transition from './middlewares/transition';
import logger from './logger';
import reducers from './reducers';


const middlewares = [thunk, transition];

if (__DEBUG__) {
  middlewares.push(logger);
}

export default (initialState = {}) =>
  createStore(reducers, initialState, applyMiddleware(...middlewares));
