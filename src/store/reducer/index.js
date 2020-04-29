import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import data from './data';
const rootReducers = combineReducers({
  auth,
  user,
  data,
});

export default rootReducers;
