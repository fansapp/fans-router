export default {
  getRoute: (state) => state.router.route,
  getRoutes: (state) => state.router.routes,
  getRouteName: (state) => state.router.route.name,
  getRoutePath: (state) => state.router.route.path,
  getQuery: (state) => state.router.route.query,
  getQueryParam: (state, name) => state.router.route.query[name],
  getParam: (state, name) => state.router.route.params[name],
  getParams: (state) => state.router.route.params,
};
