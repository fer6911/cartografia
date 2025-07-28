import { createRouter, createWebHistory } from 'vue-router'
import CartografiaPage from '@/views/CartografiaPage.vue'

const routes = [
  {
    path: '/',
    name: 'cartografia',
    component: CartografiaPage
  },
  {
    path: '/social',
    name: 'mensajes',
    component: () => import('@/components/MensajesPages.vue'),
    props: { selectedValue: 'social' }
  },
  {
    path: '/rios',
    name: 'rios',
    component: () => import('@/views/RiosPage.vue')
  },
  {
    path: '/humedales',
    name: 'humedales',
    component: () => import('@/views/HumedalesPage.vue')
  },
  {
    path: '/podcast',
    name: 'podcast',
    component: () => import('@/views/PodcastPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router