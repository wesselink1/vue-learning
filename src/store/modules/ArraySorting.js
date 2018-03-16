import { orderBy, minBy, maxBy } from "lodash";

const state = {
	order: "year",
	orderByDesc: false,
	movies: [
		{
			title: "The Last Jedi",
			rating: 7.4,
			year: 2017,
			genre: "Science-Fiction"
		},
		{
			title: "Conan: The Barbarian",
			rating: 6.9,
			year: 1982,
			genre: "Adventure"
		},
		{
			title: "Lost in Space",
			rating: 5.2,
			year: 1998,
			genre: "Adventure"
		},
		{
			title: "The Shawshank Redemption",
			rating: 9.3,
			year: 1994,
			genre: "Crime"
		},
		{
			title: "The Revenant",
			rating: 8.0,
			year: 2015,
			genre: "History"
		},
		{
			title: "Home Alone 2",
			rating: 6.6,
			year: 1992,
			genre: "Comedy"
		},
		{
			title: "The Shining",
			rating: 8.4,
			year: 1980,
			genre: "Horror"
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
	},
	filteredMovies: state => {
		return orderBy(state.movies, [state.order], state.orderByDesc ? "desc" : "asc");
	},
	highestRatedMovie: state => {
		return maxBy(state.movies, function(list) {
			return list.rating;
		});
	},
	worstRatedMovie: state => {
		return minBy(state.movies, function(list) {
			return list.rating;
		});
	}
};

const mutations = {
	changeOrder: (state, payload) => {
		state.order = payload;
	},
	changeOrderByDesc: state => {
		state.orderByDesc = !state.orderByDesc;
	}
};

export default {
	state,
	getters,
	mutations
};