import Vue from 'vue'
import Vuex from 'vuex'

import * as state from './global/state'
import * as getters from './global/getters'
import * as mutations from './global/mutations'
import * as actions from './global/actions'

import stocksModule from './modules/stocks'
import portfolioModule from './modules/portfolio'

Vue.use(Vuex);


export const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        stocksModule,
        portfolioModule
    }
});