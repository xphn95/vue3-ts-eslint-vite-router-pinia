import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [{
	path: '/',
	name: 'Home',
	component: async () => import('~/components/Login.vue')
}, {
	path: '/index',
	name: 'Index',
	component: async () => import('~/components/Index.vue')
}]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
