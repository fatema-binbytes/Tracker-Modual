import immutable from 'immutable';

import actions from '../constants';

const setState = (state) => {
  console.log(state)
  return (dispatch, getState) => {
    dispatch({
      type: actions.STATE,
      payload: immutable.fromJS(state),
    });
  };
};

export default {
  
  setState,
};
