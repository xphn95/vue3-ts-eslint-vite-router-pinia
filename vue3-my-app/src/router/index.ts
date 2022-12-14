import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { render } from 'vue'
import loadingBar from '~/components/LoadingBar.vue'

interface LoadingBarExposed {
	startLoading: () => void;
	endLoading: () => void;
}

const routes: RouteRecordRaw[] = [{
	path: '/',
	name: 'Home',
	component: async () => import('~/components/Login.vue'),
	meta: {
		title: '登录页面',
		transition: 'animate__rubberBand'
	}
}, {
	path: '/index',
	name: 'Index',
	component: async () => import('~/components/Index.vue'),
	meta: {
		title: '首页',
		transition: 'animate__swing'
	},
	beforeEnter(to, from) {
		if (from.name === undefined) {
			return {
				path: '/'
			}
		}
	}
}]

const whiteList = ['/']

const router = createRouter({
	history: createWebHistory(),
	routes,
	async scrollBehavior() {
		/* if (savedPosition) {
			return savedPosition
		}

		return {
			el: '#message',
			top: 0
		} */
		return new Promise(r => {
			setTimeout(() => {
				r({
					top: 10000
				})
			}, 500)
		})
	}
})

// 加载条组件
const loadingBarCom = h(loadingBar)
render(loadingBarCom, document.body)

router.beforeEach((to, from) => {
	document.title = to.meta.title
	if (to.path === '/index' && from.name !== undefined) {
		(loadingBarCom.component?.exposed as LoadingBarExposed).startLoading()
	}

	if (whiteList.includes(to.path) || localStorage.getItem('token')) {
		return true
	}

	return {
		path: '/'
	}
})

router.afterEach((to, from) => {
	if (to.path === '/index' && from.name !== undefined) {
		(loadingBarCom.component?.exposed as LoadingBarExposed).endLoading()
	}
})

export default router
