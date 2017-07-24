import React from 'react';
import { expect, assert } from 'chai';
import { shallow } from 'enzyme';
import RouteFactory from '../routeFactory';
import sinon from 'sinon';

import Link from '../components/Link';

describe('<Link />', () => {
  let RouteFactoryStub;
  beforeEach(() => {
    RouteFactoryStub = RouteFactoryStub = sinon.stub(RouteFactory, 'parse').callsFake((to) => {
      switch (to) {
        case '/about':
          return { path: '/about', name: 'root.about' };
      }
    });
  });

  afterEach(() => {
    RouteFactoryStub.restore();
  });

  it('renders successfully', () => {
    const wrapper = shallow(<div><Link navigate={() => true} routeName={'myRoute'} to={'/about'}>Blah</Link></div>);
    expect(wrapper.find(Link)).to.have.length(1);
  });

  it('renders its children', () => {
    const wrapper = shallow(<Link navigate={() => true} routeName={'myRoute'} to={'/about'}><p id="child">child</p></Link>);
    expect(wrapper.find('#child')).to.have.length(1);
  });

  it('implements default base class', () => {
    const wrapper = shallow(<Link navigate={() => true} routeName={'myRoute'} to={'/about'} />);
    assert(wrapper.node.props.className.includes('Link'));
  });

  it('implements className', () => {
    const myClass = 'myClass';
    const wrapper = shallow(<Link navigate={() => true} className={myClass} routeName={'myRoute'} to={'/about'} />);
    assert(wrapper.node.props.className.includes(myClass));
  });

  it('implements default active class', () => {
    const wrapper = shallow(<Link navigate={() => true} routeName={'root.about'} to={'/about'} />);
    assert(wrapper.node.props.className.includes('Link--active'));
  });

  it('implements custom base class active class', () => {
    const baseClass = 'custom';
    const wrapper = shallow(<Link navigate={() => true} baseClass={baseClass} routeName={'root.about'} to={'/about'} />);
    assert(wrapper.node.props.className.includes(`${baseClass}--active`));
  });

  it('calls navigate when clicked', () => {
    const onNavigate = sinon.spy();
    const wrapper = shallow(<Link navigate={onNavigate} routeName={'root.about'} to={'/about'} />);
    wrapper.simulate('click', { preventDefault() {} });
    assert(onNavigate.called);
  });
});
