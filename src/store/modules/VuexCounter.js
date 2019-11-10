export default {
	namespaced: true,

	state: {
		counter: 0,
	},

	getters: {
		counter: state => state.counter
	},

	mutations: {
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
	}
};