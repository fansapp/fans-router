import memoize from 'lru-memoize';

import errorMessages from '../constants/errorMessages';
import actionTypes from '../constants/actionTypes';

/**
 * Default hooks for middlewares which didn't implement them
 * @returns {object} The default hooks
 */
export const defaultHooks = {
  call: () => new Promise(resolve => resolve()),
  shouldNavigate: () => true,
  onNavigationCancelled: () => {
    return;
  },
  // call next by default
  onResolve: (result, route, dispatch, state, next) => next(),
  onReject: (result, route, dispatch, state, next) => next(),
};

export const filterMWs = memoize(100, null, true)((mws, routeName) =>
  mws.filter(mw => mw.to.includes(routeName))
);

/**
 * Validate each middleware and their attributes
 * @param {array} middlewares The middleware array
 * @param {array} routes An array of the flat version of the routes (normalized)
 * @returns {object} The validated middlewares
 */
export const validateMiddlewares = (middlewares, routes) => {
  if (!Array.isArray(middlewares)) {
    throw new Error(errorMessages.invalidMWArray);
  }

  return middlewares.map(mw => {
    if (typeof mw !== 'object') {
      throw new Error(errorMessages.invalidMWType);
    }

    const newMw = {};

    if (!mw.hasOwnProperty('to')) {
      throw new Error(errorMessages.requiredMWParams);
    }

    newMw.to = mw.to;

    // validate 'to' data type
    if (typeof mw.to === 'string') {
      newMw.to = [mw.to];
    } else if (Array.isArray(mw.to)) {
      if (mw.to.some(t => typeof t !== 'string')) {
        throw new Error(errorMessages.invalidTo);
      }
    } else {
      throw new Error(errorMessages.invalidTo);
    }

    // validate if 'to' targets an existing route
    const routeNames = routes.map(r => r.name);
    newMw.to.forEach(t => {
      if (!routeNames.includes(t)) {
        throw new Error(errorMessages.invalidMWRoute.replace(/{.*?}/g, t));
      }
    });

    // validate 'call'
    if (!['function', 'undefined'].includes(typeof mw.call)) {
      throw new Error(errorMessages.invalidCall);
    } else if (typeof mw.call === 'function') {
      newMw.call = mw.call;
    }

    // validate 'onResolve'
    if (!['function', 'undefined'].includes(typeof mw.onResolve)) {
      throw new Error(
        errorMessages.invalidFunction.replace(/{.*?}/g, 'onResolve')
      );
    } else if (typeof mw.onResolve === 'function') {
      newMw.onResolve = mw.onResolve;
    }

    // validate 'onReject'
    if (!['function', 'undefined'].includes(typeof mw.onReject)) {
      throw new Error(
        errorMessages.invalidFunction.replace(/{.*?}/g, 'onReject')
      );
    } else if (typeof mw.onReject === 'function') {
      newMw.onReject = mw.onReject;
    }

    // validate 'shouldNavigate'
    if (!['function', 'undefined'].includes(typeof mw.shouldNavigate)) {
      throw new Error(
        errorMessages.invalidFunction.replace(/{.*?}/g, 'shouldNavigate')
      );
    } else if (typeof mw.shouldNavigate === 'function') {
      newMw.shouldNavigate = mw.shouldNavigate;
    }

    // validate 'onNavigationCancelled'
    if (!['function', 'undefined'].includes(typeof mw.onNavigationCancelled)) {
      throw new Error(
        errorMessages.invalidFunction.replace(/{.*?}/g, 'onNavigationCancelled')
      );
    } else if (typeof mw.onNavigationCancelled === 'function') {
      newMw.onNavigationCancelled = mw.onNavigationCancelled;
    }

    return newMw;
  });
};

/**
 * Loops over every middleware and checks if or not it should be called,
 * then executes its appropriate callbacks (recursive)
 * @param {array} middlewares The filtered middleware array relevant to route to navigate
 * @param {object} route The route where the app is navigating
 * @param {function} dispatch The redux dispatch function
 * @param {function} getState The redux getState function
 * @param {function} historyFunc Update browser history by calling this function
 * @param {function} resolve The resolution callback of the main Promise
 * @param {function} reject The rejection callback of the main Promise
 */
export const applyMWs = (
  middlewares,
  route,
  shouldNavigateEnd,
  dispatch,
  getState,
  historyFunc,
  resolve,
  reject
) => {
  const mw = middlewares[0];
  const nextMws = middlewares.slice(1, middlewares.length);
  // finished looping
  if (middlewares.length === 0) {
    if (shouldNavigateEnd) {
      dispatch({
        type: actionTypes.NAVIGATE.END,
        route,
      });
    }
    // change url in browser to the desired path
    historyFunc(route.path);
    resolve(route);
    return;
  }

  // if or not we should navigate to this route based on a middleware condition
  const shouldNavigate = mw.shouldNavigate || defaultHooks.shouldNavigate;
  if (!shouldNavigate(route, getState())) {
    dispatch({
      type: actionTypes.NAVIGATE.CANCEL,
      route,
    });

    const onNavigationCancelled =
      mw.onNavigationCancelled || defaultHooks.onNavigationCancelled;
    onNavigationCancelled(route, dispatch, getState());
    resolve(route);
    return;
  }

  // if or not we should continue down the middleware list after a callback
  let didNext = false;
  let didAbort = false;
  const next = () => {
    didNext = true;
  };

  // if or not we should abort the navigation immediately
  const abort = () => {
    didAbort = true;
    dispatch({
      type: actionTypes.NAVIGATE.ABORT,
      route,
    });
  };

  // the desired call te be made before the navigation for this middleware
  const call = mw.call || defaultHooks.call;
  call(route, getState())
    .then(result => {
      const onResolve = mw.onResolve || defaultHooks.onResolve;
      onResolve(result, route, dispatch, getState(), next, abort);

      if (didNext && didAbort) {
        reject(errorMessages.abortNext);
        return;
      }

      if (!didNext && !didAbort) {
        reject(errorMessages.noNext);
        return;
      }

      if (didNext) {
        applyMWs(
          nextMws,
          route,
          shouldNavigateEnd,
          dispatch,
          getState,
          historyFunc,
          resolve,
          reject
        );
      }

      if (didAbort) {
        resolve(route);
        return;
      }
    })
    .catch(result => {
      const onReject = mw.onReject || defaultHooks.onReject;
      onReject(result, route, dispatch, getState(), next, abort);

      if (didNext && didAbort) {
        reject(errorMessages.abortNext);
        return;
      }

      if (!didNext && !didAbort) {
        reject(errorMessages.noNext);
        return;
      }

      if (didNext) {
        applyMWs(
          nextMws,
          route,
          shouldNavigateEnd,
          dispatch,
          getState,
          historyFunc,
          resolve,
          reject
        );
      }

      if (didAbort) {
        resolve(route);
        return;
      }
    });
};
