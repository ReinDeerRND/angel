import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UsersView from "../views/UsersView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/post",
    name: "post",
    component: () =>
      import(/* webpackChunkName: "post" */ "../views/PostsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
