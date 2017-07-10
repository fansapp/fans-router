import { expect } from 'chai';

import { routes } from './mocks';
import pathToRoute from '../src/utils/pathToRoute';


const makeLocation = (pathname, search = null) => ({
  pathname,
  search,
});

const tests = () => {
  it('converts a simple path', () => {
    const location = makeLocation('/about-us');
    expect(pathToRoute(location, routes)).to.eql({
      name: 'root.about',
      params: null,
      search: null,
    });
  });

  it('converts a nested path', () => {
    const location = makeLocation('/products/all');
    expect(pathToRoute(location, routes)).to.eql({
      name: 'root.products.all',
      params: null,
      search: null,
    });
  });

  it('converts a path with a query param', () => {
    const location = makeLocation('/products/all', '?ignore=some');
    expect(pathToRoute(location, routes)).to.eql({
      name: 'root.products.all',
      params: null,
      search: {
        ignore: 'some',
      },
    });
  });

  it('converts a path with an empty query param', () => {
    const location = makeLocation('/products/all', '?missing=');
    expect(pathToRoute(location, routes)).to.eql({
      name: 'root.products.all',
      params: null,
      search: {
        missing: '',
      },
    });
  });

  it('converts a path with multiple query params', () => {
    const location = makeLocation('/products/all', '?ignore=some&limit=10&missing=');
    expect(pathToRoute(location, routes)).to.eql({
      name: 'root.products.all',
      params: null,
      search: {
        ignore: 'some',
        limit: '10',
        missing: '',
      },
    });
  });
};


describe('pathToRoute converts paths to route objects', tests);
