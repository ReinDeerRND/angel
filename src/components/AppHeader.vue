<template>
    <v-layout>
        <v-app-bar :elevation="1" rounded class="app-bar">
            <template v-slot:prepend>
                <v-icon size="large" color="purple" icon="mdi-post-lamp"></v-icon>
            </template>

            <v-app-bar-title>Angel Messanger</v-app-bar-title>
            <template v-slot:append>
                <v-icon size="large" color="red" icon="mdi-heart"></v-icon>
                <div v-if="account">{{ account }} </div>
                <div v-else>Sign in </div>

            </template>
        </v-app-bar>
    </v-layout>
</template>

<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AppHeader',
    computed: {
        account() {
            return store.state.profile?.name;
        }
    }
})
</script>

