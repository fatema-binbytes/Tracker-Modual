import Immutable from 'immutable';
import actions from '../constants';

const initialState = Immutable.fromJS({
  loginStatus: null,
});

const auth = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      return state.update('loginStatus', () => action.status);
    case actions.LOGIN:
      return state.update('loginStatus', () => action.status);
    case actions.LOGOUT:
      return state.update('loginStatus', () => null);
    default:
      return state;
  }
};

export default auth;
