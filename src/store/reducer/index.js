import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import state from './state';
const rootReducers = combineReducers({
  auth,
  user,
  state,
});

export default rootReducers;
