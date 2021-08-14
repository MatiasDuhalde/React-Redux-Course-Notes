import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

// React-final-form must be wired

export default combineReducers({
  auth: authReducer,
  streams: streamsReducer,
});
