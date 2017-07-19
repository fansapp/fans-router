import { parse, stringify } from 'query-string';
import errorMessages from './constants/errorMessages';
import {
  makeRouteObject,
  hasUnexpectedQueryType,
  replacePathParamsByValues,
  validateStringPath,
  validateObjectPathParams,
} from './utils/routeFactory';


/**
 * Creates route object from path string
 * @param {string} route The path string
 * @param {array} routes The route context
 * @returns {object} The route object
 */
const interpretStringRoute = (route, nestedRoutes) => {
  const [url, query] = route.split('?');
  if (!url) {
    throw new Error(errorMessages.routeNotFound);
  }

  const nodes = url.replace(/^\/|\/$/g, '');
  if (!nodes) {
    return makeRouteObject('root', '/');
  }

  try {
    const validatedPath = validateStringPath(nodes.split('/'), nestedRoutes[0]);
    return makeRouteObject(validatedPath.name, route, query && parse(query), validatedPath.params);
  }
  catch ({ message }) {
    throw new Error(errorMessages.invalidNestedRoute.replace(/{.*?}/g, message));
  }
};

/**
 * Creates route object from path object
 * @param {object} route The path object
 * @param {array} routes The route context
 * @returns {object} The route object
 */
const interpretRouteObject = (route, routes) => {
  if (Array.isArray(route.query) || !['object', 'undefined'].includes(typeof route.query)) {
    throw new Error(errorMessages.invalidQueryType);
  }

  const component = routes.find(r => r.name === route.name);
  if (!component) {
    throw new Error(errorMessages.routeNotFound);
  }

  if (route.query && hasUnexpectedQueryType(route.query)) {
    throw new Error(errorMessages.invalidQueryValue);
  }

  let params = {};
  const { name, path } = component;
  const reqParams = path.replace(/^\/|\/$/g, '').split('/').filter(p => p.startsWith(':'));

  if (reqParams.length > 0) {
    try {
      params = validateObjectPathParams(route.params, reqParams);
    }
    catch ({ message }) {
      throw new Error(errorMessages.paramNotFound.replace(/{.*?}/g, message));
    }
  }

  const stringQuery = route.query ? `?${stringify(route.query)}` : '';
  return makeRouteObject(
    name,
    `${replacePathParamsByValues(path, params, reqParams)}${stringQuery}`,
    parse(stringQuery),
    params
  );
};


/**
 * Singleton factory class
 */
class RouteFactory {
  init(routes, nestedRoutes) {
    this.routes = routes;
    this.nestedRoutes = nestedRoutes;
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
      return interpretStringRoute(route, this.nestedRoutes);
    case 'object':
      return interpretRouteObject(route, this.routes);
    default:
      throw new Error(errorMessages.invalidRouteType);
    }
  }
}


export default new RouteFactory();
