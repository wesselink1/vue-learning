import Vue from "vue";
import Vuex from "vuex";
import BuyCards from "./modules/BuyCards";
import Movies from "./modules/Movies";
import Tabs from "./modules/Tabs";
import TvShows from "./modules/TvShows";
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
        BuyCards,
        Movies,
        Tabs,
        TvShows,
        Vuelidate,
        VuexCounter
    }
});