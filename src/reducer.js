import actionTypes from './constants/actionTypes';


const initial = {
  route: null,
  routes: [],
};

export default (state = initial, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE.START:
      return {
        ...state,
        route: action.route,
        routes: action.routes,
      };

    case actionTypes.NAVIGATE.END:
      return {
        ...state,
        route: action.route,
      };

    default: return state;
  }
};
