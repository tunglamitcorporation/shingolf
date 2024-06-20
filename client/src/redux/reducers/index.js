
import { combineReducers } from 'redux';
import authReducer from './units/auth.js';
import tokenReducer from './units/token.js';

const rootReducer = combineReducers({
    auth: authReducer,
    token: tokenReducer
})

export default rootReducer;