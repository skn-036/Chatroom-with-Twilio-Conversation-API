require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './Router'
import Store from './Store'

Vue.use(VueRouter)

import App from './Components/index'

new Vue({
    el : '#app',
    components : {
        App
    },
    store : Store,
    router : Router,
})