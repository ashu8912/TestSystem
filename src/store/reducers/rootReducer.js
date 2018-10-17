import {combineReducers,createStore,applyMiddleware} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { authReducer } from './authReducer';
export const store=createStore(combineReducers({form:formReducer,
auth:authReducer}),applyMiddleware(thunk))