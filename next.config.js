const path = require('path');
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.resolve(__dirname, 'styles')],
	},
	redirects() {
		return [
			{
				source: '/',
				destination: '/dashboard',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
