import '../styles/globals.css'
import type { AppProps } from 'next/app'

// ** Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'

// ** Components
import Head from '@components/Head'

function MyApp({ Component, pageProps }: AppProps) {
	const keywords = ['git', 'github']
	const url = 'https://gitscan.com'

	return (
		<>
			<Head keywords={keywords} url={url}>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<Component {...pageProps} />
		</>
	)
}

export default MyApp
