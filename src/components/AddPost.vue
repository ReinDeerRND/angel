<template>
  <div class="about">
    <h1>New Post</h1>
    <v-form v-model="valid" class="form">
      <div class="form-field">
        <v-text-field variant="solo" v-model="title" label="Title" required hide-details></v-text-field>
      </div>
      <div class="form-field">
        <v-text-field variant="solo" v-model="author" :rules="nameRules" label="Author" required
          hide-details></v-text-field>
      </div>
      <div class="form-field">
        <v-textarea auto-grow variant="solo" v-model="postText" label="Post" hide-details required></v-textarea>
      </div>

    </v-form>
    <v-btn @click="createPost">
      Create post
    </v-btn>
  </div>
</template>

<script lang="ts" >
import { Post } from '@/models/Post';
import { defineComponent } from 'vue';

interface State {
  valid: boolean,
  title: string,
  postText: string,
  author: string,
  nameRules: Array<(value: string) => boolean | string>
}

export default defineComponent({
  data(): State {
    return {
      valid: false,
      title: '',
      postText: '',
      author: '',
      nameRules: [
        (value: string) => {
          if (value) return true
          return 'Name is required.'
        },
        (value: string) => {
          if (value?.length > 3) return true
          return 'Name must be more than 2 characters.'
        },
      ],
    }
  },
  methods: {
    createPost() {
      let newPost: Partial<Post> = {
        title: this.title,
        body: this.postText,
        userId: 3
      }
      this.$emit("add", newPost);
      this.title = '';
      this.postText = '';

    }


  }
})
</script>

<style>
.about {
  padding: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}

.form-field {
  margin-bottom: 15px;
}
</style>