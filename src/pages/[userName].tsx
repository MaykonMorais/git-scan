import { useState, useEffect } from 'react'
import { signOut } from 'next-auth/client'

import { useRouter } from 'next/router'

import { LogOut } from 'react-feather'

import { Icon, IconName } from '@src/components/Icon'

import { useSelector, useDispatch } from 'react-redux'
import { fetchRepos, setTabArea } from '@actions/user'

import Pagination from 'react-responsive-pagination'

import { IRootState, IUser } from '@src/types'
import RepoDetail from '@src/components/RepoDetail'
import UserArea from '@src/components/UserArea'

interface ITabButton {
	id: number
	name: string
	value: string
	icon: IconName
}

const tabs: ITabButton[] = [
	{
		id: 0,
		name: 'repos',
		value: 'Repositórios',
		icon: 'Box',
	},
	{
		id: 1,
		name: 'starred',
		value: 'Estrelas',
		icon: 'Star',
	},
]

export default function User() {
	const router = useRouter()
	const [userData, setUserData] = useState<IUser>()

	const [currentPage, setCurrentPage] = useState(1)

	const dispatch = useDispatch()

	const { tabArea, selectedItem, repos } = useSelector(
		({ user }: IRootState) => ({
			selectedItem: user.selectedItem,
			tabArea: user.tabArea,
			repos: user.repos,
		})
	)

	const handleTabChange = (tabArea: string) => {
		dispatch(setTabArea(tabArea))

		const login = userData ? userData.login : selectedItem.login

		dispatch(fetchRepos(login, tabArea, currentPage))
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handlePageChange = (page: number) => {
		setCurrentPage(page)

		const login = userData ? userData.login : selectedItem.login

		dispatch(fetchRepos(login, tabArea, page))
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		const userName = window.location.pathname.slice(1)
		const localUser = JSON.parse(
			window.localStorage.getItem('selectedItem') || ''
		)

		if (selectedItem) {
			dispatch(fetchRepos(selectedItem.login, tabArea))
		}

		if (localUser.login !== userName) {
			router.replace('/error')
		} else {
			setUserData(localUser)
		}
	}, [])

	return (
		<main className='container-fluid py-2 d-flex flex-column align-items-center'>
			<div className='w-100 d-flex justify-content-end align-items-center'>
				<button
					className='btn btn-primary  mt-2 d-flex align-items-center justify-content-center'
					onClick={() => signOut()}
				>
					<LogOut className='align-middle' size={20} />
					<span className='ms-1'>Sair</span>{' '}
				</button>
			</div>

			<div className='my-4 h-25 d-flex justify-content-center'>
				<img src='/logo.svg' alt='Logo' />
			</div>
			{userData && (
				<div className='bg-dark border p-4 rounded shadow-sm col-12 col-sm-10 col-xl-8'>
					<div className='row '>
						<div className='col-12 d-flex flex-column '>
							<UserArea userData={userData} />
						</div>
					</div>

					<div className='mt-2 d-flex gap-2'>
						{tabs.map(tab => (
							<button
								key={`tab-${tab.id}`}
								className={`btn btn-outline-primary mt-2 d-flex align-items-center justify-content-center ${
									tab.name === tabArea ? 'active' : ''
								}`}
								onClick={() => handleTabChange(tab.name)}
							>
								<Icon name={tab.icon} className='align-middle' size={20} />
								<span className='ms-1'>{tab.value}</span>{' '}
							</button>
						))}
					</div>

					<div className='row'>
						<div className='col mt-4'>
							{repos.length > 0 && (
								<h4 className='text-white'>
									{tabArea === 'repos' ? 'Repositórios Públicos' : 'Estrelas'}
								</h4>
							)}

							{repos.map(repo => (
								<RepoDetail key={`repo-${repo.id}`} repo={repo} />
							))}

							<div className='d-flex justify-content-center mt-4'>
								{repos.length > 0 && (
									<Pagination
										total={Math.ceil(userData.publicRepos / 10)}
										current={currentPage}
										maxWidth={200}
										onPageChange={page => handlePageChange(page)}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</main>
	)
}
