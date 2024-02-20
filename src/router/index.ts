import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import UsersView from "../views/UsersView.vue";
import LoginView from "../views/LoginView.vue";
import ProfileView from "../views/ProfileView.vue";
import HomeView from "@/views/HomeView.vue";
import store from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
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

// router guard
// eslint-disable-next-line
router.beforeEach((to, from) => {
  const isAuthenticated = !!store.state.profile;
  if (!isAuthenticated && to.name !== "login" && to.name !== "home") {
    return { name: "login" };
  }
});

export default router;
