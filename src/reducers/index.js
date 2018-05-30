import { combineReducers } from 'redux'
import user from './user';
import ads from './ads';

export default combineReducers({
  user,
  ads
})