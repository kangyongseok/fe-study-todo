module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['airbnb', 'prettier'],
	overrides: [
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-param-reassign': false,
		quotes: ['error', 'single'],
		'no-unused-vars': ['warn'],
		'prettier/prettier': [
			'error',
			{
				'singleQuote': true,
				'parser': 'flow',
				'endOfLine': 'auto',
			}
		]
	},
};
