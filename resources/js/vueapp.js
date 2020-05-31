require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import test from './testprop.json'

Vue.use(VueRouter)

const App = () => import('./components/App.vue');
const Welcome = () => import('./components/Welcome.vue');
const Page = () => import('./components/Page.vue');
const Crud = () => import('./components/Crud.vue');

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome,
            children: [
                {
                    path: "/home"
                }
            ],
            props: test
        },
        {
            path: '/spa-page',
            name: 'page',
            component: Page,
            props: { 
                title: "This is the SPA Second Page",
                author : {
                    name : "Fisayo Afolayan",
                    role : "Software Engineer",
                    code : "Always keep it clean"
                }
            }
        },    
        {
            path: '/crud',
            name: 'crud',
            component: Crud,
        },  
    ],
})
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});