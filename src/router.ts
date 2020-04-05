import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Component from '@/views/Component.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/:component',
      component: Component,
      props: true
    }
  ]
})
