import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

// import RouteFactory from '../routeFactory';
import Link from '../components/Link';

describe('<Link />', () => {
  const baseRoute = { path: '', name: '', params: {}, query: {} };
  const aboutRoute = { ...baseRoute, path: '/about', name: 'root.about' };

  it('renders successfully', () => {
    const wrapper = shallow(<div><Link navigate={() => true} route={aboutRoute} to="/about">link</Link></div>);
    expect(wrapper.find(Link)).to.have.length(1);
  });

  it('renders its children', () => {
    const wrapper = shallow(<Link navigate={() => true} route={aboutRoute} to="/about"><p id="child">child</p></Link>);
    expect(wrapper.find('#child')).to.have.length(1);
  });

  it('implements default base class', () => {
    const wrapper = shallow(<Link navigate={() => true} route={aboutRoute} to="/about">link</Link>);
    expect(wrapper.node.props.className).to.include('Link');
  });

  it('implements className', () => {
    const myClass = 'myClass';
    const wrapper = shallow(<Link navigate={() => true} className={myClass} route={aboutRoute} to="/about">link</Link>);
    expect(wrapper.node.props.className).to.include(myClass);
  });

  it('calls navigate when clicked', () => {
    const onNavigate = sinon.spy();
    const wrapper = shallow(<Link navigate={onNavigate} route={aboutRoute} to="/about">link</Link>);
    wrapper.simulate('click', { preventDefault() {} });
    expect(onNavigate.called).to.be.true;
  });

  it('implements default active class', () => {
    const wrapper = shallow(<Link navigate={() => true} route={aboutRoute} to="/about">link</Link>);
    expect(wrapper.node.props.className).to.include('Link--active');
  });

  it('implements custom base class active class', () => {
    const baseClass = 'custom';
    const wrapper = shallow(<Link navigate={() => true} baseClass={baseClass} route={aboutRoute} to="/about">link</Link>);
    expect(wrapper.node.props.className).to.include(`${baseClass}--active`);
  });

  it('implements active class on subroutes', () => {
    const route = { ...baseRoute, path: '/posts/1', name: 'root.post' };
    const wrapper1 = shallow(<Link navigate={() => true} route={route} to="/posts/1">link</Link>);
    expect(wrapper1.node.props.className).to.include('Link--active');

    const wrapper2 = shallow(<Link navigate={() => true} route={route} to="/posts/2">link</Link>);
    expect(wrapper2.node.props.className).to.not.include('Link--active');
  });
});
