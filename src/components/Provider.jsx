import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navigate, init } from '../actions';
import RouteFactory from '../routeFactory';
import actionTypes from '../constants/actionTypes';
import MiddlewareController from '../middlewareController';


class FansRouterProvider extends Component {
  constructor(props, context) {
    super(props, context);
    const { store, router, middlewares } = props;
    const { routes, nestedRoutes, history } = router;

    store.dispatch({ type: 'hello' });

    this.history = history;
    this.routes = routes;
    this.nestedRoutes = nestedRoutes;
    this.middlewares = middlewares;

    this.history.listen((location, action) => {
      if (action === actionTypes.HISTORY.POP) {
        store.dispatch(navigate(location.pathname.concat(location.search), false, action));
      }
    });

    RouteFactory.init(this.routes, this.nestedRoutes);
    MiddlewareController.init(this.middlewares, this.routes, this.history);

    const { location } = this.history;
    const route = RouteFactory.parse(location.pathname.concat(location.search));
    store.dispatch(init(route, this.routes));
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

FansRouterProvider.defaultProps = {
  middlewares: [],
};

FansRouterProvider.propTypes = {
  children: PropTypes.element.isRequired,
  router: PropTypes.shape().isRequired,
  middlewares: PropTypes.arrayOf(PropTypes.shape()),
  store: PropTypes.shape().isRequired,
};

export default FansRouterProvider;
