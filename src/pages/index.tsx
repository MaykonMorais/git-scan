import { signIn } from 'next-auth/client'

import Header from '@src/components/Header'
import { GitHub } from 'react-feather'

export default function Home() {
	const handleLogin = async (provider: string) => {
		await signIn(provider, { callbackUrl: `${window.location.origin}/search` })
	}

	return (
		<>
			<Header />

			<main className='container row flex-grow-1 align-items-center p-1'>
				<div className='h-100 d-md-flex flex-col justify-content-center align-items-md-center'>
					<div className='col-12 col-xl-6'>
						<div className='d-flex flex-column justify-content-center'>
							<h1 className='display-2 text-white font-weight-bold'>
								Precisando de <br />
								Ideias?
							</h1>
							<p className='text-white text-start lh-sm font-weight-normal'>
								Aqui você encontra informações de usuários e <br />
								grandes projetos desenvolvidos pela comunidade <br />
								Open Source em todo mundo!
							</p>
							<div className='col-8'>
								<button
									className='btn btn-primary mt-2 d-flex align-items-center justify-content-center'
									onClick={() => handleLogin('github')}
								>
									<GitHub className='align-middle' size={20} />
									<span className='ms-1'>Entrar com o Github</span>{' '}
								</button>
							</div>
						</div>
					</div>

					<div className='d-none d-xl-block blogging '>
						<img className='img-fluid' src='blogging.svg' alt='Blogging' />
					</div>
				</div>
			</main>
		</>
	)
}
