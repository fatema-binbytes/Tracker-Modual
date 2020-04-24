import Immutable from 'immutable';
import actions from '../constants';

const initialState = Immutable.fromJS({
  state: null,
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.STATE:
      return state.update('state', () => action.payload);
    default:
      return state;
  }
};

export default user;
