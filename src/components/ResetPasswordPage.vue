<template>

    <div class="main-wrapper">

        <a href="/login">
            <img class="logo" alt="Site logo" src="../assets/logo_big.png">
        </a>

        <form class="login-form" @submit.prevent="resetPassword">
            <h3>Reset Password</h3>

            <label>Email: *</label>
            <input required v-model="email" type="text" placeholder="Email"/>

            <button class="button-login" type="submit">Send</button>

        </form>

        Remember your password?
        <router-link to="/login">Login</router-link>

    </div>

</template>

<script>
    export default {
        name: 'reset-password',
        data(){
            return {
                email: ''
            }
        },
        methods: {
            resetPassword(){
                console.log('resetPassword function');
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
</style>
