import Header from '@src/components/Header'

export default function Home() {
	return (
		<>
			<Header />

			<main className='container p-1 row flex-grow-1 align-items-center'>
				<div className='h-100 d-md-flex flex-col justify-content-center justify-md-content-between align-items-md-center'>
					<div className='d-flex  col-12 col-md-6 flex-column justify-content-center'>
						<h1 className='display-1 text-white font-weight-bold'>
							Precisando de <br />
							Ideias?
						</h1>
						<p className='text-white font-weight-normal'>
							Aqui você encontra informações de usuários e <br />
							grandes projetos desenvolvidos pela comunidade <br />
							Open Source em todo mundo!
						</p>
						<button className='btn btn-primary w-50 mt-2'>Entrar com o Github</button>
					</div>

					<div className='blogging mt-10'>
						<img className='img-fluid' src='blogging.svg' alt='Blogging' />
					</div>
				</div>
			</main>
		</>
	)
}
