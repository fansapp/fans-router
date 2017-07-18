import { validateMiddlewares, defaultHooks } from './utils/middlewareController';
import actionTypes from './constants/actionTypes';


/**
 * Singleton route controller class
 */
class MiddlewareController {
  constructor() {
    this.middlewares = [];
  }

  init(middlewares, routes, history) {
    this.middlewares = validateMiddlewares(middlewares, routes);
    this.routes = routes;
    this.history = history;
  }

  getMiddlewares() {
    return this.middlewares;
  }

  execute(route, dispatch, getState) {
    const middlewares = this.middlewares.filter(mw => mw.to.includes(route.name));

    dispatch({
      type: actionTypes.INITIALIZE.START,
      route,
      routes: this.routes,
    });

    return new Promise((resolve, reject) => {
      this.loopMW(middlewares, route, dispatch, getState, resolve, reject);
    });
  }

  loopMW(middlewares, route, dispatch, getState, resolve, reject) {
    const mw = middlewares[0];
    const nextMws = middlewares.slice(1, middlewares.length);

    // finished looping
    if (middlewares.length === 0) {
      dispatch({
        type: actionTypes.NAVIGATE.COMPLETE,
        route,
      });

      // change url in browser to the desired path
      this.history.push(route.path);
      resolve(route);
      return;
    }

    const shouldNavigate = mw.shouldNavigate || defaultHooks.shouldNavigate;
    if (!shouldNavigate()) {
      dispatch({
        type: actionTypes.NAVIGATE.CANCEL,
        route,
      });

      const onNavigationCancelled = mw.onNavigationCancelled || defaultHooks.onNavigationCancelled;
      onNavigationCancelled(route, dispatch, getState());
      resolve(route);
      return;
    }

    let willNext = false;
    const next = () => {
      willNext = true;
    };

    mw.call.then((result) => {
      const onResolve = mw.onResolve || defaultHooks.onResolve;
      onResolve(result, route, dispatch, getState(), next);
      if (willNext) {
        this.loopMW(nextMws, route, dispatch, getState, resolve, reject);
      }
    })
      .catch((result) => {
        const onReject = mw.onReject || defaultHooks.onReject;
        onReject(result, route, dispatch, getState(), next);
        if (willNext) {
          this.loopMW(nextMws, route, dispatch, getState, resolve, reject);
        }
      });
  }
}


export default new MiddlewareController();
