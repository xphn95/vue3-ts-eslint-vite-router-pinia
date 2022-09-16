import '@unocss/reset/tailwind.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router/index.js'

const whiteList = ['/']

router.beforeEach(to => {
	if (whiteList.includes(to.path) || localStorage.getItem('token')) {
		return undefined
	}

	return {
		path: '/'
	}
})

createApp(App).use(router).mount('#app')
