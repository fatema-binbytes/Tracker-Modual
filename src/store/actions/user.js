import immutable from 'immutable';

import actions from '../constants';
import LoginStatus from '../../constants/auth';

const singUp = (data) => {
  return (dispatch, getState) => {
    let users = getState().user.get('registerUsers');
    users = users.push(immutable.fromJS(data));

    console.log(users.toJS());

    dispatch({
      type: actions.SIGN_UP,
      payload: users,
      status: LoginStatus.SIGN_UP,
    });
  };
};

const checkUser = (email) => {
  return (dispatch, getState) => {
    const users = getState().user.get('registerUsers');
    const user = users.filter((x) => x.get('email') === email);
    dispatch({
      type: actions.CHECK_USER,
      payload: user,
    });
  };
};

export default {
  singUp,
  checkUser,
};
