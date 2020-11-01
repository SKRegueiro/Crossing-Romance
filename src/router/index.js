import { createRouter, createWebHistory } from '@ionic/vue-router';
// import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes = [
  {
    path: '/',
    redirect: '/tabs/cards'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/cards'
      },
      {
        path: 'cards',
        component: () => import('@/views/CardTab.vue')
      },
      {
        path: 'chat',
        component: () => import('@/views/ChatTab.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/ProfileTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history'
})

export default router
