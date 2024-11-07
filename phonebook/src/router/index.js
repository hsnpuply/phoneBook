import { createRouter, createWebHistory } from 'vue-router'
import addContact from '../views/addContact.vue'
import home from '../views/home/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/add',
      name: 'add',
      component: addContact,
    },
  ],
})

export default router
