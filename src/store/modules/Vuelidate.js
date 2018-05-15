const state = {
    age: null,
    email: null,
    terms: false,
    username: null,
    coupon: null
};

const getters = {
    age: state => {
        return state.age;
    },
    email: state => {
        return state.email;
    },
    terms: state => {
        return state.terms;
    },
    username: state => {
        return state.username;
    },
    coupon: state => {
        return state.coupon;
    }
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
    state,
    getters,
    mutations
};