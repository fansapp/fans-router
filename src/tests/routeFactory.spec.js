import { expect } from 'chai';

import { routes } from './mocks';
import RouteFactory from '../routeFactory';

const tests = () => {

  // parse function error handling

  it('throws error when no arguments', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse()).to.throw('Unable to parse route.');
  });

  it('throws error on null', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse(null)).to.throw('Unable to parse route.');
  });

  it('throws error on undefined', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse(undefined)).to.throw('Unable to parse route.');
  });

  it('throws error on array', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse([])).to.throw('Unexpected route type.');
  });

  it('throws error on boolean', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse(true)).to.throw('Unexpected route type.');
  });

  it('throws error on number', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse(42)).to.throw('Unexpected route type.');
  });

  // route parsing

  it('handles empty path', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('')).to.eql({
      name: '',
      params: null,
      query: null,
    });
  });

  it('converts a simple path', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('/about-us')).to.eql({
      name: 'root.about',
      params: null,
      query: null,
    });
  });

  it('converts a path object', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('/about-us')).to.eql({
      name: 'root.about',
      params: null,
      query: null,
    });
  });

  it('converts a nested path', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('/products/all')).to.eql({
      name: 'root.products.all',
      params: null,
      query: null,
    });
  });

  // query parsing error handling

  it('throws error when query is an array', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse({ name: 'root.products.all', query: [] })).to.throw('Unexpected query type.');
  });

  it('throws error when query something other than an object', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse({ name: 'root.products.all', query: '' })).to.throw('Unexpected query type.');
  });

  it('throws error when query is a nested object', () => {
    RouteFactory.init(routes);
    expect(() => RouteFactory.parse({ name: 'root.products.all', query: { ok: 12, notOk: { a: 2 } } })).to.throw('Unexpected query value.');
  });

  // query parsing

  it('converts a path with a query param', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('/products/all?ignore=some')).to.eql({
      name: 'root.products.all',
      params: null,
      query: {
        ignore: 'some',
      },
    });
  });

  it('converts a path object with a query param', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse({ name: 'root.products.all', query: { ignore: 'some' }})).to.eql({
      name: 'root.products.all',
      params: null,
      query: {
        ignore: 'some',
      },
    });
  });

  it('converts a path with an empty query param', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('/products/all?missing=')).to.eql({
      name: 'root.products.all',
      params: null,
      query: {
        missing: '',
      },
    });
  });

  it('converts a path object with an empty query param', () => {
    RouteFactory.init(routes);
      expect(RouteFactory.parse({ name: 'root.products.all', query: { missing: null }})).to.eql({
      name: 'root.products.all',
      params: null,
      query: {
        missing: '',
      },
    });
  });

  it('converts a path with multiple query params', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse('/products/all?ignore=some&limit=10&missing=')).to.eql({
      name: 'root.products.all',
      params: null,
      query: {
        ignore: 'some',
        limit: '10',
        missing: '',
      },
    });
  });

  it('converts a path object with multiple query params', () => {
    RouteFactory.init(routes);
    expect(RouteFactory.parse({ name: 'root.products.all', query: { ignore: 'some', limit: 10, missing: null }})).to.eql({
      name: 'root.products.all',
      params: null,
      query: {
        ignore: 'some',
        limit: '10',
        missing: '',
      },
    });
  });
};


describe('RouteFactory converts paths to route objects', tests);
