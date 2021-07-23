import { useRouter } from 'next/router'
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
import { useState } from 'react'
import { Icon, IconName } from '@src/components/Icon'

import { useSelector } from 'react-redux'
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
	const [activeButton, setActiveButton] = useState(0)

	const { tabArea, selectedItem } = useSelector(({ search }: IRootState) => ({
		selectedItem: search.selectedItem,
		tabArea: search.tabArea,
	}))

	const router = useRouter()
	const { userName } = router.query

	console.log(selectedItem)

	return (
		<main className='container-fluid py-2 w-100 min-h-100 d-flex flex-column align-items-center'>
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

			<div className='bg-dark border p-4 rounded shadow-sm'>
				<div className='row '>
					<div className='col-12 d-flex flex-column '>
						<div className='row'>
							<img
								className='rounded col-12 col-md-2 mb-2 img-fluid'
								width={200}
								src={selectedItem.avatarUrl}
								alt=''
							/>
							<div className='col-10 d-flex flex-column justify-content-center'>
								<h3 className='text-white'>{selectedItem.login}</h3>

								<span className='text-white mb-2'>{selectedItem.bio}</span>
								<div className='d-flex '>
									<div className='d-flex align-items-center'>
										<Box className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>22</span>
									</div>

									<div className='d-flex align-items-center ms-3'>
										<Users className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>22</span>
									</div>
									<div className='d-flex align-items-center ms-3'>
										<Following className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>30</span>
									</div>
									<div className='d-flex align-items-center ms-3'>
										<Book className='text-primary' size={22} />
										<span className='fs-5 ms-1 text-primary'>30</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-2 d-flex gap-2'>
					{tabs.map((tab, index) => (
						<button
							key={`tab-${tab.id}`}
							className={`btn btn-outline-primary mt-2 d-flex align-items-center justify-content-center ${
								tab.name === tabArea ? 'active' : ''
							}`}
							onClick={() => setActiveButton(index)}
						>
							<Icon name={tab.icon} className='align-middle' size={20} />
							<span className='ms-1'>{tab.value}</span>{' '}
						</button>
					))}
				</div>

				<div className='row'>
					<div className='col mt-4'>
						<h4 className='text-white'>
							{activeButton === 0 ? 'Repositórios Públicos' : 'Estrelas'}
						</h4>

						<div className='border rounded p-3'>
							<div className='d-flex justify-content-between align-items-center'>
								<h4 className='text-white'>follow-wave</h4>
								<button className='btn btn-primary d-flex align-items-center justify-content-center'>
									<Code className='align-middle' size={20} />
									<span className='ms-1 d-none d-sm-block'>Código</span>{' '}
								</button>
							</div>

							<p className='text-white'>
								An API for Weather Forecasting and Beaches Assessment
							</p>
							<div className='d-flex '>
								<div className='d-flex align-items-center'>
									<Star className='text-primary' size={22} />
									<span className='fs-5 ms-1 text-primary'>22</span>
								</div>

								<div className='d-flex align-items-center ms-3'>
									<Eye className='text-primary' size={22} />
									<span className='fs-5 ms-1 text-primary'>22</span>
								</div>
								<div className='d-flex align-items-center ms-3'>
									<GitPullRequest className='text-primary' size={22} />
									<span className='fs-5 ms-1 text-primary'>30</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

User.auth = true
