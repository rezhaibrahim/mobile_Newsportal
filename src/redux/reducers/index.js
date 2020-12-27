import {combineReducers} from 'redux';

import auth from './auth';
import user from './user';
import news from './news';

export default combineReducers({
  auth,
  news,
  user,
});
