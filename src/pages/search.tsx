import { LogOut } from 'react-feather'

import CardUser from '@components/CardUser'
import SearchBar from '@components/SearchBar'

import { signOut } from 'next-auth/client'
import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { setTypeSearch } from '@actions/search'

const filterOptions = [
	{
		id: 1,
		name: 'Usuários',
		value: 'users',
	},
	{
		id: 2,
		name: 'Repositórios',
		value: 'repos',
	},
	{
		id: 3,
		name: 'Mais Visitados',
		value: 'repos',
	},
]

export default function SearchPage() {
	const dispatch = useDispatch()
	const [checkedValue, setIsChecked] = useState(1)

	const handleCheckedValue = (id: number) => {
		setIsChecked(id)

		const optionType = filterOptions.filter(option => option.id === id)[0].value
		dispatch(setTypeSearch(optionType))
	}

	return (
		<main className='py-2 px-4 w-100 min-h-100 d-flex flex-column align-items-center'>
			<div className='w-100 d-flex justify-content-end align-items-center'>
				<button
					className='btn btn-primary  mt-2 d-flex align-items-center justify-content-center'
					onClick={() => signOut()}
				>
					<LogOut className='align-middle' size={20} />
					<span className='ms-1'>Sair</span>{' '}
				</button>
			</div>
			<div className='mt-4 h-25 dW-flex justify-content-center'>
				<img src='logo.svg' alt='Logo' />
			</div>

			<div className='mt-5 w-100 d-flex flex-column align-items-center '>
				<SearchBar />
				<div className='mt-3 text-align-center'>
					{filterOptions.map(option => (
						<div key={`radio-${option.id}`} className='form-check form-check-inline'>
							<input
								className='form-check-input'
								type='radio'
								name='RadioFilter'
								id={`radio-${option.id}`}
								value={option.value}
								checked={checkedValue === option.id}
								onChange={() => handleCheckedValue(option.id)}
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

SearchPage.auth = true
