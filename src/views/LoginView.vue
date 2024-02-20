<template>
    <h2>LOGIN PAGE</h2>
    <v-btn @click="login"> Login </v-btn>
</template>
<script lang="ts">
import router from '@/router';
import store from '@/store';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "LoginView",
    methods: {
        login() {
            store.dispatch('setUserProfile', 3);
            router.replace({ path: '/profile' });
        }
    }
})
</script>
