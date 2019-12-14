const state = {
	counter: 0,
};

const getters = {
	counter: state => state.counter
};

const mutations = {
	incrementCounter: state => {
		state.counter++;
	},
	decrementCounter: state => {
		if (state.counter > 0) {
			state.counter--;
		}
	},
	resetCounter: state => {
		state.counter = 0;
	}
};

export default {
	namespaced: true,
	state,
	getters,
	mutations
}