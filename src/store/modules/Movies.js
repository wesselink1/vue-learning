const state = {
    order: "year",
    orderByDesc: false
};

const getters = {
    order: state => {
        return state.order;
    },
    orderByDesc: state => {
        return state.orderByDesc;
    }
};

const mutations = {
    changeOrder: (state, payload) => {
        state.order = payload;
    },
    changeOrderByDesc: state => {
        state.orderByDesc = !state.orderByDesc;
    }
};

export default {
    state,
    getters,
    mutations
};