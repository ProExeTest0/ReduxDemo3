import {combineReducers} from 'redux';
import {AddProductReducer} from './AddProductReducer';
import {UserDetailReducer} from './UserDetailReducer';

export default combineReducers({
  AddProductReducer,
  UserDetailReducer,
});
