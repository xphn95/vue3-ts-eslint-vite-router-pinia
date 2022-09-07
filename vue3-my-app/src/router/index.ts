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
		// Path: '/regist',
		path: '/regist/id/:id/name/:name/price/:price',
		name: 'Regist',
		component: async () => import('../components/UserRegist.vue'),
		props: true
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
