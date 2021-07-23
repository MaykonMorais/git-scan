import { LogOut } from 'react-feather'

import CardUser from '@components/CardUser'
import SearchBar from '@components/SearchBar'

import { signOut } from 'next-auth/client'
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setTypeSearch, searchData } from '@actions/search'

import { IRootState, IUser } from '@src/types'
import CardRepo from '@src/components/CardRepo'

import Pagination from 'react-responsive-pagination'

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
	const [currentPage, setCurrentPage] = useState(1)

	const dispatch = useDispatch()
	const [checkedValue, setIsChecked] = useState(1)

	const { loading, data, totalCount, query, typeSearch } = useSelector(
		({ search }: IRootState) => ({
			loading: search.loading,
			data: search.data,
			totalCount: search.totalCount,
			query: search.query,
			typeSearch: search.typeSearch,
		})
	)

	function handlePageChange(page: number) {
		setCurrentPage(page)

		dispatch(searchData(query, typeSearch, page))
	}

	const handleCheckedValue = (id: number) => {
		setIsChecked(id)

		const optionType = filterOptions.filter(option => option.id === id)[0].value
		dispatch(setTypeSearch(optionType))
	}

	function isInstanceOfUser(object: any): object is IUser {
		return 'avatarUrl' in object
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
							{loading && (
								<div className='d-flex justify-content-center'>
									<div className='spinner-border m-5 ' role='status'></div>
								</div>
							)}

							{data &&
								data.map(item => (
									<div key={item.id} className='col-lg-4 col-md-6 col-12'>
										{isInstanceOfUser(item) ? (
											<CardUser props={item} />
										) : (
											<CardRepo props={item} />
										)}
									</div>
								))}
						</div>
					</div>
					<div className='d-flex justify-content-center mt-4'>
						{data.length > 0 && (
							<Pagination
								total={totalCount}
								current={currentPage}
								maxWidth={500}
								onPageChange={page => handlePageChange(page)}
							/>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}

SearchPage.auth = true
