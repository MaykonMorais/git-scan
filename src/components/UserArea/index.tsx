import { IUser } from '@src/types'

import { Users, User as Following, Box, Book } from 'react-feather'

interface IUserArea {
	userData: IUser
}

export default function UserArea({ userData }: IUserArea) {
	return (
		<div className='row'>
			<img
				className='rounded col-12 col-md-2 mb-2 img-fluid'
				width={200}
				src={userData.avatarUrl}
				alt='Avatar'
			/>
			<div className='col-10 d-flex flex-column justify-content-center'>
				<h3 className='text-white'>{userData.name || userData.login}</h3>

				{userData.bio && <span className='text-white mb-2'>{userData.bio}</span>}

				<div className='d-flex '>
					<div className='d-flex align-items-center'>
						<Box className='text-primary' size={22} />
						<span className='fs-5 ms-1 text-primary'>{userData.publicRepos}</span>
					</div>

					<div className='d-flex align-items-center ms-3'>
						<Users className='text-primary' size={22} />
						<span className='fs-5 ms-1 text-primary'>{userData.followers}</span>
					</div>
					<div className='d-flex align-items-center ms-3'>
						<Following className='text-primary' size={22} />
						<span className='fs-5 ms-1 text-primary'>{userData.following}</span>
					</div>
					<div className='d-flex align-items-center ms-3'>
						<Book className='text-primary' size={22} />
						<span className='fs-5 ms-1 text-primary'>{userData.publicGists}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
