// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'

// const isBrowser = () => typeof window !== 'undefined'

// ** init middleware
const middleware = [thunk, createDebounce()]

// // ** Dev Tools
// const composeEnhancers = isBrowser()
// 	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 	: undefined || compose

// ** Create store
const store = createStore(
	rootReducer,
	{},
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middleware))
		: compose(applyMiddleware(...middleware))
)

export { store }
