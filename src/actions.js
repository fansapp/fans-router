import history from './history';
import RouteFactory from './routeFactory';
import actionTypes from './constants/actionTypes';


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

export const navigate = path => (dispatch) => {
  if (path === history.location.pathname) {
    return;
  }

  const route = RouteFactory.parse(path);

  dispatch({
    type: actionTypes.NAVIGATE.START,
    route,
  });

  history.push(path);
};


export const navComplete = (route, action) => ({
  type: actionTypes.NAVIGATE.END,
  route,
  action,
});
