import { expect } from 'chai';

import { routes } from './mocks';
import routeToPath from '../src/utils/routeToPath';


const tests = () => {
  it('converts a simple route', () => {
    expect(routeToPath('root.about', routes)).to.eql('/about-us');
  });

  it('converts a nested route', () => {
    expect(routeToPath('root.products.all', routes)).to.eql('/products/all');
  });

  it('converts a route with a query param', () => {
    const search = { ignore: 'some' };
    expect(routeToPath('root.products.all', routes, search))
      .to.eql('/products/all?ignore=some');
  });

  it('converts a route with an empty query param', () => {
    const search = { missing: '' };
    expect(routeToPath('root.products.all', routes, search))
      .to.eql('/products/all?missing=');
  });

  it('converts a route with multiple query params', () => {
    const search = {
      ignore: 'some',
      limit: '10',
      missing: '',
    };
    expect(routeToPath('root.products.all', routes, search))
      .to.eql('/products/all?ignore=some&limit=10&missing=');
  });
};


describe('routeToPath converts paths to route objects', tests);
