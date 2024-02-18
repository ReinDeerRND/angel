import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PostsView from '../views/PostsView.vue';
import LoginView from '../views/LoginView.vue';
import ProfileView from '../views/ProfileView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/post',
    name: 'post',
    component: PostsView,
  },
  {
    path: "/login",
    name: 'login',
    component: LoginView
  },
  {
    path: "/profile",
    name: 'profile',
    component: ProfileView
  },
  // {
  //   path: '/add',
  //   name: 'add',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AddPostView.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
