import { ISearchState } from '@src/types'

const initialState = {
	data: [],
	typeSearch: 'users',
	loading: false,
	totalCount: 0,
	query: '',
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

		case 'SET_SELECTED_ITEM':
			return {
				...state,
				selectedItem: action.selectedItem,
				tabArea: action.tabArea,
			}

		case 'SET_TAB_AREA':
			return {
				...state,
				tabArea: action.tabArea,
			}

		case 'SET_REPOS':
			return {
				...state,
				repos: action.repos,
			}

		default:
			return { ...state }
	}
}

export default searchReducer
