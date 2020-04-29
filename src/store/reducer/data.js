import Immutable from 'immutable';
import actions from '../constants';

const initialState = Immutable.fromJS({
  state: null,
  data: null,
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case actions.STATE:
      return state.update('state', () => action.payload);
    case actions.GET_DATA:
      return state.update('data', () => action.payload);
    default:
      return state;
  }
};

export default user;
