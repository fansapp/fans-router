const normalizeRoute = (route, nodeName, nodePath) => ({
  name: nodeName ? nodeName.concat('.', route.name) : route.name,
  path: nodePath.concat(route.path),
});


const normalizeRoutes = (routes, nodeName = '', nodePath = '') =>
  routes.reduce((normalized, route) => {
    const normalizedRoute = normalizeRoute(route, nodeName, nodePath);
    if (route.routes) {
      return normalized.concat(
        normalizedRoute,
        normalizeRoutes(route.routes, normalizedRoute.name, normalizedRoute.path)
      );
    }
    return normalized.concat(normalizedRoute);
  }, []);

export default routes => normalizeRoutes(routes);
