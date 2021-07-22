const initialState = {
	data: [],
	typeSearch: 'repos',
}

interface IAction {
	type: string
	data: Object
	typeSearch: string
}

const searchReducer = (state = initialState, action: IAction) => {
	console.log('tipo', action.typeSearch)
	switch (action.type) {
		case 'SET_RESULT_SEARCH':
			return {
				...state,
				data: action.data,
			}
		case 'SET_TYPE_SEARCH':
			return {
				...state,
				typeSearch: action.typeSearch,
			}

		default:
			return { ...state }
	}
}

export default searchReducer
