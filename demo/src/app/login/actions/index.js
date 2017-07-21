import actionTypes from '../../core/redux/actionTypes';


export default null;

export const login = () => (dispatch) => {
  dispatch({
    type: actionTypes.LOGIN.SUCCESS,
    token: 'logged in',
  });
};
