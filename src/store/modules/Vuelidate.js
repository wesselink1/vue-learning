const state = {
	age: null,
	email: null,
	terms: false,
	username: null
};

const getters = {
	age: state => {
		return state.age;
	},
	email: state => {
		return state.email;
	},
	terms: state => {
		return state.terms;
	},
	username: state => {
		return state.username;
	}
};

const mutations = {
	setAge: (state, payload) => {
		state.age = payload;
	},
	setEmail: (state, payload) => {
		state.email = payload;
	},
	setTerms: (state, payload) => {
		state.terms = payload;
	},
	setUsername: (state, payload) => {
		state.username = payload;
	}
};

export default {
	state,
	getters,
	mutations
};