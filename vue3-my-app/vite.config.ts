import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import component from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'
import path from 'path'

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
				'vue/macros'
			],
			dts: 'src/auto-imports.d.ts',
			eslintrc: {
				enabled: true,
				filepath: './auto-imports.d.ts',
				globalsPropValue: true
			},
			resolvers: [ElementPlusResolver()]
		}),
		component({
			dts: true,
			resolvers: [ElementPlusResolver()]
		}),
		Unocss({
			mode: 'vue-scoped',
			presets: [
				presetAttributify(),
				presetUno()
			]
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
