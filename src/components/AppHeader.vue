<template>
    <v-layout>
        <v-app-bar :elevation="1" rounded class="app-bar">
            <template v-slot:prepend>
                <div class="logo" @click="homePage">
                    <v-icon size="large" color="purple" icon="mdi-post-lamp"></v-icon>
                    <v-app-bar-title  tabindex="0" >Angel Messanger</v-app-bar-title>
                </div>
            </template>
            <template v-slot:append>
                <v-icon size="large" color="red" icon="mdi-heart"></v-icon>
                <div v-if="account" class="account-container"> {{ account }} </div>
            </template>
        </v-app-bar>
    </v-layout>
</template>

<script lang="ts">
import router from '@/router';
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppHeader',
    computed: {
        account() {
            return store.state.profile?.name;
        }
    },
    methods: {
        homePage() {
            router.replace({ path: '/' })
        }
    }
})
</script>

<style>
.account-container {
    margin-left: 10px;
}
.logo {
    display: flex;
    cursor: pointer;
}
</style>
