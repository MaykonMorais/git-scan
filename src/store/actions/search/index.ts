import {
	searchRepositories,
	searchUser,
	fetchUserRepos,
} from '@src/services/api'

import { Dispatch } from 'redux'
import humps from 'humps'
import { IRepository, IUser } from '@src/types'

// fetch dados básicos de pesquisas
export const searchData = (
	searchText: string,
	entity: string,
	page: number
) => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'SET_LOADING', loading: true })

		try {
			let result
			switch (entity) {
				case 'repos': {
					result = await searchRepositories(searchText, page)
					break
				}

				case 'users': {
					result = await searchUser(searchText, page)
					break
				}

				default: {
					// mais pesquisados
					result = await searchUser(searchText, page)
				}
			}
			dispatch({ type: 'SET_LOADING', loading: false })

			dispatch({
				type: 'SET_RESULT_SEARCH',
				data: humps.camelizeKeys(result.data.items),
				totalCount: result.data.total_count,
			})
		} catch (error) {}
	}
}

export function fetchRepos(userName: string, typeRepo: string, page: number) {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'SET_LOADING', loading: true })

		const { data } = await fetchUserRepos(userName, typeRepo, page)

		dispatch({ type: 'SET_LOADING', loading: false })

		dispatch({
			type: 'SET_REPOS',
			repos: humps.camelizeKeys(data),
		})
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

export const setSelectedItem = (item: IUser | IRepository, tabArea: string) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'SET_SELECTED_ITEM',
			selectedItem: item,
			tabArea,
		})
	}
}

export const setTabArea = (tabArea: string) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'SET_TAB_AREA',
			tabArea,
		})
	}
}
