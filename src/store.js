//This are to create the store, and apply Middleware is for using the redux-think for asyncronous calls or waits.
import {createStore, applyMiddleware} from 'redux';
//This is to connect our app to the redux devtools extension that you can see in the Chrome devtools in the Redux tab. Remember to also install the Redux Devtool Extension from google into your Chrome.
import {composeWithDevTools} from 'redux-devtools-extension';

//We will be using the think middleware.
import thunk from 'redux-thunk'
//The reducers folder does not exist yet, but it will have an index.js file there. The way the reducers work in redux, we have a root reducer, any other reducer like log reducer, tech reducer we will bring it into this rootReducer file.
import rootReducer from './reducers';

//This is our initial state which is an empty object.
const initialState = {};

//For middleware we create a variable, and any middleware we are going to use we put it in here, in this case we will use the thunk middleware:
const middleware = [thunk];

//We will create our Store, it takes the rootReducer, which reducer will it be working with, it takes the initial state, and the connection to theDevTools extrension which also will take the middleware.
const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;







