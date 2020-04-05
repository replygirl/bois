import { createRouter, createWebHistory} from 'vue-router'
import {
  Home,
  Button,
  NavHeader
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
        name: 'Button',
        path: 'button',
        component: Button
      },
      {
        name: 'NavHeader',
        path: 'nav-header',
        component: NavHeader
      }
    ])
  ]
})
