import Vue from "vue";
import Vuex from "vuex";
import ArraySorting from "./modules/ArraySorting";
import BuyCards from "./modules/BuyCards";
import Tabs from "./modules/Tabs";
import Vuelidate from "./modules/Vuelidate";
import VuexCounter from "./modules/VuexCounter";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        
    },
    getters,
    mutations,
    actions,
    modules: {
        ArraySorting,
        BuyCards,
        Tabs,
        Vuelidate,
        VuexCounter
    }
});