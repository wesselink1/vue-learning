import Vue from "vue";
import Vuex from "vuex";
import ArraySorting from "./modules/ArraySorting";
import BuyCards from "./modules/BuyCards";
import VuexCounter from "./modules/VuexCounter";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    getters,
    mutations,
    modules: {
        ArraySorting,
        BuyCards,
        VuexCounter
    }
});