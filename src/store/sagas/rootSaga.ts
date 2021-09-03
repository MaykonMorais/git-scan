import { all } from 'redux-saga/effects'

import searchSaga from './search'
import userSaga from './user'

export default function* rootSaga() {
	yield all([searchSaga(), userSaga()])
}
