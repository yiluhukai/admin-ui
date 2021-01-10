import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [
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
})

export default router
