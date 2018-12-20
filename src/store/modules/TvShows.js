const state = {
    orderTvShowsBy: "rating",
    orderTvShowsByDesc: true,
    tvShowsPerPage: 10,
    tvShowsCurrentPage: 0
}

const getters = {
    orderTvShowsBy: state => state.orderTvShowsBy,
    orderTvShowsByDesc: state => state.orderTvShowsByDesc,
    tvShowsPerPage: state => state.tvShowsPerPage,
    tvShowsCurrentPage: state => state.tvShowsCurrentPage
}

const mutations = {
    setOrderTvShowsBy: (state, payload) => {
        state.orderTvShowsBy = payload;
    },
    setOrderTvShowsByDesc: state => {
        state.orderTvShowsByDesc = !state.orderTvShowsByDesc;
    },
    setTvShowsPerPage: (state, payload) => {
        state.tvShowsCurrentPage = payload;
    },
    setTvShowCurrentPage: (state, payload) => {
        state.tvShowsCurrentPage = payload;
    }
}

export default {
    state,
    getters,
    mutations
}