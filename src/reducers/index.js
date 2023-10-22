import { combineReducers } from 'redux';
import AuthReducer from './auth';
import OrderReducer from './order';

export default combineReducers({
    AuthReducer,
    OrderReducer
})