import actions from '../constants';
import LoginStatus from '../../constants/auth';

const login = (data) => {
  return (dispatch, getState) => {
    const users = getState().user.get('registerUsers');
    const user = users.filter(
      (x) =>
        x.get('email') === data.email && x.get('password') === data.password,
    );
    if (user.size > 0) {
      dispatch({
        type: actions.LOGIN,
        status: LoginStatus.LOGIN,
        payload: user.get(0),
      });
    } else {
      dispatch({
        type: actions.LOGIN,
        status: LoginStatus.IN_VALID_USER,
      });
    }
  };
};

const logout = () => {
  return (dispatch) => {
    dispatch({
      type: actions.LOGOUT,
    });
  };
};

export default {
  login,
  logout,
};
