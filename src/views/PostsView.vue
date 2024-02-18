<template>
  <div class="home">
    <h2> POSTS</h2>
    <v-expansion-panels class="add-post">
      <v-expansion-panel>
        <v-expansion-panel-title>Add new post</v-expansion-panel-title>
        <v-expansion-panel-text>
          <AddPost @add="addPost" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <h3> List of Posts</h3>
    <PostContent v-for="post in filteredPosts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import store from '@/store';
import AddPost from '../components/AddPost.vue';
import PostContent from '../components/PostContent.vue';
import { defineComponent } from 'vue';
import { Post } from '@/models/Post';

export default defineComponent({
  name: 'PostsView',
  components: {
    AddPost,
    PostContent
  },

  computed: {
    filteredPosts() {
      return store.state.posts;
    }
  },
  methods: {
    init() {
      store.dispatch("setPosts");
      // store.dispatch("setUser");
    },
    addPost(post: Partial<Post>) {
      console.log(post);
    }
  },
  mounted() {
    this.init();
  }
});
</script>

<style>
.home {
  margin: 20px;
}

.add-post {
  margin: 10px 0;
}

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
