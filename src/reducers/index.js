//Import our types
import {GET_LOGS, SET_LOADING, LOGS_ERROR} from '../actions/types';
//The idea is to bring in any other reducers we have, and we can do that with combineReducers from redux
import { combineReducers } from "redux";

import logReducer from "./logReducer";

import techReducer from './techReducer'

//this will export the combineReducers which will take all the reducers you have.
export default combineReducers({
	log: logReducer,
	tech: techReducer  //Note that we are naming our state "log" in this case and we are setting it to our logReducer
}) 