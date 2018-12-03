const state = {
	cardsTotal: 0,
	limit: [
		50,
		100,
		150
	]
};

const getters = {
	cardsTotal: state => state.cardsTotal,
	limit: state => state.limit
};

const mutations = {
	incrementCardsTotal: (state, payload) => {
	    state.cardsTotal += payload;
	},
	resetCardsTotal: state => {
	    state.cardsTotal = 0;
	}
};

export default {
	state,
	getters,
	mutations
};
