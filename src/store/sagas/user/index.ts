import { call, put, takeLatest } from '@redux-saga/core/effects'
import { fetchUserRepos } from '@src/services/api'
import humps from 'humps'

import { IActionType, IUserRepo } from '@src/types'

interface IAction extends IActionType {
	payload: IUserRepo
}

function* getUserRepos(action: IAction) {
	try {
		const {
			payload: { userName, typeRepo, page },
		} = action

		const { data } = yield call(() => fetchUserRepos(userName, typeRepo, page))

		yield put({
			type: 'SET_REPOS',
			repos: humps.camelizeKeys(data),
		})
	} catch (error) {}
}

function* userSaga() {
	yield takeLatest('GET_USER_REPOS', getUserRepos)
}

export default userSaga
