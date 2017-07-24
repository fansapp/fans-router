export default {
  getRoute: (state) => state.router.route,
  getRoutes: (state) => state.router.routes,
  getRouteName: (state) => state.router.route.name,
  getRoutePath: (state) => state.router.route.path,
  getQuery: (state) => state.router.route.query,
  getQueryParam: (state, key) => key in state.router.route.query ?
    state.router.route.query[key] : null,
  getParam: (state, key) => key in state.router.route.params ?
    state.router.route.params[key] : null,
  getParams: (state) => state.router.route.params,
};
