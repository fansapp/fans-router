export default {
  getRoute: (state) => state.router.route,
  getRoutes: (state) => state.router.routes,
  getRouteName: (state) => state.router.route.name,
  getRoutePath: (state) => state.router.route.path,
  getQuery: (state) => state.router.route.query,
  getQueryParam: (state, name) => name in state.router.route.query ?
    state.router.route.query[name] : null,
  getParam: (state, name) => name in state.router.route.params ?
    state.router.route.params[name] : null,
  getParams: (state) => state.router.route.params,
};
