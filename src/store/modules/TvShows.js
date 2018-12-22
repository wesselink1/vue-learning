const state = {
    orderTvShowsBy: "rating",
    orderTvShowsByDesc: true,
    tvShowDisplay: "TvShowItemCard",
    tvShowsCurrentPage: 0
}

const getters = {
    orderTvShowsBy: state => state.orderTvShowsBy,
    orderTvShowsByDesc: state => state.orderTvShowsByDesc,
    tvShowDisplay: state => state.tvShowDisplay,
    tvShowsCurrentPage: state => state.tvShowsCurrentPage
}

const mutations = {
    setOrderTvShowsBy: (state, payload) => {
        state.orderTvShowsBy = payload;
    },
    setOrderTvShowsByDesc: state => {
        state.orderTvShowsByDesc = !state.orderTvShowsByDesc;
    },
    setTvShowCurrentPage: (state, payload) => {
        state.tvShowsCurrentPage = payload;
    },
    setTvShowDisplay: (state, payload) => {
        state.tvShowDisplay = payload;
    }
}

export default {
    state,
    getters,
    mutations
}