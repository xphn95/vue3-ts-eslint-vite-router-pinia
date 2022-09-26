const {defineConfig} = require('eslint-define-config')

module.exports = defineConfig({
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'xo',
		'plugin:jsonc/recommended-with-jsonc',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				'@typescript-eslint/semi': [2, 'never'],
				'@typescript-eslint/comma-dangle': [2, 'never'],
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		semi: [2, 'never'],
		'no-multiple-empty-lines': [2, {
			max: 1,
			maxBOF: 0,
			maxEOF: 0,
		}],
		'@typescript-eslint/semi': [2, 'never'],
	},
})
