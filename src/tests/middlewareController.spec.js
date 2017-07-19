import { expect } from 'chai';

import { routes } from './mocks';
import MiddlewareController from '../middlewareController';
import errorMessages from '../constants/errorMessages';
import actionTypes from '../constants/actionTypes';

const history = {
  push: () => { return; },
};

const promise1 = () => new Promise((resolve) => {
  setTimeout(() => resolve('i am promise 1'), 1000);
});

const promise2 = () => new Promise((resolve) => {
  setTimeout(() => resolve('i am promise 2'), 1500);
});

const promise1fail = () => new Promise((resolve, reject) => {
  setTimeout(() => reject('i am promise 1 fail'), 1000);
});

const promise2fail = () => new Promise((resolve, reject) => {
  setTimeout(() => reject('i am promise 2 fail'), 1500);
});

let dispatched = [];
const dispatch = (action) => dispatched.push(action.type || action);

const getState = () => ({
  user: {
    token: 'fsadfasdfhasdkjlfhasd',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
  },
});

const tests = () => {
  beforeEach(function() {
    dispatched = [];
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
        call: promise1,
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
        call: promise1,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidTo);
  });

  it('handles unexpected "to" type in array', () => {
    const mw = [
      {
        to: ['root.about', 12],
        call: promise1,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidTo);
  });

  it('handles unexisting "to" route', () => {
    const mw = [
      {
        to: 'root.fail',
        call: promise1,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.invalidMWRoute.replace(/{.*?}/g, 'root.fail'));
  });

  it('handles unexisting "to" route in array', () => {
    const mw = [
      {
        to: ['root.about', 'root.fail'],
        call: promise1,
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
        call: promise1,
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
        call: promise1,
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
        call: promise1,
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
        call: promise1,
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
        call: promise1,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  it('converts "to" string to array', () => {
    const mw = [
      {
        to: 'root.clients.id',
        call: promise1,
      },
    ];
    const expectedMw = [
      {
        to: ['root.clients.id'],
        call: promise1,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(expectedMw);
  });

  it('handles promise callbacks', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
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
        call: promise1,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  // execute

  it('executes a single middleware', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise1,
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        actionTypes.NAVIGATE.END,
      ]);
      done();
    }).catch(() => { done(); });
  });

  it('executes chained middlewares', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise1,
      },
      {
        to: ['root.about'],
        call: promise2,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        'PROMISE2',
        actionTypes.NAVIGATE.END,
      ]);
      done();
    }).catch(() => { done(); });
  });

  it('executes and rejects single middleware', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1fail,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1 FAIL');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise1,
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1 FAIL',
        actionTypes.NAVIGATE.END,
      ]);
      done();
    }).catch(() => { done(); });
  });

  it('executes and rejects chained middlewares', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1fail,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1 FAIL');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise1,
      },
      {
        to: ['root.about'],
        call: promise2fail,
        onReject: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2 FAIL');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1 FAIL',
        'PROMISE2 FAIL',
        actionTypes.NAVIGATE.END,
      ]);
      done();
    }).catch(() => { done(); });
  });

  it('cancels a single middleware', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
        shouldNavigate: () => false,
        onNavigationCancelled: (route, dispatch) => dispatch('CANCELLED'),
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise1,
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        actionTypes.NAVIGATE.CANCEL,
        'CANCELLED',
      ]);
      done();
    }).catch(() => { done(); });
  });

  it('cancels a single middleware', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE1');
          next();
        },
      },
      {
        to: ['root.products'],
        call: promise1,
      },
      {
        to: ['root.about'],
        call: promise2,
        shouldNavigate: () => false,
        onNavigationCancelled: (route, dispatch) => dispatch('CANCELLED'),
        onResolve: (result, route, dispatch, state, next) => {
          dispatch('PROMISE2');
          next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      expect(dispatched).to.eql([
        actionTypes.NAVIGATE.START,
        'PROMISE1',
        actionTypes.NAVIGATE.CANCEL,
        'CANCELLED',
      ]);
      done();
    }).catch(() => { done(); });
  });

  it('handles onResolve callback without next', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
        onResolve: (result, route, dispatch) => {
          dispatch('PROMISE1');
          // next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      done();
    }).catch((e) => {
      expect(e).to.eql(errorMessages.noNext);
      done();
    });
  });

  it('handles onReject callback without next', (done) => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1fail,
        onReject: (result, route, dispatch) => {
          dispatch('PROMISE1 FAIL');
          // next();
        },
      },
    ];
    MiddlewareController.init(mw, routes, history);
    MiddlewareController.execute(routes.find(r => r.name === 'root.about'), dispatch, getState).then(() => {
      done();
    }).catch((e) => {
      expect(e).to.eql(errorMessages.noNext);
      done();
    });
  });
};


describe('MiddlewareController', tests);
