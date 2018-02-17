import Vue from "vue";
import Vuex from "vuex";
import counter from "./modules/counter";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cardsTotal: 0
    },
    getters: {
        cardsTotal: state => {
            return state.cardsTotal;
        }
    },
    mutations: {
        incrementCardsTotal: (state, value) => {
            state.cardsTotal += value;
        },
        resetCardsTotal: state => {
            state.cardsTotal = 0;
        }
    },
    modules: {
        counter
    }
});