const state = {
	selectedComponent: 'appCatalog'
};

const getters = {
	selectedComponent: state => {
		return state.selectedComponent;
	}
};

const mutations = {
	setSelectedComponent: (state, value) => {
		state.selectedComponent = value;
	}
};

export default {
	state,
	getters,
	mutations
}