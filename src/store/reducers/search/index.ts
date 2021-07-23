import { IUser, ISearchState } from '@src/types'

const initialState = {
	data: [],
	typeSearch: 'users',
	loading: false,
	totalCount: 0,
}

interface IAction extends ISearchState {
	type: string
}

const searchReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET_RESULT_SEARCH':
			return {
				...state,
				data: action.data,
				totalCount: action.totalCount,
				query: action.query,
			}
		case 'SET_TYPE_SEARCH':
			return {
				...state,
				typeSearch: action.typeSearch,
			}
		case 'SET_LOADING':
			return {
				...state,
				loading: action.loading,
			}

		default:
			return { ...state }
	}
}

export default searchReducer
