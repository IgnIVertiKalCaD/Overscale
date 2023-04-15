import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    // children
    component: () => import('../views/MainView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    // children
    component: () => import ('../views/admin/AdminView.vue')

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
