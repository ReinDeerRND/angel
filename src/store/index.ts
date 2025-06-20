import { NewPost, Post } from "@/models/Post";
import { User } from "@/models/User";
import { mock_posts, mock_users } from "@/utils/posts.data";
import axios from "axios";
import { createStore } from "vuex";

interface AppState {
  posts: Post[];
  users: User[];
  profile: User | null;
}
export default createStore<AppState>({
  state: {
    posts: [],
    users: [],
    profile: null,
  },
  getters: {
    getPostById: (state) => (id: number) => {
      return state.posts.find((post) => post.id === id);
    },
    getUserById: (state) => (id: number) => {
      return state.users.find((user) => user.id === id);
    },
  },
  mutations: {
    async fetchPosts(state) {
      const response = await axios
      .get(
        "https://jsonplaceholder.typicode.com/posts"
      )
      .catch((error)=>{
        return {data: mock_posts}
      });
      const chosenPosts: Post[] = response.data.filter(
        (_: Post, index: number) => index % 3 === 0
      );
      state.posts.push(...chosenPosts);
    },
    addNewPost(state, payload: NewPost) {
      const id = state.posts[state.posts.length - 1].id + 1;
      const addedPost: Post = {
        ...payload,
        id,
        userId: 4,
      };
      state.posts = [...state.posts, addedPost];
    },
    async getUsers(state) {
      const response = await axios
      .get(
        "https://jsonplaceholder.typicode.com/users"
      )
      .catch((error)=>{
        return {data: mock_users}
      });
      state.users.push(...response.data);
    },
  },
  actions: {
    setPosts({ commit }) {
      commit("fetchPosts");
    },
    setUsers({ commit }) {
      commit("getUsers");
    },
    setUserProfile({ state }, userId: number) {
      const user = state.users.find((u) => u.id === userId);
      if (user) {
        state.profile = { ...user };
      }
    },
    addNewUser({ state }, user: User) {
      state.users.push(user);
    },
  },
  // strict: true,
  // modules: {
  // },
});
