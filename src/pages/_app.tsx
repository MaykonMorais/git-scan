import type { AppProps } from 'next/app'

// ** Next Auth
import { Provider } from 'next-auth/client'
import { Provider as StoreProvider } from 'react-redux'

// ** Bootstrap CSS
import '@src/styles/scss/global.scss'

// ** Components
import Head from '@components/Head'

import { NextPage } from 'next'
import DefaultLayout from '@src/components/Layout/Default'
import Auth from '@src/components/Auth'

import { store } from '@src/store/storeConfig/store'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
	auth?: boolean
}

function MyApp(props: AppProps) {
	const {
		Component,
		pageProps,
	}: { Component: NextApplicationPage; pageProps: any } = props

	const keywords = ['git', 'github']
	const url = 'https://gitscan.com'

	return (
		<StoreProvider store={store}>
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
					{(Component.auth as boolean) ? (
						<Auth>
							<Component {...pageProps} />
						</Auth>
					) : (
						<Component {...pageProps} />
					)}
				</DefaultLayout>
			</Provider>
		</StoreProvider>
	)
}

export default MyApp
