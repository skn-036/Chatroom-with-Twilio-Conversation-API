import Vue from 'vue'
import Vuex from 'vuex'

import Map from './store'

Vue.use(Vuex)

const Store = new Vuex.Store({
    modules : {
        Map
    }
})

export default Store