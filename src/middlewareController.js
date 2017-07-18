import { validateMiddlewares } from './utils/middlewareController';


/**
 * Singleton route controller class
 */
class MiddlewareController {
  constructor() {
    this.middlewares = [];
  }

  init(middlewares, routes) {
    this.middlewares = validateMiddlewares(middlewares, routes);
    this.routes = routes;
  }

  getMiddlewares() {
    return this.middlewares;
  }
}


export default new MiddlewareController();
