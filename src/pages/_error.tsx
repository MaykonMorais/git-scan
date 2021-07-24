import { useRouter } from 'next/router'

function Error() {
	const router = useRouter()

	return (
		<main className='container row flex-grow-1 align-items-center p-1'>
			<div className='h-100 d-flex-column justify-content-center align-items-center w-100'>
				<div className='d-flex flex-column align-items-center'>
					<img src='/logo.svg' width={400} alt='' />
					<h4 className='text-white mt-4'>
						Ops! Operação não permitida no momento.
					</h4>

					<button
						className='btn btn-outline-primary mt-4'
						onClick={() => router.replace('search')}
					>
						Voltar para Procura
					</button>
				</div>
			</div>
		</main>
	)
}

export default Error
