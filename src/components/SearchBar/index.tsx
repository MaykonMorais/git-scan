import { Search } from 'react-feather'

import { useDispatch, useSelector } from 'react-redux'
import { searchData } from '@actions/search'
import { IRootState } from '@src/types'
import { useState } from 'react'

export default function SearchBar() {
	const dispatch = useDispatch()
	const [defaultCurrentPage] = useState(1)

	const searchType = useSelector(({ search }: IRootState) => search.typeSearch)

	const onHandleSearch = async event => {
		event.preventDefault()

		dispatch(
			searchData(event.target.searchText.value, searchType, defaultCurrentPage)
		)
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
