// Constants
import ACTIONS from '../../core/redux/actionTypes';


const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTIONS.NOTIFICATION.SHOW:
      return state;

    default: return state;
  }
};
