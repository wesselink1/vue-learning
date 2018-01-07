import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0
    },
    getters: {
        counter: state => {
            return state.counter;
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
        }
    },
    actions: {
        // for async (like ajax calls) actions that eventually also 'commit' a mutation
    }
});