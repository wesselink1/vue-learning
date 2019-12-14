const state = {
	selectedTabComponent: 'About'
}

const getters = {
	selectedTabComponent: state => state.selectedTabComponent
};

const mutations = {
	setSelectedTabComponent: (state, payload) => {
		state.selectedTabComponent = payload;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations
}