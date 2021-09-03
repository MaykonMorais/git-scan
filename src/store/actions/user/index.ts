import { Dispatch } from 'redux'
import { IRepository, IUser } from '@src/types'

export function fetchRepos(userName: string, typeRepo: string, page = 1) {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'SET_LOADING_REPOS', loading: true })

		const payload = {
			userName,
			typeRepo,
			page,
		}

		dispatch({
			type: 'GET_USER_REPOS',
			payload,
		})

		dispatch({ type: 'SET_LOADING_REPOS', loading: false })
	}
}

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
