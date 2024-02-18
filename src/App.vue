<template>
  <AppHeader />
  <nav>
    <router-link to="/post">Posts</router-link> |
    <!-- <router-link to="/add">Add Post</router-link> | -->
    <router-link to="/profile">Profile</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue'

export default defineComponent({
  components: {
    AppHeader
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 0 50px;
  margin-top: 80px
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #b75ee0;
}
</style>
