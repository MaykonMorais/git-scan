// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import rootReducer from '../reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import rootSaga from '../sagas/rootSaga'

import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from '@redux-saga/core'

const sagaMiddleware = createSagaMiddleware()

// ** init middleware
const middleware = [thunk, createDebounce(), sagaMiddleware]

// ** Create store
const store = createStore(
	rootReducer,
	{},
	process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middleware))
		: compose(applyMiddleware(...middleware))
)

sagaMiddleware.run(rootSaga)

export { store }
