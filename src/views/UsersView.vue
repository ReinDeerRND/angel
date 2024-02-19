<template>
    <div class="container">
        <h2> USERS</h2>
        <div class="users-content">
            <div v-for="user in users" :key="user.id" class="user-container">
                <div class="child-block">
                    <div>Username: <span class="main-username">{{ user.username }}</span></div>
                    <div>Name: {{ user.name }}</div>
                </div>
                <div class="child-block">
                    <div>Company: {{ user.company.name }}</div>
                    <div>Address: {{ user.address.city }}</div>
                </div>
                <div class="child-block">
                    <div>Phone: {{ user.phone }}</div>
                    <div>Web: {{ user.website }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import store from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'UsersView',
    computed: {
        users() {
            return store.state.users
        }
    },
});
</script>

<style>
.container {
    margin: 20px;
}
.users-content {
    height: 80vh;
    overflow-y: auto;
}
.user-container {
    display: flex;
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
    border-bottom: 1px solid rgb(179, 179, 179);
}
.user-container>div {
    margin: 0 20px;
    width: 30%;
}
.main-username {
    font-weight: bold;
}
</style>