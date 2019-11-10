export default {
	namespaced: true,

	state: {
		selectedTabComponent: 'About'
	},

	getters: {
		selectedTabComponent: state => state.selectedTabComponent
	},

	mutations: {
		setSelectedTabComponent: (state, payload) => {
			state.selectedTabComponent = payload;
		}
	}
};