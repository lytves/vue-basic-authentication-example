<template>

    <div class="main-wrapper">

        <a href="/login">
            <img class="logo" alt="Site logo" src="../assets/logo_big.png">
        </a>

        <form class="login-form" @submit.prevent="login">
            <h3>Login to site</h3>

            <label>Email: *</label>
            <input required v-model="email" type="text" placeholder="Email"/>

            <label>Password: *</label>
            <input required v-model="password" type="password" placeholder="Password"/>

            <router-link to="/reset-password" class="reset-link">Reset password</router-link>

            <button class="button-login" type="submit">Login</button>
        </form>

        <router-link to="/signup">Create an account</router-link>

    </div>

</template>

<script>
    import {AUTH_REQUEST} from '../store/actions/auth'

    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            login: function () {
                const {email, password} = this;
                this.$store.dispatch(AUTH_REQUEST, {email, password})
                    .then(() => {
                        this.$router.push('/user')
                    })
            }
        }
    }
</script>

<style scoped>
    img {
        display: block;
        margin: auto;
        margin-bottom: 10px;
    }
    .login-form {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 0 10px 10px;
        margin: auto;
        border: 1px solid #2c3e50;
        border-radius: 3px;
    }
    input, button {
        padding: 10px;
    }
    .button-login {
        margin-top: 10px;
    }
    .reset-link{
        text-align: left;
        padding: 5px;
    }
</style>