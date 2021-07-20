import Document, {
	Html,
	Head,
	NextScript,
	DocumentContext,
	Main,
} from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialsProps = await Document.getInitialProps(ctx)
		return initialsProps
	}

	render() {
		return (
			<Html lang='pt-BR'>
				<Head />

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
