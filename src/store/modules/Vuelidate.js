export default {
    namespaced: true,

    state: {
        age: null,
        email: null,
        terms: false,
        username: null,
        coupon: null
    },

    getters: {
        age: state => state.age,
        email: state => state.email,
        terms: state => state.terms,
        username: state => state.username,
        coupon: state => state.coupon
    },

    mutations: {
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
    }
};