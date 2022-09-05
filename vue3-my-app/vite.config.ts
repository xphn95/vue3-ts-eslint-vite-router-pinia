import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoImport from 'unplugin-auto-import/vite'
import component from 'unplugin-vue-components/vite'

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
			}
		}),
		component({
			dts: true
		})
	]
})
