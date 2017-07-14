import { parse } from 'query-string';

const makeRouteObject = (name, query = null) => ({
  name,
  params: null,
  query,
});


const interpretStringRoute = (route, routes) => {
  const [url, query] = route.split('?');
  const component = routes.find(r => r.path === url);

  if (!component) {
    return makeRouteObject('');
  }

  return makeRouteObject(component.name, query && parse(query));
};

const interpretRouteObject = (route) => {
  if (!route.name) {
    return makeRouteObject('');
  }

  if (Array.isArray(route.query) || (typeof route.query) !== 'object') {
    throw new Error('Unexpected query type.');
  }

  const validatedQuery = Object.keys(route.query).reduce((validated, currentQueryKey) => {
    let currentQuery = route.query[currentQueryKey];
    if ([null, undefined].includes(currentQuery)) {
      currentQuery = '';
    }

    const queryType = typeof currentQuery;
    if (['object', 'function'].includes(queryType)) {
      throw new Error('Unexpected query value.');
    }

    return { ...validated, [currentQueryKey]: String(currentQuery) };
  }, {});

  return makeRouteObject(route.name, validatedQuery);
};


class RouteFactory {
  init(routes) {
    this.routes = routes;
  }

  parse(route = null) {
    if ([null, undefined].includes(route)) {
      throw new Error('Unable to parse route.');
    }

    const routeType = Array.isArray(route) ? 'array' : typeof route;

    switch (routeType) {
    case 'string':
      return interpretStringRoute(route, this.routes);
    case 'object':
      return interpretRouteObject(route);
    default:
      throw new Error('Unexpected route type.');
    }
  }
}


export default new RouteFactory();
