import { Dispatch } from 'redux'

export const searchData = (query: string, entity: string, page: number) => {
	return async (dispatch: Dispatch) => {
		dispatch({ type: 'SET_LOADING', loading: true })

		const payload = {
			searchText: query,
			page,
		}

		if (entity === 'users') {
			dispatch({
				type: 'SEARCH_USERS',
				payload,
			})
		} else {
			dispatch({
				type: 'SEARCH_REPOSITORIES',
				payload,
			})
		}

		dispatch({ type: 'SET_LOADING', loading: false })
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

export const setLoading = (type: string) => {
	return async (dispatch: Dispatch) => {
		dispatch({
			type: 'SET_LOADING',
			typeSearch: type,
		})
	}
}
