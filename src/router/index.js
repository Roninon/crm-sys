import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('@/views/app-home')
  },
  {
    path: '/login',
    name: 'app-login',
    meta: {layout: 'empty'},
    component: () => import('@/views/app-login.vue')
  },
  {
    path: '/categories',
    name: 'app-categories',
    meta: {layout: 'main'},
    component: () => import('@/views/app-categories.vue')
  },
  {
    path: '/register',
    name: 'app-register',
    meta: {layout: 'empty'},
    component: () => import('@/views/app-register.vue')
  },
  {
    path: '/detail-record',
    name: 'app-detail-record',
    meta: {layout: 'main'},
    component: () => import('@/views/app-detail-record.vue')
  },
  {
    path: '/history',
    name: 'app-history',
    meta: {layout: 'main'},
    component: () => import('@/views/app-history.vue')
  },
  {
    path: '/planning',
    name: 'app-planning',
    meta: {layout: 'main'},
    component: () => import('@/views/app-planning.vue')
  },
  {
    path: '/profile',
    name: 'app-profile',
    meta: {layout: 'main'},
    component: () => import('@/views/app-profile.vue')
  },
  {
    path: '/record',
    name: 'app-record',
    meta: {layout: 'main'},
    component: () => import('@/views/app-record.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
