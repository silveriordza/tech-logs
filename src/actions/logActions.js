//Import our types
import {GET_LOGS, SET_LOADING, LOGS_ERROR} from './types';


//The code below is option one, and it is fully comented, for the option tow look at the next function which is uncomented but also named getLogs
// export const getLogs = () => {
// //From here we can directly return with the type of watherver, but if we are going to do any asynch calls to our backend, that is where our redux thunk gets into place. Intead of just returning a object, we return a function and that function gets passed in a dispatch methodn that we can use to dispatch to our reducer at any point, we can request to a backend, get response and then dispatch to reducer.
// 	//return (dispatch, getState) => {  //This return function can have a getState as property but we will not need it here.
// 	return async (dispatch) => {
// 		setLoading(true);

// 		const res = await fetch('/logs');
// 		const data = await res.json();
// 		dispatch({
// 			type: GET_LOGS,
// 			payload: data
// 		});
// 	};

// };


export const getLogs = () => async dispatch => {
	
	try {
		setLoading(true);
		const res = await fetch('/logs');
		const data = await res.json();
		dispatch({
			type: GET_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.data
		})
	}
};

//Set loading to true.
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
