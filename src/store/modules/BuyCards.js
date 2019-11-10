export default {
	namespaced: true,

	state: {
		cardsTotal: 0,
		limit: [
			50,
			100,
			150
		],
		cards: [
			{
				"heading": "BMW",
				"id": 0,
				"price": 5.95
			},
			{
				"heading": "Google",
				"id": 1,
				"price": 10.33
			},
			{
				"heading": "Twitter",
				"id": 2,
				"price": 15.99
			},
			{
				"heading": "Amazone",
				"id": 3,
				"price": 50
			},
			{
				"heading": "Bol.com",
				"id": 4,
				"price": 75.25
			}
		]
	},

	getters: {
		cardsTotal: state => state.cardsTotal,
		limit: state => state.limit,
		cards: state => state.cards,
	},

	mutations: {
		incrementCardsTotal: (state, payload) => {
			state.cardsTotal += payload;
		},
		resetCardsTotal: state => {
			state.cardsTotal = 0;
		}
	}
};
