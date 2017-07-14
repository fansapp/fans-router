import { expect } from 'chai';

import { nested, routes as flat } from './mocks';
import normalizeRoutes from '../utils/normalizeRoutes';


const tests = () => {
  it('flattens a route config object', () => {
    expect(normalizeRoutes(nested)).to.eql(flat);
  });
};


describe('normalizeRoutes takes a nested route structure and flattens it', tests);
