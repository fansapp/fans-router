import { parse, stringify } from 'query-string';


export const errorMessages = {
  invalidRouteType: 'Unexpected route type.',
  invalidRouteName: 'Unable to parse route.',
  routeNotFound: 'Unable to find requested route name.',
  invalidQueryType: 'Unexpected query type.',
};

/**
 * Builds the structure of the route object
 * @param {string} name The name of the route
 * @param {object} query The url query
 * @returns {object} The route object
 */
const makeRouteObject = (name, query = {}) => ({
  name,
  params: {},
  query,
});

/**
 * Creates route object from path string
 * @param {string} route The path string
 * @param {array} routes The route context
 * @returns {object} The route object
*/
const interpretStringRoute = (route, routes) => {
  const [url, query] = route.split('?');
  const component = routes.find(r => r.path === url);

  if (!component) {
    throw new Error(errorMessages.routeNotFound);
  }

  return makeRouteObject(component.name, query && parse(query));
};

/**
 * Creates route object from path object
 * @param {object} route The path object
 * @param {array} routes The route context
 * @returns {object} The route object
 */
const interpretRouteObject = (route, routes) => {
  const component = routes.find(r => r.name === route.name);

  if (!component) {
    throw new Error(errorMessages.routeNotFound);
  }

  if (Array.isArray(route.query) || !['object', 'undefined'].includes(typeof route.query)) {
    throw new Error(errorMessages.invalidQueryType);
  }

  return makeRouteObject(route.name, parse(stringify(route.query)));
};


/**
 * Singleton factory class
 */
class RouteFactory {
  init(routes) {
    this.routes = routes;
  }

  /**
   * Creates route object from path string or path object
   * @param {string, object} route The path string or object
   * @returns {object} The route object
   */
  parse(route = null) {
    if ([null, undefined].includes(route)) {
      throw new Error(errorMessages.invalidRouteName);
    }

    const routeType = Array.isArray(route) ? 'array' : typeof route;

    switch (routeType) {
    case 'string':
      return interpretStringRoute(route, this.routes);
    case 'object':
      return interpretRouteObject(route, this.routes);
    default:
      throw new Error(errorMessages.invalidRouteType);
    }
  }
}


export default new RouteFactory();
