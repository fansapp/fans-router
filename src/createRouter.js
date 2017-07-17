import history from './history';
import normalizeRoutes from './utils/normalizeRoutes';
import RouteFactory from './routeFactory';


export default routes => {
  const normalizedRoutes = normalizeRoutes(routes);
  RouteFactory.init(normalizedRoutes, routes);

  return {
    history,
    routes: normalizedRoutes,
  };
};
