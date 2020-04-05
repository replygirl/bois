import { createRouter, createWebHistory} from 'vue-router'
import {
  Home,
  Button,
  Nav
} from '@/views'

import type { RouteRecord } from 'vue-router'

const componentRoutes = (routes: RouteRecord[]): RouteRecord[] =>
  routes.map((r: RouteRecord): RouteRecord => ({
    ...r,
    path: `/components/${r.path}`
  }))

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    ...componentRoutes([
      {
        path: 'button',
        component: Button
      },
      {
        path: 'nav',
        component: Nav
      }
    ])
  ]
})
