import { NewPost, Post } from "@/models/Post";
import { User } from "@/models/User";
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
    getTodoById: (state) => (id: number) => {
      return state.posts.find((todo) => todo.id === id);
    },
  },
  mutations: {
    fetchPosts(state) {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data.slice(0, 10));
          state.posts.push(...data.slice(0, 10));
        });
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
    getUsers(state){
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        state.users.push(...data);
        console.log(state);
        state.profile = state.users[0];
      });
    }
  },
  actions: {
    setPosts({ commit }) {
      commit("fetchPosts");
    },
    setUser({commit}){
      commit("getUsers")
    }
  },
  // strict: true,
  // modules: {
  // },
});
