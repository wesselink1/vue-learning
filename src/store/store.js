import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";
import cards from "./modules/cards";
import * as getters from "./getters";
import * as mutations from "./mutations";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        appTitle: "SPA Vue & Vuex learning with Max",
        userName: "Mr. Blue"
    },
    getters,
    mutations,
    modules: {
        counter,
        cards
    }
});