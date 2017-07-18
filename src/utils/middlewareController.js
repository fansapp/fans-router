import { errorMessages } from '../constants';


export const validateMiddlewares = (middlewares, routes) => middlewares.reduce((mws, mw) => {
  const newMw = {};

  if (!mw.hasOwnProperty('to') || !mw.hasOwnProperty('call')) {
    throw new Error(errorMessages.requiredMWparams);
  }

  newMw.to = mw.to;
  newMw.call = mw.call;

  // validate 'to' data type
  if ((typeof mw.to) === 'string') {
    newMw.to = [mw.to];
  } else if (Array.isArray(mw.to)) {
    if (mw.to.some(t => (typeof t) !== 'string')) {
      throw new Error(errorMessages.invalidTo);
    }
  } else {
    throw new Error(errorMessages.invalidTo);
  }

  // validate 'call' data type
  if ((typeof mw.call) === 'function') {
    newMw.call = [mw.call];
  } else if (Array.isArray(mw.call)) {
    if (mw.call.some(c => (typeof c) !== 'function')) {
      throw new Error(errorMessages.invalidCall);
    }
  } else {
    throw new Error(errorMessages.invalidCall);
  }

  // validate if 'to' targets an existing route
  const routeNames = routes.map( r => r.name);
  if (!newMw.to.some(t => routeNames.includes(t))) {
    throw new Error(errorMessages.invalidMWRoute.replace(/{.*?}/g, mw.to));
  }

  // validate 'onResolve'
  if (!['function', 'undefined'].includes(typeof mw.onResolve)) {
    throw new Error(errorMessages.invalidFunction.replace(/{.*?}/g, 'onResolve'));
  } else if ((typeof mw.onResolve) === 'function') {
    newMw.onResolve = mw.onResolve;
  }

  // validate 'onReject'
  if (!['function', 'undefined'].includes(typeof mw.onReject)) {
    throw new Error(errorMessages.invalidFunction.replace(/{.*?}/g, 'onReject'));
  } else if ((typeof mw.onReject) === 'function') {
    newMw.onReject = mw.onReject;
  }

  // validate 'shouldNavigate'
  if (!['function', 'undefined'].includes(typeof mw.shouldNavigate)) {
    throw new Error(errorMessages.invalidFunction.replace(/{.*?}/g, 'shouldNavigate'));
  } else if ((typeof mw.shouldNavigate) === 'function') {
    newMw.shouldNavigate = mw.shouldNavigate;
  }

  // validate 'onNavigationCancel'
  if (!['function', 'undefined'].includes(typeof mw.onNavigationCancel)) {
    throw new Error(errorMessages.invalidFunction.replace(/{.*?}/g, 'onNavigationCancel'));
  } else if ((typeof mw.onNavigationCancel) === 'function') {
    newMw.onNavigationCancel = mw.onNavigationCancel;
  }

  return [
    ...mws,
    newMw,
  ];
}, []);