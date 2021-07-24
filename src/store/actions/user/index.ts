import { fetchUserRepos } from '@src/services/api'

import { Dispatch } from 'redux'
import humps from 'humps'
import { IRepository, IUser } from '@src/types'

export function fetchRepos(userName: string, typeRepo: string, page = 1) {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'SET_LOADING_REPOS', loading: true })

		const { data } = await fetchUserRepos(userName, typeRepo, page)

		dispatch({ type: 'SET_LOADING_REPOS', loading: false })

		dispatch({
			type: 'SET_REPOS',
			repos: humps.camelizeKeys(data),
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

export const setSelectedItem = (
	item: IUser | IRepository,
	tabArea = 'repos'
) => {
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
