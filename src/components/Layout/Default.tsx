import { ReactNode } from 'react'

interface IDefaultProps {
	children: ReactNode
}

export default function DefaultLayout({ children }: IDefaultProps) {
	return (
		<div className='container-fluid min-vh-100 d-flex flex-column align-items-center'>
			{children}
		</div>
	)
}
