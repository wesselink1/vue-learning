const state = {
	cardsTotal: 0
};

const getters = {
	cardsTotal: state => {
	    return state.cardsTotal;
	}
};

const mutations = {
	incrementCardsTotal: (state, value) => {
	    state.cardsTotal += value;
	},
	resetCardsTotal: state => {
	    state.cardsTotal = 0;
	}
};

export default {
	state,
	getters,
	mutations
}