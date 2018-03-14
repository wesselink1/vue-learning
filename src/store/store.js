import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import cards from "./modules/cards";
import lodash from "./modules/lodash";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    getters,
    mutations,
    modules: {
        counter,
        cards,
        lodash
    }
});