import humps from 'humps'

import { put, call, takeLatest } from '@redux-saga/core/effects'

import { searchUser, searchRepositories } from '@src/services/api'

import { IActionType, ISearch } from '@src/types'

interface IAction extends IActionType {
	payload: ISearch
}

function* searchGithubUsers(action: IAction) {
	const {
		payload: { searchText, page },
	} = action

	try {
		const { data } = yield call(() => searchUser(searchText, page))

		yield put({
			type: 'SET_RESULT_SEARCH',
			data: humps.camelizeKeys(data.items),
			totalCount: data.total_count,
			searchText,
		})
	} catch (error) {}
}

function* searchGithubRepositories(action: IAction) {
	const {
		payload: { searchText, page },
	} = action

	try {
		const { data } = yield call(() => searchRepositories(searchText, page))

		yield put({
			type: 'SET_RESULT_SEARCH',
			data: humps.camelizeKeys(data.items),
			totalCount: data.total_count,
			searchText,
		})
	} catch (error) {}
}

function* searchSaga() {
	yield takeLatest('SEARCH_USERS', searchGithubUsers)
	yield takeLatest('SEARCH_REPOSITORIES', searchGithubRepositories)
}

export default searchSaga
