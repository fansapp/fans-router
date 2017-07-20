import { expect } from 'chai';

import { routes } from './mocks';
import MiddlewareController from '../middlewareController';
import errorMessages from '../constants/errorMessages';
import actionTypes from '../constants/actionTypes';

const history = {
  push: () => { return; },
};

const promise = () => new Promise((resolve) => {
  resolve('i am promise 1');
});

const promiseFail = () => new Promise((resolve, reject) => {
  reject('i am promise 1 fail');
});

const promiseToken = (route, { user: { token }}) => new Promise((resolve, reject) => {
  if (token === 'token') {
    resolve(token);
  }
  reject(token);
});

let dispatched = [];
const dispatch = (action) => dispatched.push(action.type || action);

let store = {
  user: {
  },
};

const getState = () => store;

const tests = () => {
  beforeEach(() => {
    dispatched = [];
    store = {
      user: {
      },
    };
  });

  // handles middleware validation errors

  it('handles unexpected middlewares collection type', () => {
    expect(() => MiddlewareController.init('asd', routes))
      .to.throw(errorMessages.invalidMWArray);
  });

  it('handles unexpected middleware type', () => {
    expect(() => MiddlewareController.init([12, 53], routes))
      .to.throw(errorMessages.invalidMWType);
  });

  it('handles missing all required params', () => {
    const mw = [
      {
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.requiredMWParams);
  });

  it('handles missing "to" param', () => {
    const mw = [
      {
        call: promise,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.requiredMWParams);

  });

  it('handles missing "call" param', () => {
    const mw = [
      {
        to: 'root.about',
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.requiredMWParams);
  });

  it('handles unexpected "to" type', () => {
    const mw = [
      {
        to: 12,
        call: promise,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidTo);
  });

  it('handles unexpected "to" type in array', () => {
    const mw = [
      {
        to: ['root.about', 12],
        call: promise,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidTo);
  });

  it('handles unexisting "to" route', () => {
    const mw = [
      {
        to: 'root.fail',
        call: promise,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidMWRoute.replace(/{.*?}/g, 'root.fail'));
  });

  it('handles unexisting "to" route in array', () => {
    const mw = [
      {
        to: ['root.about', 'root.fail'],
        call: promise,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidMWRoute.replace(/{.*?}/g, 'root.fail'));
  });

  it('handles unexpected "call" type', () => {
    const mw = [
      {
        to: 'root.about',
        call: 255,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidCall);
  });

  it('handles unexpected "onResolve" type', () => {
    const mw = [
      {
        to: 'root.about',
        call: promise,
        onResolve: 'fail',
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidFunction.replace(/{.*?}/g, 'onResolve'));
  });

  it('handles unexpected "onReject" type', () => {
    const mw = [
      {
        to: 'root.about',
        call: promise,
        onReject: 12,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidFunction.replace(/{.*?}/g, 'onReject'));
  });

  it('handles unexpected "shouldNavigate" type', () => {
    const mw = [
      {
        to: 'root.about',
        call: promise,
        shouldNavigate: null,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidFunction.replace(/{.*?}/g, 'shouldNavigate'));
  });

  it('handles unexpected "onNavigationCancelled" type', () => {
    const mw = [
      {
        to: 'root.about',
        call: promise,
        onNavigationCancelled: null,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidFunction.replace(/{.*?}/g, 'onNavigationCancelled'));
  });

  // middleware validation

  it('handles empty array', () => {
    MiddlewareController.init([], routes);
    expect(MiddlewareController.getMiddlewares()).to.eql([]);
  });

  it('handles multiple "to" params', () => {
    const mw = [
      {
        to: ['root.about', 'root.clients.id'],
        call: promise,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  it('converts "to" string to array', () => {
    const mw = [
      {
        to: 'root.clients.id',
        call: promise,
      },
    ];
    const expectedMw = [
      {
        to: ['root.clients.id'],
        call: promise,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(expectedMw);
  });

  it('handles promise callbacks', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: () => true,
        onReject: () => true,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  it('handles navigation callbacks', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  // execute

  it('executes a single middleware', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });

  it('executes chained middlewares', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        'PROMISE2',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });

  it('executes and rejects single middleware', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promiseFail,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1 FAIL');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1 FAIL',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });

  it('executes and rejects chained middlewares', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promiseFail,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1 FAIL');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promiseFail,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2 FAIL');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1 FAIL',
        'PROMISE2 FAIL',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });

  it('cancels a single middleware', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        shouldNavigate: () => false,
        onNavigationCancelled: (route, dispatch) => dispatch('CANCELLED'),
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        actionTypes.NAVIGATE.CANCEL,
        'CANCELLED',
      ]);
    });
  });

  it('cancels a following middleware', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promise,
        shouldNavigate: () => false,
        onNavigationCancelled: (route, dispatch) => dispatch('CANCELLED'),
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        actionTypes.NAVIGATE.CANCEL,
        'CANCELLED',
      ]);
    });
  });

  it('handles onResolve callback without next', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch) => {
          dispatch('PROMISE1');
          // next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
    }).catch((e) => {
      expect(e).to.eql(errorMessages.noNext);
    });
  });

  it('handles onReject callback without next', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promiseFail,
        onReject: (result, route, dispatch) => {
          dispatch('PROMISE1 FAIL');
          // next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
    }).catch((e) => {
      expect(e).to.eql(errorMessages.noNext);
    });
  });

  it('handles truthy shouldNavigate using store mutation', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          state.user.token = 'token';
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promise,
        shouldNavigate: (route, state) => {
          dispatch('token');
          return state.user.token === 'token';
        },
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        'token',
        'PROMISE2',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });

  it('handles falsy shouldNavigate using store mutation', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          state.user.token = 'fail';
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promise,
        shouldNavigate: (route, state) => {
          dispatch('token');
          return state.user.token === 'token';
        },
        onNavigationCancelled: (route, dispatch, state) => {
          dispatch('CANCELLED');
          return state.user.token === 'token';
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        'token',
        actionTypes.NAVIGATE.CANCEL,
        'CANCELLED',
      ]);
    });
  });

  it('handles call resolution relay using store mutation', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          state.user.token = 'token';
          dispatch('set token');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promiseToken,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        'set token',
        'PROMISE2',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });

  it('handles call rejection relay using store mutation', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          state.user.token = 'fail';
          dispatch('set token');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise,
      },
      {
        to: ['root.about'],
        call: promiseToken,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2 FAIL');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    return MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        'set token',
        'PROMISE2 FAIL',
        actionTypes.NAVIGATE.END,
      ]);
    });
  });
};


describe('MiddlewareController', tests);
