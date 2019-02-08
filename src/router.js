import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import SignupPage from '@/components/SignupPage'
import ResetPasswordPage from '@/components/ResetPasswordPage'
import UserPage from '@/components/UserPage'
import store from './store'

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next();
        return
    }
    next('/user')
};

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next();
        return
    }
    next('/login')
};

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignupPage,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/reset-password',
            name: 'reset-password',
            component: ResetPasswordPage,
            beforeEnter: ifNotAuthenticated
        },
        {
            path: '/user',
            name: 'user',
            component: UserPage,
            beforeEnter: ifAuthenticated
        },
        // otherwise redirect to home
        {path: '*', redirect: '/login'}
    ]
});
