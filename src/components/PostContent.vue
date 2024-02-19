<template>
    <div class="post-item">
        <div class="post-title"> {{ post.title }}</div>
        <div class="post-body">
            <div class="post-content">{{ post.body }}</div>
            <div class="buttons-block">
                <v-btn @click="removePost">
                    Remove
                </v-btn>
                <v-dialog width="1000" >
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" text="Details" style="margin-left: 15px;"> </v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card title="Post">
                            <v-card-text>
                                <div class="post-title"> {{ post.title }}</div>
                                <div >{{ post.body }}</div>
                                <div v-if="user" class="author-info">
                                    <div> Information about author</div>
                                    <div class="post-title"> {{ user.username }}</div>
                                    <div class="post-author"> {{ user.name }}</div>
                                    <div> {{ user.company.name }}</div>
                                    <div> {{ user.address.city }}</div>
                                </div>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn text="Close" @click="isActive.value = false"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </div>
        <div class="post-author"> {{ post.author }}</div>
    </div>
</template>

<script lang="ts" >
import { AuthoredPost } from '@/models/Post';
import { User } from '@/models/User';
import store from '@/store';
import { PropType, defineComponent } from 'vue';
export default defineComponent({
    props: {
        post: {
            type: Object as PropType<AuthoredPost>,
            required: true
        }
    },
    computed: {
        user(): User {
            return store.getters.getUserById(this.post.userId)
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
    padding: 10px 15px;
}
.post-title {
    margin-bottom: 5px;
    font-weight: bold;
}
.post-body {
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
}
.post-content {
    padding-right: 15px;
}
.buttons-block{
    display: flex;
}
.post-author {
    font-style: italic;
}
.author-info {
    margin-top: 20px;
}
</style>