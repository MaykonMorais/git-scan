import { Eye, Star, Users, Code, User } from 'react-feather'

import { IRepository } from '@src/types'

interface ICardRepo {
	props: IRepository
}

export default function CardRepo({ props }: ICardRepo) {
	return (
		<div className='u-card u-card--rounded bg-dark p-4'>
			<div className='p-0 d-flex flex-column'>
				<div className='flex'>
					<img
						className='rounded-circle border border-4 border-primary me-4 mb-1'
						width={120}
						src={props.owner.avatarUrl}
						alt=''
					/>
					<span className='fw-bolderer fs-3 text-white text-truncate'>
						{props.name}
					</span>
				</div>

				<div className='mt-2 d-flex'>
					<button className='btn btn-outline-primary  mt-2 d-flex align-items-center justify-content-center'>
						<Code className='align-middle' size={20} />
						<span className='ms-1 d-none d-sm-block'>Código</span>{' '}
					</button>
					<button className='btn btn-outline-primary mt-2 d-flex align-items-center justify-content-center ms-2'>
						<User className='align-middle' size={20} />
						<span className='ms-1 d-none d-sm-block'>Usuário</span>{' '}
					</button>
				</div>

				<div className='mt-4'>
					<ul className='rounded-sm list-group list-group-flush p-0'>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<Star size={22} />
								<span className='ms-2 fw-bolder text--gray'>Estrelas</span>
							</div>
							<span>{props.stargazersCount}</span>
						</li>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<Eye size={22} />
								<span className='ms-2 fw-bolder text--gray'>Watchers</span>
							</div>
							<span>{props.watchers}</span>
						</li>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<Users size={22} />
								<span className='ms-2 fw-bolder text--gray'>Forks</span>
							</div>
							<span>{props.forks}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
