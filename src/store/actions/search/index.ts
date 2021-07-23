import { searchRepositories, searchUser } from '@src/services/api'

import { Dispatch } from 'redux'
import humps from 'humps'

// fetch dados básicos de pesquisas
export const searchData = (query: string, entity: string, page: number) => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'SET_LOADING', loading: true })

		try {
			let result
			switch (entity) {
				case 'repos': {
					result = await searchRepositories(query, page)
					break
				}

				case 'users': {
					result = await searchUser(query, page)
					break
				}

				default: {
					// mais pesquisados
					result = await searchUser(query, page)
				}
			}
			dispatch({ type: 'SET_LOADING', loading: false })

			dispatch({
				type: 'SET_RESULT_SEARCH',
				data: humps.camelizeKeys(result.data.items),
				totalCount: result.data.total_count,
				query,
			})
		} catch (error) {}
	}
}

export const setTypeSearch = (type: string) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'SET_TYPE_SEARCH',
			typeSearch: type,
		})
	}
}

// Ver método depois (confuso)
export const setLoading = (type: string) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'SET_LOADING',
			typeSearch: type,
		})
	}
}
