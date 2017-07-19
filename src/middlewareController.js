import { validateMiddlewares, applyMWs } from './utils/middlewareController';
import actionTypes from './constants/actionTypes';


/**
 * Singleton route controller class
 */
class MiddlewareController {
  constructor() {
    this.middlewares = [];
  }

  /**
   * Initialization of the middleware controller and validation of the middlewares
   * @param {array} middlewares The path string or object
   * @param {array} routes An array of the flat version of the routes (normalized)
   * @param {object} history The browser history object
   */
  init(middlewares, routes, history) {
    this.middlewares = validateMiddlewares(middlewares, routes);
    this.routes = routes;
    this.history = history;
  }

  /**
   * Get the validated middlewares
   * @returns {object} The validated middlewares
   */
  getMiddlewares() {
    return this.middlewares;
  }

  /**
   * Execute each middleware sequentially for the route to be navigated
   * @param {object} route The route where the app is navigating
   * @param {function} dispatch The redux dispatch function
   * @param {function} getState The redux getState function
   * @returns {Promise} Resolved when reached the end of the middleware list without cancellation
   */
  execute(route, dispatch, getState) {
    const middlewares = this.middlewares.filter(mw => mw.to.includes(route.name));

    dispatch({
      type: actionTypes.NAVIGATE.START,
      route,
    });

    return new Promise((resolve, reject) => {
      applyMWs(middlewares, route, dispatch, getState, this.history, resolve, reject);
    });
  }
}


export default new MiddlewareController();
