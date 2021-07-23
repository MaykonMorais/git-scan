import { Search } from 'react-feather'

import { useDispatch, useSelector } from 'react-redux'
import { searchData } from '@actions/search'
import { IRootState } from '@src/types'

export default function SearchBar() {
	const dispatch = useDispatch()

	const searchType = useSelector(({ search }: IRootState) => search.typeSearch)

	const onHandleSearch = async event => {
		event.preventDefault()

		dispatch(searchData(event.target.searchText.value, searchType))
	}

	return (
		<div id='custom-search-input'>
			<form onSubmit={onHandleSearch}>
				<div className='input-group col-md-12'>
					<input
						name='searchText'
						type='text'
						className='form-control input-lg'
						placeholder='Faça sua procura por aqui '
					/>
					<span className='input-group-btn'>
						<button type='submit' className='btn btn-info btn-lg'>
							<Search />
						</button>
					</span>
				</div>
			</form>
		</div>
	)
}
