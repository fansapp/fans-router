import history from './history';
import RouteFactory from './routeFactory';
import actionTypes from './constants/actionTypes';
import MiddlewareController from './middlewareController';


export default null;


export const init = (route, routes) => (dispatch) => {
  dispatch({
    type: actionTypes.INITIALIZE.START,
    route,
    routes,
  });
  dispatch({
    type: actionTypes.INITIALIZE.END,
    route,
  });
};

export const navigate = path => (dispatch, getState) => {
  if (path === history.location.pathname) {
    return;
  }

  const route = RouteFactory.parse(path);

  dispatch({
    type: actionTypes.NAVIGATE.START,
    route,
  });

  MiddlewareController.execute(
    MiddlewareController.getMiddlewares(),
    RouteFactory.parse(path),
    dispatch,
    getState
  ).then(() => { return; }).catch((e) => { throw new Error(e); });
};


export const navComplete = (route, action) => ({
  type: actionTypes.NAVIGATE.END,
  route,
  action,
});
