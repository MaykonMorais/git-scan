import { Box, Star, Users, UserCheck } from 'react-feather'

export default function CardUser() {
	return (
		<div className='u-card u-card--rounded bg-dark p-4'>
			<div className='p-0 d-flex flex-column'>
				<div className='flex'>
					<img
						className='rounded-circle border border-4 border-primary me-4 mb-1'
						width={120}
						src='https://thispersondoesnotexist.com/image'
						alt=''
					/>
					<span className='fw-bolderer fs-3 text-white text-truncate'>
						Maykon Morais
					</span>
				</div>

				<div className='mt-2 d-flex'>
					<button className='btn btn-primary  mt-2 d-flex align-items-center justify-content-center'>
						<Box className='align-middle' size={20} />
						<span className='ms-1'>Repos</span>{' '}
					</button>
					<button className='btn btn-primary mt-2 d-flex align-items-center justify-content-center ms-2'>
						<Star className='align-middle' size={20} />
						<span className='ms-1'>Starred</span>{' '}
					</button>
				</div>

				<div className='mt-4'>
					<ul className='rounded-sm list-group list-group-flush p-0'>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<Box size={22} />
								<span className='ms-2 fw-bolder text--gray'>Repositórios</span>
							</div>
							<span>15</span>
						</li>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<Star size={22} />
								<span className='ms-2 fw-bolder text--gray'>Estrelas</span>
							</div>
							<span>45</span>
						</li>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<Users size={22} />
								<span className='ms-2 fw-bolder text--gray'>Seguidores</span>
							</div>
							<span>23</span>
						</li>
						<li className='list-group-item bg-dark text-white d-flex justify-content-between'>
							<div className='d-flex align-items-center justify-content-center'>
								<UserCheck size={22} />
								<span className='ms-2 fw-bolder text--gray'>Seguindo</span>
							</div>
							<span>20</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
