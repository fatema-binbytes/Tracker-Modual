import Immutable from 'immutable';
import actions from '../constants';

const initialState = Immutable.fromJS({
  registerUsers: [],
  info: null,
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGN_UP:
      return state.update('registerUsers', () => action.payload);
    case actions.LOGIN:
      return state.update('info', () => action.payload);
    case actions.CHECK_USER:
      return state.update('info', () => action.payload);
    default:
      return state;
  }
};

export default user;
