import {GET_LOGS, SET_LOADING, LOGS_ERROR} from '../actions/types';

//This is our initial state for Logs
const initialState = {
	logs: null,
	current: null,
	loading: false,
	error: null
}

//this is the Reducer funciton, similar to when you worked with the useContext hook. It receives as a property the state and the action, and sets the state to the initialState by default
export default (state=initialState, action) => {
	switch(action.type){
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false
			}
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case LOGS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload
			}

		default://we always have a default that returns the state as is:
			return state;
	}
}