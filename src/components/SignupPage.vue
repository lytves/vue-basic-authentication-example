<template>

    <div class="main-wrapper">

        <a href="/login">
            <img alt="Crypfolio logo" src="../assets/logo_big_mariadb.png">
        </a>

        <form class="login-form" @submit.prevent="signup">
            <h3>Create an account</h3>

            <label>Portfolio Name: *</label>
            <input required v-model="portfolioName" type="text" placeholder="Portfolio Name"/>

            <label>Email: *</label>
            <input required v-model="email" type="text" placeholder="Email"/>

            <label>Password: *</label>
            <input required v-model="password" type="password" placeholder="Password"/>

            <label>Repeat Password: *</label>
            <input required v-model="password" type="password" placeholder="Repeat Password"/>

            <button class="button-login" type="submit">Signup</button>
        </form>

        Already have an account?
        <router-link to="/login">Login</router-link>

    </div>

</template>

<script>
    export default {
        name: 'signup',
        data() {
            return {
                portfolioName: '',
                email: '',
                password: ''
            }
        },
        methods: {
            signup() {
                console.log('signup function');
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

    .main-wrapper {
        padding-top: calc(30vh - 100px);
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
