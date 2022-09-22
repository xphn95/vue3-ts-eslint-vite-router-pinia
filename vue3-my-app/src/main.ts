import '@unocss/reset/tailwind.css'
import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router/index.js'
import 'element-plus/dist/index.css'
import 'animate.css'

createApp(App).use(router).mount('#app')
