const state = {
	selectedTabComponent: 'About'
};

const getters = {
	selectedTabComponent: state => {
		return state.selectedTabComponent;
	}
};

const mutations = {
	setSelectedTabComponent: (state, payload) => {
		state.selectedTabComponent = payload;
	}
};

export default {
	state,
	getters,
	mutations
};