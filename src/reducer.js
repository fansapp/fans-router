import pathToRoute from './utils/pathToRoute';


const initial = {
  location: null,
  route: null,
  routes: [],
};


export default (state = initial, action) => {
  switch (action.type) {
    case '@@fans-router/INITIALIZE':
      return {
        ...state,
        location: action.location,
        route: pathToRoute(action.location, action.routes),
        routes: action.routes,
      };

    case '@@fans-router/NAVIGATE.COMPLETE':
      return {
        ...state,
        location: action.location,
        route: pathToRoute(action.location, state.routes),
      };

    default: return state;
  }
};
