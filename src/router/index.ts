import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'DSB - Dashboard',
        metaTags: [
          {
            name: 'description',
            content: 'A dashboard for quick viewing data set across federal units.'
          }
        ]
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'DSB - About',
        metaTags: [
          {
            name: 'About us',
            content: 'Digitizing Fed Govt'
          }
        ]
      }
    }
  ]
})

export default router
