import { createStore, applyMiddleware } from 'redux';
import rootReducer from './states.js';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
	const store = createStore(
		rootReducer, 
		initialState, 
		applyMiddleware(thunk, (store) => (next) => (action) => {
			console.log(next, action)
			next(action);
		})
	);

	if (module.hot) {
		module.hot.accept('./states.js', () => {
			const nextRootReducer = require('./states.js');
			store.replaceReducer(nextRootReducer);
		})
	}
	return store;
}
