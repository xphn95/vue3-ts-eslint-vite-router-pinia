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

const whiteList = ['/']

const router = createRouter({
	history: createWebHistory(),
	routes
})

router.beforeEach(to => {
	if (whiteList.includes(to.path) || localStorage.getItem('token')) {
		return true
	}

	return {
		path: '/'
	}
})

/* Router.afterEach((to, from) => {

}) */

export default router
