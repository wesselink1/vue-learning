const state = {
    vuelidateForm: {
        age: null,
        email: null,
        terms: false,
        username: null,
        coupon: null
    }
};

const getters = {
    age: state => {
        return state.vuelidateForm.age;
    },
    email: state => {
        return state.vuelidateForm.email;
    },
    terms: state => {
        return state.vuelidateForm.terms;
    },
    username: state => {
        return state.vuelidateForm.username;
    },
    coupon: state => {
        return state.vuelidateForm.coupon;
    }
};

const mutations = {
    age: (state, payload) => {
        state.vuelidateForm.age = payload;
    },
    email: (state, payload) => {
        state.vuelidateForm.email = payload;
    },
    terms: (state, payload) => {
        state.vuelidateForm.terms = payload;
    },
    username: (state, payload) => {
        state.vuelidateForm.username = payload;
    },
    coupon: (state, payload) => {
        state.vuelidateForm.coupon = payload;
    }
};

export default {
    state,
    getters,
    mutations
};