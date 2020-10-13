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
					component: () => import('@/views/index/Index.vue')
				},
				{
					path: '/sprite',
					component: () => import('@/views/sprite/Index.vue')
				},
				{
					path: '/echart',
					component: () => import('@/views/echart/Echart.vue')
				}
			]
		}
	]
})

export default router
