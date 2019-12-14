const state = {
    age: null,
    email: null,
    terms: false,
    username: null,
    coupon: null
};

const getters = {
    age: state => state.age,
    email: state => state.email,
    terms: state => state.terms,
    username: state => state.username,
    coupon: state => state.coupon
};

const mutations = {
    age: (state, payload) => {
        state.age = payload;
    },
    email: (state, payload) => {
        state.email = payload;
    },
    terms: (state, payload) => {
        state.terms = payload;
    },
    username: (state, payload) => {
        state.username = payload;
    },
    coupon: (state, payload) => {
        state.coupon = payload;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}