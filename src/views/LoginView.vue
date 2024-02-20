<template>
    <div class="login-container">
        <div class="invisible-layer">
        </div>
        <v-card class="card">
            <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
                <v-tab value="login">Log in</v-tab>
                <v-tab value="registry">Registry</v-tab>
            </v-tabs>
            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="login">
                        <v-form v-model="validLoginForm" class="form" @submit.prevent>
                            <v-text-field class="form-field" variant="solo" v-model="loginname" :rules="rules"
                                label="Username" required hide-details></v-text-field>
                            <v-text-field class="form-field" variant="solo" v-model="password" :rules="rules"
                                label="Password" required hide-details></v-text-field>
                            <div class="form-field button">
                                <v-btn @click="login" color="deep-purple-accent-4" variant="tonal"> Login </v-btn>
                            </div>
                        </v-form>
                    </v-window-item>
                    <v-window-item value="registry">
                        <v-form v-model="validRegistryForm" class="form">
                            <v-text-field :rules="rules" variant="solo" class="form-field" v-model="username"
                                label="Username" required hide-details></v-text-field>
                            <v-text-field :rules="rules" variant="solo" class="form-field" v-model="name" label="Full name"
                                required hide-details></v-text-field>
                            <v-text-field :rules="rules" variant="solo" class="form-field" v-model="email" label="Email"
                                required hide-details></v-text-field>
                            <v-text-field :rules="rules" variant="solo" class="form-field" v-model="password"
                                label="Password" required hide-details></v-text-field>
                            <div class="form-field button">
                                <v-btn @click="registryUser" color="deep-purple-accent-4" variant="tonal"> Registry </v-btn>
                            </div>
                        </v-form>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
    <v-snackbar v-model="snackbar" :timeout="2000">
        {{ snakcbarText }}
        <template v-slot:actions>
            <v-btn color="pink" variant="text" @click="snackbar = false">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script lang="ts">
import router from '@/router';
import store from '@/store';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "LoginView",
    data() {
        return {
            tab: "one",
            validLoginForm: false,
            loginname: '',
            password: '',

            validRegistryForm: false,
            username: '',
            name: null,
            email: '',
            createdPassword: '',
            snakcbarText: "",
            snackbar: false,
            rules: [
                (value: string) => {
                    if (value) return true
                    return 'Field is required.'
                },
            ]
        }
    },
    methods: {
        login() {
            const user = store.state.users.find(u => u.username === this.loginname);
            if (user && this.validLoginForm) {
                store.dispatch('setUserProfile', user.id);
                router.replace({ path: '/post' });
            } else {
                this.snakcbarText = "Wrong auth data!"
                this.snackbar = true;
            }
        },
        registryUser() {
            if (this.validRegistryForm) {
                const user = store.state.users.find(u => u.username === this.username);
                if (user) {
                    this.snakcbarText = "This username already exists!"
                    this.snackbar = true;
                } else {
                    const newUser = {
                        id: Date.now(),
                        name: this.name,
                        username: this.username,
                        email: this.email,
                        address: {
                            street: '',
                            suite: '',
                            city: '',
                            zipcode: '',
                            geo: {
                                lat: '',
                                lng: '',
                            },
                        },
                        phone: '',
                        website: '',
                        company: {
                            name: '',
                            catchPhrase: '',
                            bs: '',
                        },
                    }
                    store.dispatch("addNewUser", newUser);
                    store.dispatch('setUserProfile', newUser.id);
                    router.replace({ path: '/post' });
                }
            } else {
                this.snakcbarText = "Fill all fields!"
                this.snackbar = true;
            }
        }
    }
})
</script>

<style>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-image: url('../assets/img/sky.jpg');
    position: relative;
}

.invisible-layer {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(249, 218, 250);
    opacity: 0.6
}

.card {
    padding-top: 15px;
    filter: opacity(200%);
    margin-top: 20vh;
    width: 50vw;
    min-width: 200px;
    min-height: 200px
}

.form {
    display: flex;
    flex-direction: column;
    margin: 25px 35px;
}

.form-field {
    margin-bottom: 15px;
}

.form-field.button {
    margin: 15px 0;
    display: flex;
    justify-content: center;
}
</style>
