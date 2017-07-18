import history from './history';
import RouteFactory from './routeFactory';


export default null;


export const init = (route, routes) => (dispatch) => {
  dispatch({
    type: '@@fans-router/INITIALIZE.START',
    route,
    routes,
  });

  dispatch({
    type: '@@fans-router/INITIALIZE.COMPLETE',
    route,
  });
};

export const navigate = path => (dispatch) => {
  if (path === history.location.pathname) {
    return;
  }

  const route = RouteFactory.parse(path);

  dispatch({
    type: '@@fans-router/NAVIGATE.START',
    route,
  });

  history.push(path);
};


export const navComplete = (route, action) => ({
  type: '@@fans-router/NAVIGATE.COMPLETE',
  route,
  action,
});
