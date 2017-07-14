import { expect } from 'chai';
import { parse, stringify } from 'query-string';

import { routes } from './mocks';
import RouteFactory, { errorMessages } from '../routeFactory';

const tests = () => {

  beforeEach(function() {
    RouteFactory.init(routes);
  });

  // parse function error handling

  it('throws error when no arguments', () => {
    expect(() => RouteFactory.parse()).to.throw(errorMessages.invalidRouteName);
  });

  it('throws error on null', () => {
    expect(() => RouteFactory.parse(null)).to.throw(errorMessages.invalidRouteName);
  });

  it('throws error on undefined', () => {
    expect(() => RouteFactory.parse(undefined)).to.throw(errorMessages.invalidRouteName);
  });

  it('throws error on array', () => {
    expect(() => RouteFactory.parse([])).to.throw(errorMessages.invalidRouteType);
  });

  it('throws error on boolean', () => {
    expect(() => RouteFactory.parse(true)).to.throw(errorMessages.invalidRouteType);
  });

  it('throws error on number', () => {
    expect(() => RouteFactory.parse(42)).to.throw(errorMessages.invalidRouteType);
  });

  it('throws error on empty path', () => {
    expect(() => RouteFactory.parse('')).to.throw(errorMessages.routeNotFound);
  });

  it('throws error on empty path name in object', () => {
    expect(() => RouteFactory.parse({ name: '' })).to.throw(errorMessages.routeNotFound);
  });

  // route parsing

  it('converts a simple path', () => {
    expect(RouteFactory.parse('/about-us')).to.eql({
      name: 'root.about',
      path: '/about-us',
      params: {},
      query: {},
    });
  });

  it('converts a path object', () => {
    expect(RouteFactory.parse({ name: 'root.about' })).to.eql({
      name: 'root.about',
      path: '/about-us',
      params: {},
      query: {},
    });
  });

  it('converts a nested path', () => {
    expect(RouteFactory.parse('/products/all')).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: {},
    });
  });

  // query parsing error handling

  it('throws error when query is an array', () => {
    expect(() => RouteFactory.parse({ name: 'root.products.all', query: [] })).to.throw(errorMessages.invalidQueryType);
  });

  it('throws error when query something other than an object', () => {
    expect(() => RouteFactory.parse({ name: 'root.products.all', query: '' })).to.throw(errorMessages.invalidQueryType);
  });

  it('throws error when query something other than an object', () => {
    const query = { ok: 12, notOk: { a: 2 } };
    expect(() => RouteFactory.parse({ name: 'root.products.all', query })).to.throw(errorMessages.invalidQueryValue);
  });

  // query parsing

  it('converts a path with a query param', () => {
    const query = '?ignore=some';
    expect(RouteFactory.parse(`/products/all${query}`)).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: parse(query),
    });
  });

  it('converts a path object with a query param', () => {
    const query = { ignore: 'some' };
    expect(RouteFactory.parse({ name: 'root.products.all', query })).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: parse(stringify(query)),
    });
  });

  it('converts a path with an empty query param', () => {
    const query = '?missing=';
    expect(RouteFactory.parse(`/products/all${query}`)).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: parse(query),
    });
  });

  it('converts a path object with an empty query param', () => {
    const query = { missing: null };
    expect(RouteFactory.parse({ name: 'root.products.all', query })).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: parse(stringify(query)),
    });
  });

  it('converts a path with multiple query params', () => {
    const query = '?ignore=some&limit=10&missing=';
    expect(RouteFactory.parse(`/products/all${query}`)).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: parse(query),
    });
  });

  it('converts a path object with multiple query params', () => {
    const query = { ignore: 'some', limit: 10, missing: null };
    expect(RouteFactory.parse({ name: 'root.products.all', query })).to.eql({
      name: 'root.products.all',
      path: '/products/all',
      params: {},
      query: parse(stringify(query)),
    });
  });
};


describe('RouteFactory', tests);
