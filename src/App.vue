<template>
    <div id="app">
        <div class="main-container">
            <router-view/>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import axios from 'axios'
    import Footer from '@/components/footer'
    import {AUTH_LOGOUT} from './store/actions/auth'
    import {USER_REQUEST} from './store/actions/user'

    export default {
        name: 'app',
        components: {
            Footer,
        },
        created: function () {
            console.log('a');
            axios.interceptors.response.use(undefined, function (err) {
                return new Promise(function (resolve, reject) {
                    if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
                        // if you ever get an unauthorized, logout the user
                        this.$store.dispatch(AUTH_LOGOUT)
                        // you can also redirect to /login if needed !
                    }
                    throw err;
                });
            });
            console.log('b');
            if (this.$store.getters.isAuthenticated) {
                this.$store.dispatch(USER_REQUEST)
            }
            console.log('c');
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        border: 1px solid green;
        padding: 10px;
        min-height: calc(100vh - 70px);
    }
    body {
        background-color: #ffffff;
        /*font-size: 13px;*/
        border: 1px solid red;

        margin: auto;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
</style>

<style scoped>
    .main-container {
    }
</style>
