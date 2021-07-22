import type { AppProps } from 'next/app'

// ** Next Auth
import { Provider } from 'next-auth/client'

// ** Bootstrap CSS
import '@src/styles/scss/global.scss'

// ** Components
import Head from '@components/Head'

import DefaultLayout from '@src/components/Layout/Default'
import Auth from '@src/components/Auth'

function MyApp({ Component, pageProps }: AppProps) {
	const keywords = ['git', 'github']
	const url = 'https://gitscan.com'

	return (
		<Provider session={pageProps.session}>
			<Head keywords={keywords} url={url}>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700;800&family=Montserrat:wght@300&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<DefaultLayout>
				{Component.auth ? (
					<Auth>
						<Component {...pageProps} />
					</Auth>
				) : (
					<Component {...pageProps} />
				)}
			</DefaultLayout>
		</Provider>
	)
}

export default MyApp
