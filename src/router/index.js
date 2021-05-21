import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Error404 from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    title: 'Home - Cswala',
  },
  {
    path: '/explore/:itemId',
    props: true,
    name: 'DetailPage',
    component: () => import('../views/DetailPage.vue')
  },
  {
    path: '/explore/',
    name: 'ExplorePage',
    component: () => import('../views/ExplorePage.vue')
  },
  {
    path: '/team/',
    name: 'Team',
    component: () => import('../views/Team.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    component: Error404
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
