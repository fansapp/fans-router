import history from './history';


export default null;


export const init = (route, routes) => (dispatch) => {
  dispatch({
    type: '@@fans-router/INITIALIZE',
    route,
    routes,
  });

  dispatch({
    type: '@@fans-router/INITIALIZE.COMPLETE',
  });
};

export const navigate = path => (dispatch) => {
  if (path === history.location.pathname) {
    return;
  }

  dispatch({
    type: '@@fans-router/NAVIGATE.START',
    path,
  });

  history.push(path);
};


export const navComplete = (route, action) => ({
  type: '@@fans-router/NAVIGATE.COMPLETE',
  route,
  action,
});
