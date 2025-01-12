import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Pages/HomeView.vue'),
    },
    {
      path: '/admin/login',
      component: () => import('@/views/Auth/LoginView.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('@/views/Pages/Dashboard.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('@/views/Error/ErrorPage.vue'),
    },
  ],
})

export default router
