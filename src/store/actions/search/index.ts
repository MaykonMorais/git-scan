import { searchRepositories } from '@src/services/api'

import { Dispatch } from 'redux'

export const searchData = (searchText: string) => {
	return async (dispatch: Dispatch) => {
		try {
			const { data } = await searchRepositories(searchText, 'javascript')

			dispatch({
				type: 'SET_RESULT_SEARCH',
				data,
			})
		} catch (error) {}
	}
}

export const setTypeSearch = (type: string) => {
	return async (dispatch: Dispatch) => {
		// dispatch({ type: 'SET_LOADING' })

		dispatch({
			type: 'SET_TYPE_SEARCH',
			typeSearch: type,
		})
	}
}
