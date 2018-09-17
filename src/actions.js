import history from './history';
import RouteFactory from './routeFactory';
import actionTypes from './constants/actionTypes';
import MiddlewareController from './middlewareController';

export default null;

export const init = (route, routes) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.INITIALIZE.START,
    routes,
  });

  dispatch({
    type: actionTypes.INITIALIZE.END,
  });

  MiddlewareController.execute(route, dispatch, getState)
    .then(() => {
      return;
    })
    .catch(e => {
      throw new Error(e);
    });
};

export const reload = () => {
  return (dispatch, getState) => {
    MiddlewareController.execute(
      RouteFactory.parse(
        history.location.pathname.concat(history.location.search)
      ),
      dispatch,
      getState,
      true
    )
      .then(() => {
        return;
      })
      .catch(e => {
        throw new Error(e);
      });
  };
};

export const navigate = (
  path,
  force = false,
  historyAction = actionTypes.HISTORY.PUSH
) => (dispatch, getState) => {
  const isPop = historyAction === actionTypes.HISTORY.POP;
  if (
    (getState().router.isNavigating) ||
    (!isPop && !force && path === history.location.pathname.concat(history.location.search))
  ) {
    return;
  }

  MiddlewareController.execute(
    RouteFactory.parse(path),
    dispatch,
    getState,
    isPop
  )
    .then(() => {
      return;
    })
    .catch(e => {
      throw new Error(e);
    });
};

export const navComplete = (route, action) => ({
  type: actionTypes.NAVIGATE.END,
  route,
  action,
});
