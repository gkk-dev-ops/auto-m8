import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/settings',
      name: 'about',
      component: () => import('../views/SettingsView.vue')
    }
  ]
})

export default router
