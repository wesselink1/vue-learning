const state = {
	selectedComponent: 'About'
};

const getters = {
	selectedComponent: state => {
		return state.selectedComponent;
	}
};

const mutations = {
	setSelectedComponent: (state, payload) => {
		state.selectedComponent = payload;
	}
};

export default {
	state,
	getters,
	mutations
};