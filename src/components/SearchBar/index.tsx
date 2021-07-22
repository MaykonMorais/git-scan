import { Search } from 'react-feather'

import { useDispatch } from 'react-redux'
import { searchData } from '@actions/search'

export default function SearchBar() {
	const dispatch = useDispatch()

	const onHandleSearch = async event => {
		event.preventDefault()
		console.log(event.target.searchText.value)

		dispatch(searchData(event.target.searchText.value))
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
