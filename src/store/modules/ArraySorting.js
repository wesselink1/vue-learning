const state = {
	order: "year",
	orderByDesc: false,
	movies: [
		{
			"title": "The Last Jedi",
			"rating": 7.4,
			"year": 2017,
			"genre": "Science-Fiction"
		},
		{
			"title": "Conan: The Barbarian",
			"rating": 6.9,
			"year": 1982,
			"genre": "Adventure"
		},
		{
			"title": "Lost in Space",
			"rating": 5.2,
			"year": 1998,
			"genre": "Adventure"
		},
		{
			"title": "The Shawshank Redemption",
			"rating": 9.3,
			"year": 1994,
			"genre": "Crime"
		},
		{
			"title": "The Revenant",
			"rating": 8.0,
			"year": 2015,
			"genre": "History"
		},
		{
			"title": "Home Alone 2",
			"rating": 6.6,
			"year": 1992,
			"genre": "Comedy"
		},
		{
			"title": "The Shining",
			"rating": 8.4,
			"year": 1980,
			"genre": "Horror"
		}
	]
};

const getters = {
	order: state => {
		return state.order;
	},
	orderByDesc: state => {
		return state.orderByDesc;
	},
	movies: state => {
		return state.movies;
	}
};

const mutations = {
	changeOrder: (state, value) => {
		state.order = value;
	},
	changeOrderByDesc: state => {
		state.orderByDesc = !state.orderByDesc;
	}
};

export default {
	state,
	getters,
	mutations
}