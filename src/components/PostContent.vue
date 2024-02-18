<template>
    <div class="post-item">
        <div class="post-title"> {{ post.title }}</div>
        <div class="post-body">
            <div class="post-content">{{ post.body }}</div>
            <v-btn @click="removePost">
                Remove post
            </v-btn>
        </div>

    </div>
</template>

<script lang="ts" >
import { Post } from '@/models/Post';
import { PropType, defineComponent } from 'vue';
export default defineComponent({
    props: {
        post: {
            type: Object as PropType<Post>,
            required: true
        }
    },
    methods: {
        removePost() {
            console.log("remove");
        }
    }
})
</script>

<style>
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
.post-body{
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
}
.post-content{
    padding-right: 15px;
}
</style>