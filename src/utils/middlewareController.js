import { errorMessages } from '../constants';

export const defaultHooks = {
  shouldNavigate: () => true,
  onNavigationCancelled: () => { return; },
  onResolve: (...args) => { args[args.length -1](); },
  onReject: (...args) => { args[args.length -1](); },
};

export const validateMiddlewares = (middlewares, routes) => middlewares.map((mw) => {
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

  // validate 'call'
  if (!(mw.call instanceof Promise)) {
    throw new Error(errorMessages.invalidCall);
  }

  // validate if 'to' targets an existing route
  const routeNames = routes.map( r => r.name);
  newMw.to.forEach(t => {
    if(!routeNames.includes(t)) {
      throw new Error(errorMessages.invalidMWRoute.replace(/{.*?}/g, t));
    }
  });

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

  // validate 'onNavigationCancelled'
  if (!['function', 'undefined'].includes(typeof mw.onNavigationCancelled)) {
    throw new Error(errorMessages.invalidFunction.replace(/{.*?}/g, 'onNavigationCancelled'));
  } else if ((typeof mw.onNavigationCancelled) === 'function') {
    newMw.onNavigationCancelled = mw.onNavigationCancelled;
  }

  return newMw;
});
