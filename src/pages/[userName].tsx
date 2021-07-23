import { useState, useEffect } from 'react'
import { signOut } from 'next-auth/client'

import {
	LogOut,
	Users,
	User as Following,
	Box,
	Book,
	Code,
	Star,
	GitPullRequest,
	Eye,
} from 'react-feather'

import { Icon, IconName } from '@src/components/Icon'

import { useSelector, useDispatch } from 'react-redux'
import { fetchRepos, setTabArea } from '@actions/user'

import Pagination from 'react-responsive-pagination'

import { IRootState } from '@src/types'

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
	const [currentPage, setCurrentPage] = useState(1)

	const dispatch = useDispatch()

	const { tabArea, selectedItem, repos } = useSelector(
		({ user }: IRootState) => ({
			selectedItem: user.selectedItem,
			tabArea: user.tabArea,
			repos: user.repos,
		})
	)

	// const router = useRouter()

	const handleTabChange = (tabArea: string) => {
		dispatch(setTabArea(tabArea))

		dispatch(fetchRepos(selectedItem.login, tabArea, currentPage))
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	const handlePageChange = (page: number) => {
		setCurrentPage(page)

		dispatch(fetchRepos(selectedItem.login, tabArea, page))
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	useEffect(() => {
		if (selectedItem) {
			dispatch(fetchRepos(selectedItem.login, tabArea, currentPage))
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

			<div className='bg-dark border p-4 rounded shadow-sm col-12 col-sm-10 col-xl-8'>
				<div className='row '>
					<div className='col-12 d-flex flex-column '>
						<div className='row'>
							<img
								className='rounded col-12 col-md-2 mb-2 img-fluid'
								width={200}
								src={selectedItem.avatarUrl}
								alt='Avatar'
							/>
							<div className='col-10 d-flex flex-column justify-content-center'>
								<h3 className='text-white'>
									{selectedItem.name || selectedItem.login}
								</h3>

								{selectedItem.bio && (
									<span className='text-white mb-2'>{selectedItem.bio}</span>
								)}

								<div className='d-flex '>
									<div className='d-flex align-items-center'>
										<Box className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>
											{selectedItem.publicRepos}
										</span>
									</div>

									<div className='d-flex align-items-center ms-3'>
										<Users className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>
											{selectedItem.followers}
										</span>
									</div>
									<div className='d-flex align-items-center ms-3'>
										<Following className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>
											{selectedItem.following}
										</span>
									</div>
									<div className='d-flex align-items-center ms-3'>
										<Book className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>
											{selectedItem.publicGists}
										</span>
									</div>
								</div>
							</div>
						</div>
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
						<h4 className='text-white'>
							{tabArea === 'repos' ? 'Repositórios Públicos' : 'Estrelas'}
						</h4>

						{repos.map(repo => (
							<div key={`repo-${repo.id}`} className='border rounded p-3 mb-4'>
								<div className='d-flex justify-content-between align-items-center'>
									<h4 className='text-white'>{repo.name}</h4>
									<a
										target='_blank'
										href={`https://github1s.com/${repo.fullName}`}
										className='btn btn-primary d-flex align-items-center justify-content-center'
										rel='noreferrer'
									>
										<Code className='align-middle' size={20} />
										<span className='ms-1 d-none d-sm-block'>Código</span>{' '}
									</a>
								</div>

								<p className='text-white'>{repo.description} </p>
								<div className='d-flex '>
									<div className='d-flex align-items-center'>
										<Star className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>{repo.stargazersCount}</span>
									</div>

									<div className='d-flex align-items-center ms-3'>
										<Eye className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>{repo.watchers}</span>
									</div>
									<div className='d-flex align-items-center ms-3'>
										<GitPullRequest className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>{repo.forks}</span>
									</div>
								</div>
							</div>
						))}

						<div className='d-flex justify-content-center mt-4'>
							{selectedItem.publicRepos > 0 && (
								<Pagination
									total={Math.ceil(selectedItem.publicRepos / 10)}
									current={currentPage}
									maxWidth={200}
									onPageChange={page => handlePageChange(page)}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

User.auth = true
