import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
	/* {
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
		path: '/regist/:price/:name/:id',
		name: 'Regist',
		component: async () => import('../components/UserRegist.vue'),
		props: route => ({
			// Id: parseInt(route.params.id as string, 10)
			price: parseFloat(route.params.price as string)
		})
	} */
	/* {
		path: '/',
		// Name: 'Home',
		component: async () => import('../components/footer.vue'),
		children: [
			{
				path: '',
				name: 'Login',
				component: async () => import('../components/UserLogin.vue')
			},
			{
				path: 'regist/:price/:name/:id',
				name: 'Regist',
				component: async () => import('../components/UserRegist.vue'),
				props: route => ({
					price: parseFloat(route.params.price as string)
				})
			}
		]
	} */
	{
		path: '/',
		component: async () => import('../components/PageRoot.vue'),
		// Redirect: 'pagea',
		alias: '/home',
		children: [
			{
				path: 'pagea',
				alias: ['/pageaa', 'list'],
				component: async () => import('../components/PageA.vue')
			},
			{
				path: 'pageb',
				components: {
					pageB: async () => import('../components/PageB.vue'),
					pageC: async () => import('../components/PageC.vue')
				}
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
