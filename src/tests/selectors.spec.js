import { expect } from 'chai';

import RouteFactory from '../routeFactory';
import selectors from '../selectors';
import { routes, nested } from './mocks';

const tests = () => {

  beforeEach(function() {
    RouteFactory.init(routes, nested);
  });

  // selectors

  it('select the route', () => {
    const query = '?ignore=some';
    const route = RouteFactory.parse(`/products/all${query}`);
    const store = { router: { route } };
    expect(selectors.getRoute(store)).to.eql({
      name: 'root.products.all',
      path: '/products/all?ignore=some',
      query: {
        ignore: 'some',
      },
      params: {},
    });
  });

  it('select the routes', () => {
    const store = { router: { routes } };
    expect(selectors.getRoutes(store)).to.eql(routes);
  });

  it('select the route name', () => {
    const route = RouteFactory.parse('/products/all');
    const store = { router: { route } };
    expect(selectors.getRouteName(store)).to.eql('root.products.all');
  });

  it('select the route path', () => {
    const path = '/products/all?allo=hello';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getRoutePath(store)).to.eql(path);
  });

  it('select the query', () => {
    const path = '/products/all?allo=hello&test=124';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getQuery(store)).to.eql({
      allo: 'hello',
      test: '124',
    });
  });

  it('select the params', () => {
    const path = '/clients/6/edit';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getParams(store)).to.eql({
      clientId: '6',
    });
  });

  it('select a query parameter', () => {
    const path = '/products/all?allo=hello&test=124';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getQueryParam(store, 'allo')).to.eql('hello');
  });

  it('select a null query parameter', () => {
    const path = '/products/all?allo=hello&test=124';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getQueryParam(store, 'fail')).to.eql(null);
  });

  it('select a dynamic parameter', () => {
    const path = '/clients/6/edit';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getParam(store, 'clientId')).to.eql('6');
  });

  it('select a null dynamic parameter', () => {
    const path = '/clients/6/edit';
    const route = RouteFactory.parse(path);
    const store = { router: { route } };
    expect(selectors.getParam(store, 'fail')).to.eql(null);
  });
};


describe('selectors', tests);
