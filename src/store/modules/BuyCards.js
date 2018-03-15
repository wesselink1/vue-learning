const state = {
	cardsTotal: 0,
	cards: [
		{ 
			id: 1,
			heading: "BMW",
			price: 5.95 
		},
		{ 
			id: 2,
			heading: "Google",
			price: 10.33
		},
		{ 
			id: 3,
			heading: "Twitter",
			price: 15.99
		},
		{ 
			id: 4,
			heading: "Amazone",
			price: 50
		},
		{ 
			id: 5,
			heading: "Bol.com",
			price: 75.25
		}
	],
	limit: [
		50,
		100,
		150
	]
};

const getters = {
	cards: state => {
		return	state.cards;
	},
	cardsTotal: state => {
	    return state.cardsTotal;
	},
	limit: state => {
		return state.limit;
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