// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

const aliasMapping = {
	'@styles': (filename) => path.resolve(__dirname, `styles/${filename}`),
}

const paths = ['styles']

module.exports = {
	plugins: [
		'postcss-flexbugs-fixes',
		[
			'postcss-preset-env',
			{
				autoprefixer: {
					flexbox: 'no-2009',
				},
				stage: 3,
				features: {
					'custom-properties': false,
				},
			},
		],
		[
			'postcss-import',
			{
				root: path.resolve(__dirname, './'),
				path: paths,
				skipDuplicates: true,
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
				resolve: (id, basedir, importOptions) => {
					const [aliasName, filename] = id.split('/')
					return aliasMapping[aliasName](filename)
				},
			},
		],
	],
}
