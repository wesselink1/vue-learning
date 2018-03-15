const state = {
	counter: 0,
};

const getters = {
	counter: state => {
	    return state.counter;
	}
}

const mutations = {
	incrementCounter: state => {
	    state.counter++;
	},
	decrementCounter: state => {
	    if (state.counter > 0) {
	        state.counter--;
	    }
	}
}

export default {
	state,
	getters,
	mutations
}