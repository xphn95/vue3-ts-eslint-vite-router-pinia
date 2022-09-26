import '@unocss/reset/tailwind.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router/index.js'
import 'element-plus/dist/index.css'
import 'animate.css'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
