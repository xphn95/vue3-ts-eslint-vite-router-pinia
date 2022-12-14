const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	globals: {
		ElMessage: true
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'xo',
		'plugin:jsonc/recommended-with-jsonc',
		'plugin:markdown/recommended',
		'./.eslintrc-auto-import.json'
	],
	overrides: [
		{
			files: [
				'*.ts',
				'*.tsx'
			],
			extends: [
				'xo-typescript'
			],
			rules: {
				semi: 0,
				'@typescript-eslint/semi': [2, 'never'],
				'object-curly-spacing': 0,
				'@typescript-eslint/object-curly-spacing': [2, 'always'],
				'@typescript-eslint/triple-slash-reference': 0,
				'@typescript-eslint/comma-dangle': [2, 'never'],
				'no-unused-vars': 0,
				'@typescript-eslint/no-unused-vars': [2, {
					argsIgnorePattern: '^_'
				}],
				'new-cap': [2, {
					capIsNewExceptions: ['ElementPlusResolver', 'ViteAliases', 'Unocss']
				}],
				'@typescript-eslint/consistent-type-definitions': 0
			}
		},
		{
			files: [
				'*.vue'
			],
			parser: 'vue-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser'
			},
			rules: {
				// 允许 props 解构
				'vue/no-setup-props-destructure': 0,
				// 组件必须多个词组成
				'vue/multi-word-component-names': [2, {
					ignores: [
						'Footer',
						'Login',
						'Index',
						'Demo1',
						'Demo2',
						'Demo3',
						'404'
					]
				}],
				// 对象内的空格
				'vue/object-curly-spacing': [2, 'always']
			}
		}
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
		createDefaultProgram: true
	},
	plugins: [
		'vue',
		'html'
	],
	rules: {
		semi: [2, 'never'],
		'no-multiple-empty-lines': [2, {
			max: 1,
			maxBOF: 0,
			maxEOF: 0
		}],
		'object-curly-spacing': [2, 'always'],
		'space-before-function-paren': [2, 'always'],
		'comma-dangle': [2, 'never'],
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-unused-vars': [2, {
			argsIgnorePattern: '^_'
		}],
		'jsonc/comma-dangle': [2, 'never'],
		'capitalized-comments': 0
	},
	ignorePatterns: [
		'*.d.ts'
	]
})
