import { IRepository } from '@src/types'
import { Star, Code, Eye, GitPullRequest } from 'react-feather'

interface IRepoDetail {
	repo: IRepository
}

export default function RepoDetail({ repo }: IRepoDetail) {
	return (
		<div className='border rounded p-3 mb-4'>
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
	)
}
