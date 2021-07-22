import Header from '@src/components/Header'
import { GitHub } from 'react-feather'

export default function Home() {
	return (
		<>
			<Header />

			<main className='container p-1 row flex-grow-1 align-items-md-center'>
				<div className='h-100 d-md-flex flex-col justify-content-center justify-md-content-between align-items-md-center'>
					<div className='d-flex  col-12 col-md-6 flex-column justify-content-center'>
						<h1 className='display-2 text-white font-weight-bold'>
							Precisando de <br />
							Ideias?
						</h1>
						<p className='text-white text-start lh-sm font-weight-normal'>
							Aqui você encontra informações de usuários e <br />
							grandes projetos desenvolvidos pela comunidade <br />
							Open Source em todo mundo!
						</p>
						<button className='btn btn-primary w-50 mt-2 d-flex align-items-center justify-content-center'>
							<GitHub className='align-middle' size={20} />
							<span className='ms-1'>Entrar com o Github</span>{' '}
						</button>
					</div>

					<div className='d-none d-md-block blogging '>
						<img className='img-fluid' src='blogging.svg' alt='Blogging' />
					</div>
				</div>
			</main>
		</>
	)
}
