import { expect } from 'chai';

import { routes } from './mocks';
import MiddlewareController from '../middlewareController';
import { errorMessages }from '../constants';

const promise1 = () => new Promise((resolve) => {
  setTimeout(resolve, 1000);
});

const promise2 = () => new Promise((resolve) => {
  setTimeout(resolve, 3000);
});

const tests = () => {

  // handles middleware validation errors

  it('handles missing all required params', () => {
    const mw = [
      {
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.requiredMWparams);
  });

  it('handles missing "to" param', () => {
    const mw = [
      {
        call: promise1,
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.requiredMWparams);
  });

  it('handles missing "call" param', () => {
    const mw = [
      {
        to: 'root.about',
      },
    ];
    expect(() => MiddlewareController.init(mw, routes))
      .to.throw(errorMessages.requiredMWparams);
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

  it('handles unexpected "call" type in array', () => {
    const mw = [
      {
        to: 'root.about',
        call: [promise1, 'fail'],
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
        shouldNavigate: true,
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
        call: [promise1],
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  it('converts "to" string to array', () => {
    const mw = [
      {
        to: 'root.clients.id',
        call: [promise1],
      },
    ];
    const expectedMw = [
      {
        to: ['root.clients.id'],
        call: [promise1],
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(expectedMw);
  });

  it('handles multiple "call" params', () => {
    const mw = [
      {
        to: ['root.about'],
        call: [promise1, promise2],
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });

  it('converts "call" function to array', () => {
    const mw = [
      {
        to: ['root.about'],
        call: promise1,
      },
    ];
    const expectedMw = [
      {
        to: ['root.about'],
        call: [promise1],
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(expectedMw);
  });

  it('handles promise callbacks', () => {
    const mw = [
      {
        to: ['root.about'],
        call: [promise1],
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
        call: [promise1],
        shouldNavigate: () => true,
        onNavigationCancelled: () => true,
      },
    ];
    MiddlewareController.init(mw, routes);
    expect(MiddlewareController.getMiddlewares()).to.eql(mw);
  });
};


describe('MiddlewareController', tests);
