import { Search } from 'react-feather'

import CardUser from '@src/components/CardUser'

const filterOptions = [
	{
		id: 1,
		name: 'Usuários',
		checked: true,
		value: 'users',
	},
	{
		id: 2,
		name: 'Repositórios',
		checked: false,
		value: 'repos',
	},
	{
		id: 3,
		name: 'Mais Visitados',
		checked: false,
		value: 'repos',
	},
]

export default function SearchPage() {
	return (
		<main className='p-4 w-100 min-h-100 d-flex flex-column align-items-center'>
			<div className='mt-4 h-25 dW-flex justify-content-center'>
				<img src='logo.svg' alt='Logo' />
			</div>

			<div className='mt-5 w-100 d-flex flex-column align-items-center '>
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

				<div className='mt-3 text-align-center'>
					{filterOptions.map(option => (
						<div key={`radio-${option.id}`} className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='RadioFilter'
								id={`radio-${option.id}`}
								value={option.value}
								checked={option.checked}
							/>
							<label className='form-check-label' htmlFor={`radio-${option.id}`}>
								{option.name}
							</label>
						</div>
					))}
				</div>
				<div className='mt-5 shadow-sm w-100'>
					<div className='overflow-hidden'>
						<div className='row gx-4 gy-4'>
							<div className='col-lg-4 col-md-6 col-12'>
								<CardUser />
							</div>
							<div className='col-lg-4 col-md-6 col-12'>
								<CardUser />
							</div>
							<div className='col-lg-4 col-md-6 col-12'>
								<CardUser />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
