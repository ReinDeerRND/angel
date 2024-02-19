<template>
  <div class="home">
    <h2> POSTS</h2>
    <v-expansion-panels class="add-post">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <h3>Add new post</h3>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <AddPost @add="addPost" />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <div class="sort-container">
      <h3> List of Posts</h3>
      <div class="selest-sort">
        <v-select variant="underlined" density="comfortable" label="Sort" :items="sortItems" item-title="title"
          item-value="value" @update:model-value="changeSort">
        </v-select>
      </div>
    </div>
    <PostContent v-for="post in filteredPosts" :key="post.id" :post="post" />
  </div>
</template>

<script lang="ts">
import store from '@/store';
import AddPost from '../components/AddPost.vue';
import PostContent from '../components/PostContent.vue';
import { defineComponent } from 'vue';
import { AuthoredPost, Post } from '@/models/Post';
import { SortType } from '@/models/Sort';
import { sortByTitle, sortByBody, sortByIser, sortByIndex } from '../utils/sort'
import { User } from '@/models/User';

interface State {
  sortItems: Array<{
    title: string,
    value: SortType,
  }>,
  sortIndicator: SortType,
}

export default defineComponent({
  name: 'PostsView',
  components: {
    AddPost,
    PostContent
  },
  data(): State {
    return {
      sortItems: [{
        title: 'By Alphabet in Title',
        value: SortType.AlphabetTitle,
      }, {
        title: 'By Alphabet in Text',
        value: SortType.AlphabetText,
      },
      {
        title: 'By Author',
        value: SortType.Author,
      },
      {
        title: 'By Date',
        value: SortType.Date,
      }
      ],
      sortIndicator: SortType.Default,

    }
  },
  computed: {
    filteredPosts(): AuthoredPost[] {
      const users: User[] = store.state.users;
      const posts = store.state.posts.map(post => {
        const author = users.find(item => item.id === post.userId);
        return { ...post, author: author ? author.username : "Unknown author" }
      })
      switch (this.sortIndicator) {
        case SortType.AlphabetTitle:
          return posts.sort(sortByTitle);
        case SortType.AlphabetText:
          return posts.sort(sortByBody);
        case SortType.Author:
          return posts.sort(sortByIser);
        case SortType.Date:
          return posts.sort(sortByIndex);
        default:
          return posts;
      }
    }
  },
  methods: {
    init() {
      store.dispatch("setPosts");
      // store.dispatch("setUser");
    },
    addPost(post: Partial<Post>) {
      console.log(post);
    },
    changeSort(event: SortType) {
      this.sortIndicator = event;
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
.sort-container {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.selest-sort {
  max-width: 40%;
  width: 300px;
}
</style>
