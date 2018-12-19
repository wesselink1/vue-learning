const state = {
    orderTvShowsBy: "year",
    orderTvShowsByDesc: true,
    tvShowsPaginationLimit: 100,
}

const getters = {
    orderTvShowsBy: state => state.orderTvShowsBy,
    orderTvShowsByDesc: state => state.orderTvShowsByDesc,
    tvShowsPaginationLimit: state => state.tvShowsPaginationLimit,
}

const mutations = {
    changeOrderTvShowsBy: (state, payload) => {
        state.orderTvShowsBy = payload;
    },
    changeOrderTvShowsByDesc: state => {
        state.orderTvShowsByDesc = !state.orderTvShowsByDesc;
    },
}

export default {
    state,
    getters,
    mutations
}