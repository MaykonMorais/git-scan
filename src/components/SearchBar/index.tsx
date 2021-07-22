import { Search } from 'react-feather'

export default function SearchBar() {
	return (
		<div id='custom-search-input'>
			<div className='input-group col-md-12'>
				<input
					type='text'
					className='form-control input-lg'
					placeholder='Faça sua procura por aqui '
				/>
				<span className='input-group-btn'>
					<button className='btn btn-info btn-lg' type='button'>
						<Search />
					</button>
				</span>
			</div>
		</div>
	)
}
