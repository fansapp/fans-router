const initial = {
  route: null,
  routes: [],
};


export default (state = initial, action) => {
  switch (action.type) {
    case '@@fans-router/INITIALIZE.START':
      return {
        ...state,
        route: action.route,
        routes: action.routes,
      };

    case '@@fans-router/NAVIGATE.COMPLETE':
      return {
        ...state,
        route: action.route,
      };

    default: return state;
  }
};
