import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import component from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import path from 'node:path'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			reactivityTransform: true
		}),
		autoImport({
			imports: [
				'vue',
				'vue-router',
				'vue/macros',
				{
					'element-plus': [
						'ElMessage'
					]
				}
			],
			dts: path.resolve(pathSrc, 'typings', 'auto-imports.d.ts'),
			eslintrc: {
				enabled: true,
				filepath: './auto-imports.d.ts',
				globalsPropValue: true
			},
			resolvers: [ElementPlusResolver({
				importStyle: 'css'
			})]
		}),
		component({
			dts: path.resolve(pathSrc, 'typings', 'components.d.ts'),
			resolvers: [ElementPlusResolver()]
		}),
		Unocss({
			mode: 'vue-scoped'
		})
	],
	resolve: {
		alias: {
			// eslint-disable-next-line @typescript-eslint/naming-convention
			'~': path.resolve(__dirname, './src')
		},
		extensions: ['js', 'ts', 'jsx', 'tsx']
	}
})
