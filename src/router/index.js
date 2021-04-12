// @ts-check
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 *
 *
 * @type { import ("vue-router").RouteConfig[] }
 *
 *
 *
 */
const routes = [
	{
		path: '/',
		redirect: '/dashboard'
	},
	{
		path: '/login',
		component: () => import('@/views/login/Login.vue')
	},
	{
		path: '/dashboard',
		component: () => import('@/views/layout/Layout.vue'),
		children: [
			{
				path: '',
				component: () => import('@/views/Employee/Index.vue')
			},
			{
				path: '/departments',
				component: () => import('@/views/Department/Index.vue')
			},
			{
				path: '/sprite',
				component: () => import('@/views/sprite/Index.vue')
			},
			{
				path: '/echart',
				component: () => import('@/views/echart/Echart.vue')
			},
			{
				path: '/jobs',
				component: () => import('@/views/Jobs/Index.vue')
			}
		]
	}
]
const router = new VueRouter({
	routes
})

export default router
