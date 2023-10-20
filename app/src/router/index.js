// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Login.vue'),
    children: [
      {
        path:'',
        component: () => import('@/views/Login.vue'),
      }
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
