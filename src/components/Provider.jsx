import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate, navComplete, init } from '../actions';
import RouteFactory from '../routeFactory';


class FansRouterProvider extends Component {
  constructor(props, context) {
    super(props, context);
    const { router } = props;
    const { dispatch } = context.store;
    this.history = router.history;
    this.routes = router.routes;
    this.history.listen((location, action) => {
      const route = RouteFactory.parse(location.pathname.concat(location.search));
      dispatch(navComplete(route, action));
    });

    const { location } = this.history;
    const route = RouteFactory.parse(location.pathname.concat(location.search));
    dispatch(init(route, this.routes));
    dispatch(navigate(route.path));
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

FansRouterProvider.propTypes = {
  children: PropTypes.element.isRequired,
  router: PropTypes.shape().isRequired,
};

FansRouterProvider.contextTypes = {
  store: PropTypes.shape().isRequired,
};

export default FansRouterProvider;
