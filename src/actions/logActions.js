//Import our types
import {GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS} from './types';

// Get Logs from JSON Server
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
			payload: err.response.statusText
		})
	}
};

// Add new Logs from JSON Server
export const addLog = (log) => async dispatch => {
	
	try {
		setLoading(true);
		//This is the wait to do a POST http request using fetch, just pass an object with the method, body and headers as below
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers : {
				'Content-Type' : 'application/json'
			}
		});
		const data = await res.json();
		dispatch({
			type: ADD_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		})
	}
};

// Delete logs
export const deleteLog = (id) => async dispatch => {
	
	try {
		setLoading(true);
		await fetch(`/logs/${id}`, {
			method: 'DELETE'
		});

		dispatch({
			type: DELETE_LOG,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		})
	}
};

// Update log
export const updateLog = log => async dispatch => {
	try {
		setLoading(true);
		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await res.json();
		dispatch({
			type: UPDATE_LOG,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		})
	}
};

// Search Logs from JSON Server
export const searchLogs = (text) => async dispatch => {
	
	try {
		setLoading(true);
		const res = await fetch(`/logs?q=${text}`);
		const data = await res.json();
		dispatch({
			type: SEARCH_LOGS,
			payload: data
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText
		})
	}
};

// Set current log
export const setCurrent = log => {
	return {
		type: SET_CURRENT,
		payload: log
	}
}
// Clear current log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT
	}
}

//Set loading to true.
export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};


