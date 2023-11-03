<template>
  <div class="home">
    <h2> POSTS</h2>

    <div v-for="post in filteredPosts" :key="post.id" class="post-item">
      <div class="post-title"> {{ post.title }}</div>
      <div>{{ post.body }}</div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'PostsView',
  computed: {
    filteredPosts() {
      return store.state.posts;
    }
  },
  methods: {
    init() {
      store.dispatch("setPosts");
      store.dispatch("setUser");
    }
  },
  mounted() {
    this.init();
  }
  // components: {
  //   HelloWorld,
  // },
});
</script>

<style>
button {
  margin-bottom: 15px;
}

.post-item {
  margin-bottom: 15px;
  border: 1px solid rgb(179, 179, 179);
  border-radius: 5px;
  padding: 5px;
}

.post-title {
  margin-bottom: 5px;
  font-weight: bold;
}
</style>
