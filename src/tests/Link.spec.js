import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import RouteFactory from '../routeFactory';
import { routes, nested } from './mocks';
import { matchRoute } from '../helpers';
import Link from '../components/Link';


describe('<Link />', () => {
  const baseRoute = { path: '', name: '', params: {}, query: {} };
  const aboutRoute = { ...baseRoute, path: '/about-us', name: 'root.about' };

  beforeEach(() => {
    RouteFactory.init(routes, nested);
  });

  // it('renders successfully', () => {
  //   const wrapper = shallow(
  //     <div>
  //       <Link
  //         navigate={() => true}
  //         route={aboutRoute}
  //         to="/about-us"
  //         matchRoute={matchRoute('root.test')}
  //       >
  //         link
  //       </Link>
  //     </div>
  //   );
  //   expect(wrapper.find(Link)).to.have.length(1);
  // });
  //
  // it('renders its children', () => {
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       route={aboutRoute}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       <p id="child">child</p>
  //     </Link>
  //   );
  //   expect(wrapper.find('#child')).to.have.length(1);
  // });
  //
  // it('implements default base class', () => {
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       route={aboutRoute}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.include('Link');
  // });
  //
  // it('implements className', () => {
  //   const myClass = 'myClass';
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       className={myClass}
  //       route={aboutRoute}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.include(myClass);
  // });
  //
  // it('calls navigate when clicked', () => {
  //   const onNavigate = sinon.spy();
  //   const wrapper = shallow(
  //     <Link
  //       navigate={onNavigate}
  //       route={aboutRoute}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   wrapper.simulate('click', { preventDefault() {} });
  //   expect(onNavigate.called).to.be.true;
  // });
  //
  // it('calls onClick when provided', () => {
  //   const onClick = sinon.spy();
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       route={aboutRoute}
  //       onClick={onClick}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   wrapper.simulate('click', { preventDefault() {} });
  //   expect(onClick.called).to.be.true;
  // });
  //
  // it('implements default active class', () => {
  //   const wrapper = shallow(
  //     <Link navigate={() => true}
  //       route={aboutRoute}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.include('Link--active');
  // });
  //
  // it('omits default active class', () => {
  //   const wrapper = shallow(
  //     <Link navigate={() => true}
  //       route={aboutRoute}
  //       ignoreClasses={['active']}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.not.include('Link--active');
  // });
  //
  // it('implements custom base class active class', () => {
  //   const baseClass = 'custom';
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       baseClass={baseClass}
  //       route={aboutRoute}
  //       to="/about-us"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.include(`${baseClass}--active`);
  // });
  //
  // it('implements active class on subroutes', () => {
  //   const route = { ...baseRoute, path: '/clients/5', name: 'root.clients.id' };
  //   const wrapper1 = shallow(
  //     <Link
  //       navigate={() => true}
  //       route={route}
  //       to="/clients/5"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper1.getElement().props.className).to.include('Link--active');
  //
  //   const wrapper2 = shallow(
  //     <Link
  //       navigate={() => true}
  //       route={route}
  //       to="/clients/2"
  //       matchRoute={matchRoute('root.test')}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper2.getElement().props.className).to.not.include('Link--active');
  // });
  //
  // it('implements custom base class tree class 1 level deep', () => {
  //   const baseClass = 'custom';
  //   const linkRoute = { ...baseRoute, path: '/clients/5/edit', name: 'root.clients.id.edit' };
  //
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       baseClass={baseClass}
  //       route={linkRoute}
  //       to="/clients/5"
  //       matchRoute={matchRoute(linkRoute.name)}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.include(`${baseClass}--tree`);
  // });
  //
  // it('omits custom base class tree class 1 level deep', () => {
  //   const baseClass = 'custom';
  //   const linkRoute = { ...baseRoute, path: '/clients/5/edit', name: 'root.clients.id.edit' };
  //
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       ignoreClasses={['tree']}
  //       baseClass={baseClass}
  //       route={linkRoute}
  //       to="/clients/5"
  //       matchRoute={matchRoute(linkRoute.name)}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.not.include(`${baseClass}--tree`);
  // });
  //
  // it('omits custom base class tree class 2 levels deep', () => {
  //   const baseClass = 'custom';
  //   const linkRoute = { ...baseRoute, path: '/clients/5/edit', name: 'root.clients.id.edit' };
  //
  //   const wrapper = shallow(
  //     <Link
  //       navigate={() => true}
  //       ignoreClasses={['tree']}
  //       baseClass={baseClass}
  //       route={linkRoute}
  //       to="/clients"
  //       matchRoute={matchRoute(linkRoute.name)}
  //     >
  //       link
  //     </Link>
  //   );
  //   expect(wrapper.getElement().props.className).to.not.include(`${baseClass}--tree`);
  // });

  it('omits all classes', () => {
    const baseClass = 'custom';
    const linkRoute = { ...baseRoute, path: '/clients/5/edit', name: 'root.clients.id.edit' };

    const wrapper = shallow(
      <Link
        navigate={() => true}
        ignoreClasses
        baseClass={baseClass}
        route={linkRoute}
        to="/clients"
        matchRoute={matchRoute(linkRoute.name)}
      >
        link
      </Link>
    );
    expect(wrapper.getElement().props.className).to.not.include(`${baseClass}--active`);
    expect(wrapper.getElement().props.className).to.not.include(`${baseClass}--tree`);
  });
});
