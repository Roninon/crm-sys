import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
