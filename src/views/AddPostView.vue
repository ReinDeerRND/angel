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
        <v-textarea variant="solo" v-model="postText" label="Post" hide-details required></v-textarea>
      </div>

    </v-form>
    <v-btn @click="createPost">
      Create post
    </v-btn>
  </div>
</template>

<script lang="ts" >
export default {
  data: () => ({
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
  }),
  methods: {
    createPost() {
      console.log("create");
    }
  }
}
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