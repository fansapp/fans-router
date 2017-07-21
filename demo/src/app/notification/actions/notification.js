import ACTIONS from '../../core/redux/actionTypes';


export default null;

export const showNotification = (msgType, text) => ({
  type: ACTIONS.NOTIFICATION.SHOW,
  msgType,
  text,
});

export const dismissNotification = () => ({
  type: ACTIONS.NOTIFICATION.DISMISS,
});

export const showSuccessNotification = text => ({
  type: ACTIONS.NOTIFICATION.SHOW,
  msgType: 'success',
  text,
});

export const showErrorNotification = text => ({
  type: ACTIONS.NOTIFICATION.SHOW,
  msgType: 'success',
  text,
});
