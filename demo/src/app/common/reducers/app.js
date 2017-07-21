// Constants
import actionTypes from '../../core/redux/actionTypes';


const initialState = {
  token: null,
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.NOTIFICATION.SHOW:
      return state;

    case actionTypes.LOGIN.SUCCESS:
      return {
        ...state,
        token: action.token,
      };

    default: return state;
  }
};
