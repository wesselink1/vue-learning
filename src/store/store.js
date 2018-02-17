import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        cardsTotal: 0
    },
    getters: {
        counter: state => {
            return state.counter;
        },
        cardsTotal: state => {
            return state.cardsTotal;
        }
    },
    mutations: {
        incrementCounter: state => {
            state.counter++;
        },
        decrementCounter: state => {
            if (state.counter > 0) {
                state.counter--;
            }
        },
        incrementCardsTotal: (state, value) => {
            state.cardsTotal += value;
        },
        resetCardsTotal: state => {
            state.cardsTotal = 0;
        }
    },
    actions: {
        // for async (like ajax calls) actions that eventually also 'commit' a mutation
    }
});