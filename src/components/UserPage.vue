<template>
    <div class="user-page-wrapper">

        <div class="header">

            <router-link to="/login">
                <img class="small-logo" src="../assets/logo_small_mariadb.png"
                     alt="Crypfolio :: a new crypto portfolio"/>
            </router-link>

            <div id="nav">
                <router-link to="/signup">Signup</router-link>
                |
                <router-link to="/reset-password">Forgot</router-link>
                |
                <router-link to="/user">{{name}}</router-link>
                |
                <a v-if="isAuthenticated" @click="logout" class="logout-link">Logout</a>
            </div>

        </div>

    </div>

</template>

<script>
    import {mapGetters, mapState} from 'vuex'
    import {AUTH_LOGOUT} from '../store/actions/auth'

    const token = localStorage.getItem('user-token');
    if (token) {
        console.log(token);
    }

    export default {
        name: 'user',
        methods: {
            logout: function () {
                this.$store.dispatch(AUTH_LOGOUT)
                    .then(() => {
                        this.$router.push('/login')
                    })
            },
        },
        computed: {
            ...mapGetters(['getProfile', 'isAuthenticated', 'isProfileLoaded']),
            ...mapState({
                authLoading: state => state.auth.status === 'loading',
                name: state => `${state.user.profile.title} ${state.user.profile.name}`,
            }),
        }
    }
</script>

<style scoped>
    .user-page-wrapper {
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
    }

    .logout-link {
        cursor: pointer;
    }

    .small-logo {
        width: 192px;
        height: 43px;
    }
</style>
