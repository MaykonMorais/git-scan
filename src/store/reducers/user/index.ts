import { IUserState } from '@src/types'

const initialState = {
	loading: false,
	totalCount: 0,
	selectedItem: null,
	tabArea: 'repos',
	repos: [],
}

interface IAction extends IUserState {
	type: string
}

const userReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case 'SET_LOADING_REPOS':
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

export default userReducer
