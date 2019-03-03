import { orderBy, minBy, maxBy } from "lodash";
import MovieService from "@/services/MovieService";

const state = {
    order: "year",
    orderByDesc: false,
    movies: []
};

const getters = {
    order: state => state.order,
    orderByDesc: state => state.orderByDesc,
    movies: state => state.movies,
    movie: (state) => (id) => state.movies.find(item => item.id == id),
    filteredMovies: state => orderBy(state.movies, [state.order], state.orderByDesc ? "desc" : "asc"),
    highestRatedMovie: state => maxBy(state.movies, (item) => item.rating),
    lowestRatedMovie: state => minBy(state.movies, (item) => item.rating)
};

const mutations = {
    changeOrder: (state, payload) => {
        state.order = payload;
    },
    changeOrderByDesc: state => {
        state.orderByDesc = !state.orderByDesc;
    },
    setMovies: (state, payload) => {
        state.movies = payload;
    },
    setHighestAndLowestRatedBoolean: state => {
        let maxRatedMovie = maxBy(state.movies, function (item) {
            return item.rating;
        });

        let maxIndex = state.movies.indexOf(maxRatedMovie);
        state.movies[maxIndex].highest = true;

        let minRatedMovie = minBy(state.movies, function (item) {
            return item.rating;
        });

        let minIndex = state.movies.indexOf(minRatedMovie);
        state.movies[minIndex].lowest = true;
    }
};

const actions = {
    getMovies: (context) => {
        MovieService
            .getMovies()
            .then(response => {
                context.commit("setMovies", response.data);
            });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
};
