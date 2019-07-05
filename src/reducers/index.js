import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registrationReducer from './registrationReducer';
import authMysqlReducer from './authMysqlReducer';

export default combineReducers({
  auth: authReducer,
  registrationData: registrationReducer,
  authMysqlData: authMysqlReducer
});
