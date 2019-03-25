import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Provider from '../components/Provider';
import RouteFactory from '../routeFactory';
import MiddlewareController from '../middlewareController';


describe('<Provider />', () => {
  let RouteFactoryParseStub;
  let RouteFactoryInitStub;
  let MiddlewareControllerInitStub;
  const router = {
    history: {
      listen: sinon.stub(),
      location: {
        pathname: 'test',
        search: '',
      },
    },
    routes: [ { name: 'root.test', path: '/test' } ],
    nestedRoutes: { nested: true },
  };

  beforeEach(() => {
    RouteFactoryParseStub = sinon.stub(RouteFactory, 'parse').callsFake(() => true);
    RouteFactoryInitStub = sinon.stub(RouteFactory, 'init').callsFake(() => true);
    MiddlewareControllerInitStub = sinon.stub(MiddlewareController, 'init').callsFake(() => true);
  });

  afterEach(() => {
    RouteFactoryParseStub.restore();
    RouteFactoryInitStub.restore();
    MiddlewareControllerInitStub.restore();
  });

  it('renders successfully', () => {
    const wrapper = shallow(<div><Provider router={router} store={{ dispatch: () => 1 }}><div className="main">content</div></Provider></div>);
    expect(wrapper.find(Provider)).to.have.length(1);
  });

  it('calls init function from RouteFactory with proper arguments', () => {
    const options = { context: { store: { dispatch: () => true } } };
    shallow(<Provider router={router} store={{ dispatch: () => 1 }}><div className="main">content</div></Provider>, options);
    assert(RouteFactoryInitStub.calledWithExactly(router.routes, router.nestedRoutes));
  });

  it('calls init function from MiddlewareController with proper arguments', () => {
    const options = { context: { store: { dispatch: () => true } } };
    shallow(<Provider router={router} store={{ dispatch: () => 1 }}><div className="main">content</div></Provider>, options);
    assert(MiddlewareControllerInitStub.calledWithExactly([], router.routes, router.history));
  });
});
