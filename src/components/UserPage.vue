<template>
    <div class="user-page-wrapper">

        <div class="header">

            <a href="/">
                <img class="small-logo" src="../assets/logo_small.png"
                     alt="Your New Vue.js site!"/>
            </a>

            <div id="nav">
                <ul>
                    <li>
                        Your account:
                    </li>
                    <li>
                        <router-link v-if="isProfileLoaded" to="/user">{{name}}</router-link>
                    </li>
                    <li>
                        <a v-if="isAuthenticated" @click="logout" class="logout-link">Logout</a>
                    </li>

                </ul>

            </div>

        </div>

        <div>

            <h3>Damion Grady</h3>
            Granite Electronics Port SMTP HDD Singapore Clothing Virginia Rustic Fresh Gloves payment Regional Tuna
            Executive Egypt payment Vietnam clicks-and-mortar orchestrate Mouse generating

            <h3>Lon Hermiston</h3>
            Wooden Ball Chair e-business open-source invoice Hong Kong PCI Savings Account JSON Metal Table HDD AGP
            Implementation Home Loan Account Specialist optical deposit Pataca

            <h3>Kattie Connelly</h3>
            Danish Krone grow Home Loan Account connecting Outdoors Small Handcrafted Steel Car Team-oriented
            Investment
            Account enable mint green feed hardware multi-byte XML streamline transmit Indiana deposit
            Coordinator

            <h3>Carol Greenfelder</h3>
            evolve Solomon Islands Dollar Rubber productivity drive infomediaries Cambridgeshire Dynamic
            program Awesome
            Global navigating auxiliary SMTP violet Soft Group infrastructures cross-platform Union

            <h3>Alexane Crona</h3>
            Sleek Virtual Personal Loan Account override Sports Coordinator CFP Franc Usability
            Bedfordshire deposit
            payment instruction set Cambridgeshire withdrawal calculating enable leading edge
            Montenegro Rustic
            bifurcated

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
        background-color: aliceblue;
        align-items: center;
        border-radius: 10px;
    }
    .logout-link {
        cursor: pointer;
    }
    .small-logo {
        width: 192px;
        height: 43px;
        border-radius: 10px;
    }
    ul {
        list-style-type: none;
        display: flex;
    }
    li {
        padding-right: 1em;
    }
    a {
        text-decoration: none;
        display: flex;
    }
</style>