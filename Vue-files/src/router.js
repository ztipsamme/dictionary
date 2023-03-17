import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import SearchView from './views/SearchView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'HomeView',
      component: HomeView,
      path: '/',
    },
    {
      name: 'SearchView',
      component: SearchView,
      path: '/search/:page',
    },
  ],
})

export default router
