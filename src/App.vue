<template>
  <nav v-if="isAuth">
    <AppHeader />
    <router-link to="/post">Posts</router-link> |
    <router-link to="/users">Users</router-link> |
    <router-link to="/profile">Profile</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue'
import store from './store';

export default defineComponent({
  components: {
    AppHeader
  },
  computed: {
    isAuth(): boolean {
      return !!store.state.profile;
    }
  },
  mounted() {
    store.dispatch("setUsers");
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 0;
  margin: 0;
  background-color: white;
}

nav {
  width: 100%;
  padding: 0 50px;
  margin-top: 80px;
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: #b75ee0;
}
</style>
