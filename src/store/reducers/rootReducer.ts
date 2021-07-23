import { combineReducers } from 'redux'

// ** Reducers
import search from './search'
import user from './user'

const rootReducer = combineReducers({ search, user })

export default rootReducer
