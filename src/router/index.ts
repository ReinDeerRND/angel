import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PostsView from '../views/PostsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PostsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddPostView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
