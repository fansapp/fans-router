import history from './history';


export default null;


export const init = (location, routes) => (dispatch) => {
  dispatch({
    type: '@@fans-router/INITIALIZE',
    location,
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


export const navComplete = (location, action) => ({
  type: '@@fans-router/NAVIGATE.COMPLETE',
  location,
  action,
});
