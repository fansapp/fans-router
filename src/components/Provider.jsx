import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { navComplete, init } from '../actions';


class FansRouterProvider extends Component {
  constructor(props, context) {
    super(props, context);
    const { router } = props;
    this.history = router.history;
    this.routes = router.routes;
    this.history.listen((location, action) => {
      context.store.dispatch(navComplete(location, action));
    });
    context.store.dispatch(init(this.history.location, this.routes));
  }

  getChildContext() {
    return {
      history: this.history,
      routes: this.routes,
    };
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

FansRouterProvider.childContextTypes = {
  history: PropTypes.shape().isRequired,
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FansRouterProvider;
