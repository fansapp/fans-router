import memoize from 'lru-memoize';

/**
 * Builds the structure of the route object
 * @param {string} name The name of the route
 * @param {object} query The url query
 * @returns {object} The route object
 */
export const makeRouteObject = memoize(100, null, true)(
  (name, path, query = {}, params = {}) => ({
    name,
    path,
    params,
    query,
  }));


/**
 * Checks at least 1 of the queries has an unexpected type
 * @param {object} name The queries
 * @returns {boolean} True if has errors
 */
export const hasUnexpectedQueryType = memoize(100, null, true)(
  (query) => (
    Object.keys(query)
      .some(r => query[r] && ['object', 'function'].includes(typeof query[r]))
  ));


/**
 * Replaces all dynamic parameters inside path by their value
 * Example: clients/:id/edit --> clients/9/edit
 * @param {string} path The starting path
 * @param {object} params The parameters the user specified
 * @param {object} requiredParams The needed parameters in the path
 * @returns {string} The replaced path
 */
export const replacePathParamsByValues = memoize(100, null, true)(
  (path, params, requiredParams) => (
    requiredParams.reduce((builtPath, curReqParam) => (
      builtPath.replace(curReqParam, params[curReqParam.slice(1, curReqParam.length)])
    ), path)
  ));


/**
 * Validates if the user provided all the necessary parameters for this path
 * @param {object} params The parameters the user specified
 * @param {object} requiredParams The needed parameters in the path
 * @returns {object} The validated parameters
 */
export const validateObjectPathParams = memoize(100, null, true)(
  (params, requiredParams) => (
    requiredParams.map(p => p.slice(1, p.length))
      .reduce((parameters, currentParam) => {
        if (!params.hasOwnProperty(currentParam)) {
          throw new Error(currentParam);
        }

        return { ...parameters, [currentParam]: String(params[currentParam]) };
      }, {})
  ));


/**
 * Validates and parses dynamic parameters in a string route (recursive)
 * @param {array} nodes The number of nodes remaining to travel
 * @param {object} currentNode The current valid node
 * @param {object} params The dynamic parameters
 * @param {string} name The name of the current traveled path
 * @returns {object} The name of the path and the dynamic parameters
 */
export const validateStringPath = memoize(100, null, true)(
  (nodes = [], currentNode, params = {}, name = 'root') => {
    const newParams = params;

    if (nodes.length === 0) {
      return {
        params,
        name,
      };
    }

    const nextNode = currentNode.routes.find((r) => {
      const path = r.path.replace(/^\/|\/$/g, '');

      if (path.startsWith(':')) {
        if (!nodes[0]) {
          throw new Error(nodes[0]);
        }
        newParams[path.slice(1, path.length)] = nodes[0];
        return r;
      }

      if (path === nodes[0]) {
        return r;
      }

      return false;
    });

    if (!nextNode) {
      throw new Error(nodes[0]);
    }

    return validateStringPath(
      nodes.slice(1, nodes.length),
      nextNode,
      newParams,
      name.concat(`.${nextNode.name}`)
    );
  });
