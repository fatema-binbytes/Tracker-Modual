import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';

const rootReducers = combineReducers({
  auth,
  user,
});

export default rootReducers;
