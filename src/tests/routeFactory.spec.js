import { expect } from 'chai';
import { parse, stringify } from 'query-string';

import { routes, nested } from './mocks';
import RouteFactory from '../routeFactory';
import { errorMessages }from '../constants';

const tests = () => {

  beforeEach(function() {
    RouteFactory.init(routes, nested);
  });

  // parse function error handling

  it('throws error when no arguments', () => {
    expect(() => RouteFactory.parse())
      .to.throw(errorMessages.invalidRouteName);
  });

  it('throws error on null', () => {
    expect(() => RouteFactory.parse(null))
      .to.throw(errorMessages.invalidRouteName);
  });

  it('throws error on undefined', () => {
    expect(() => RouteFactory.parse(undefined))
      .to.throw(errorMessages.invalidRouteName);
  });

  it('throws error on array', () => {
    expect(() => RouteFactory.parse([]))
      .to.throw(errorMessages.invalidRouteType);
  });

  it('throws error on boolean', () => {
    expect(() => RouteFactory.parse(true))
      .to.throw(errorMessages.invalidRouteType);
  });

  it('throws error on number', () => {
    expect(() => RouteFactory.parse(42))
      .to.throw(errorMessages.invalidRouteType);
  });

  it('throws error on empty path', () => {
    expect(() => RouteFactory.parse(''))
      .to.throw(errorMessages.routeNotFound);
  });

  it('throws error on empty path name in object', () => {
    expect(() => RouteFactory.parse({ name: '' }))
      .to.throw(errorMessages.routeNotFound);
  });

  // nested routes parsing error handling

  it('converts a nested path', () => {
    expect(() => RouteFactory.parse('/products/fail'))
      .to.throw(errorMessages.invalidNestedRoute.replace(/{.*?}/g, 'fail'));
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
    expect(() => RouteFactory.parse({
      name: 'root.products.all',
      query: [],
    })).to.throw(errorMessages.invalidQueryType);
  });

  it('throws error when query something other than an object', () => {
    expect(() => RouteFactory.parse({
      name: 'root.products.all',
      query: '',
    })).to.throw(errorMessages.invalidQueryType);
  });

  it('throws error when query something other than an object', () => {
    const query = { ok: 12, notOk: { a: 2 } };
    expect(() => RouteFactory.parse({
      name: 'root.products.all',
      query })).to.throw(errorMessages.invalidQueryValue);
  });

  // query parsing

  it('converts a path with a query param', () => {
    const query = '?ignore=some';
    expect(RouteFactory.parse(`/products/all${query}`)).to.eql({
      name: 'root.products.all',
      path: `/products/all${query}`,
      params: {},
      query: parse(query),
    });
  });

  it('converts a path object with a query param', () => {
    const query = { ignore: 'some' };
    expect(RouteFactory.parse({ name: 'root.products.all', query })).to.eql({
      name: 'root.products.all',
      path: `/products/all?${stringify(query)}`,
      params: {},
      query: parse(stringify(query)),
    });
  });

  it('converts a path with an empty query param', () => {
    const query = '?missing=';
    expect(RouteFactory.parse(`/products/all${query}`)).to.eql({
      name: 'root.products.all',
      path: `/products/all${query}`,
      params: {},
      query: parse(query),
    });
  });

  it('converts a path object with an empty query param', () => {
    const query = { missing: null };
    expect(RouteFactory.parse({ name: 'root.products.all', query })).to.eql({
      name: 'root.products.all',
      path: `/products/all?${stringify(query)}`,
      params: {},
      query: parse(stringify(query)),
    });
  });

  it('converts a path with multiple query params', () => {
    const query = '?ignore=some&limit=10&missing=';
    expect(RouteFactory.parse(`/products/all${query}`)).to.eql({
      name: 'root.products.all',
      path: `/products/all${query}`,
      params: {},
      query: parse(query),
    });
  });

  it('converts a path object with multiple query params', () => {
    const query = { ignore: 'some', limit: 10, missing: null };
    expect(RouteFactory.parse({ name: 'root.products.all', query })).to.eql({
      name: 'root.products.all',
      path: `/products/all?${stringify(query)}`,
      params: {},
      query: parse(stringify(query)),
    });
  });

  // dynamic parameter parsing error handling

  it('throws error on missing dynamic parameter', () => {
    expect(() => RouteFactory.parse({
      name: 'root.clients.id.edit',
      params: {
        clientIds: 8,
        test: 'ignore me',
      },
    })).to.throw(errorMessages.paramNotFound.replace(/{.*?}/g, 'clientId'));
  });

  it('parses a nested path with an empty dynamic parameters', () => {
    expect(() => RouteFactory.parse('/clients//edit'))
      .to.throw(errorMessages.invalidNestedRoute.replace(/{.*?}/g, ''));
  });

  // dynamic parameter parsing

  it('parses a nested path with dynamic parameters', () => {
    expect(RouteFactory.parse('/clients/8/edit')).to.eql({
      name: 'root.clients.id.edit',
      path: '/clients/8/edit',
      params: { clientId: '8' },
      query: {},
    });
  });

  it('parses a nested path object with dynamic parameters', () => {
    expect(RouteFactory.parse({
      name: 'root.clients.id.edit',
      params: {
        clientId: 8,
        test: 'ignore me',
      },
    })).to.eql({
      name: 'root.clients.id.edit',
      path: '/clients/8/edit',
      params: { clientId: '8' },
      query: {},
    });
  });
};


describe('RouteFactory', tests);
