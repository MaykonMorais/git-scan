import { Instagram, Twitter, Youtube } from 'react-feather'

export default function Header() {
	return (
		<head
			className='container d-flex align-items-center justify-content-between'
			style={{ height: '70px' }}
		>
			<img className='img-fluid h-75' src='logo.svg' alt='Git Scan Logo' />

			<div className='d-flex'>
				<div className='rounded-circle align-items-center cursor'>
					<Instagram className='text-white' size={26} />
				</div>
				<div className='rounded-circle align-items-center ms-3 cursor'>
					<Twitter className='text-white' size={26} />
				</div>
				<div className='rounded-circle align-items-center ms-3 cursor'>
					<Youtube className='text-white' size={26} />
				</div>
			</div>
		</head>
	)
}
