import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import auth from '@/utils/auth.js';



Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/inscription',
            name: 'inscription',
            beforeEnter: (to, from, next) => {
                if (auth.getLocalToken()) next("/profil");
                else next();
            },
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Inscription.vue')
        },
        {
            path: '/creeprojet',
            name: 'createProject',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/CreeProjet.vue')
        },
        {
            path: '/vueprojet',
            name: 'vueProject',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/VueProjet.vue')
        },
        {
            path: '/cgu',
            name: 'conditionsGeneraldUtilisation',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Cgu.vue')
        },
        {
            path: '/dp',
            name: 'donneesPersonnelles',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './views/Dp.vue')
        },
        {
            path: '/login',
            name: 'login',
            beforeEnter: (to, from, next) => {
                if (auth.getLocalToken()) next("/profil");
                else next();
            },
            component: () => import('./views/Login.vue'),

        },
        {
            path: '/profil',
            name: 'profil',
            beforeEnter: (to, from, next) => {
                if (!auth.getLocalToken()) next("/login");
                else next();
            },
            component: () => import('./views/Profil.vue'),
            children: [
                {
                    path: "edit",
                    name: "editInfo",
                    component: () => import("./components/CompProfilEdit.vue")
                },
                {
                    path: "profilevent",
                    name: "profilEvent",
                    component: () => import("./components/CompProfilEvent.vue")
                },
            ]
        },
        {
            path: '/profilRh',
            name: 'profilRh',
            component: () => import('./views/ProfilRh.vue'),
            children: [
                {
                    path: 'gestionDesComptes',
                    name: 'gestionDesComptes',
                    component: () => import('./components/CompRHGestionCompte.vue'),
                },
                {
                    path: 'gestionDesprojets',
                    name: 'gestionDesprojets',
                    component: () => import('./components/CompRHGestionProj.vue'),

                },
            ]
        },
        {
            path: '/confirm',
            name: 'confirm',
            component: () => import('./views/Confirm.vue')
        },
    ]
});
