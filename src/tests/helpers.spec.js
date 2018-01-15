import { expect } from 'chai';

import { curryable, matchRoute } from '../helpers';

const tests = () => {

  // helpers

  it('curries a 2 argument function', () => {
    function testing(a, b) {
      return a + b;
    }

    const curried = curryable(testing);
    const add10 = curried(10);

    expect(curried(1, 2)).to.eql(curried(1)(2));
    expect(add10(5)).to.eql(curried(10)(5));
  });

  it('matches route', () => {
    expect(matchRoute('root.a.b.c', 'root.a.b')).to.eql(true);
    expect(matchRoute('root.a.b.c')('root.a.b')).to.eql(true); // curried
    expect(matchRoute('root.a.b.c')(['root', 'bleh'])).to.eql(true);
    expect(matchRoute('root.a.b.c')(['bla', 'bleh'])).to.eql(false);
  });
};


describe('helpers', tests);
