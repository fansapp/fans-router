import ACTIONS from '../../core/redux/actionTypes';


const initial = {
  text: null,
  type: null,
};

export default (state = initial, action) => {
  switch (action.type) {

    case ACTIONS.NOTIFICATION.SHOW: {
      return {
        text: action.text,
        type: action.msgType,
      };
    }

    case ACTIONS.NOTIFICATION.DISMISS:
      return {
        text: initial.text,
        type: initial.type,
      };

    default:
      return state;
  }
};
