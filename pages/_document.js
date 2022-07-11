import Document, { Head, Html, NextScript, Main } from 'next/document';

export default class MyDocx extends Document {
	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
