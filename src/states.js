import { combineReducers } from 'redux';
import usersDataReducer from 'reducers/usersData.js';
import configDataReducer from 'reducers/config.js';

export default combineReducers({
	usersData: usersDataReducer,
	configData: configDataReducer
});