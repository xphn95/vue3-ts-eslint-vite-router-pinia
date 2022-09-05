import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: async () => import('../components/HelloWorld.vue')
	},
	{
		path: '/login',
		name: 'Login',
		component: async () => import('../components/UserLogin.vue')
	},
	{
		path: '/regist',
		name: 'Regist',
		component: async () => import('../components/UserRegist.vue')
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
