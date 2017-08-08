import actionTypes from './constants/actionTypes';


const initial = {
  route: null,
  routes: [],
  isNavigating: false,
};

export default (state = initial, action) => {
  switch (action.type) {
    case actionTypes.INITIALIZE.START:
      return {
        ...state,
        routes: action.routes,
      };

    case actionTypes.NAVIGATE.START:
      return {
        ...state,
        isNavigating: true,
      };

    case actionTypes.NAVIGATE.END:
      return {
        ...state,
        route: action.route,
        isNavigating: false,
      };

    case actionTypes.NAVIGATE.ABORT:
    case actionTypes.NAVIGATE.CANCEL:
      return {
        ...state,
        isNavigating: false,
      };

    default: return state;
  }
};
