<template>
    <main class="movies">
        <h1 class="heading">Movies</h1>

        <p class="paragraph">
            Movie overview- and detail page using <strong>vue-router</strong>, a dynamic URL using movie ID and an URL title slug.
            The list of movies is coming from <strong>Google Firebase</strong>.
        </p>

        <p class="paragraph movies__sorting">
            Order by: 
            <a 
                href="javascript:;" 
                class="movies__sorting-link"
                :class="[
                    orderByDesc ? 'sorted-desc' : 'sorted-asc',
                    { 'is-active' : order == 'title' }
                ]"
                @click="setOrderBy('title')">
                Title
            </a>, 
            <a 
                href="javascript:;" 
                class="movies__sorting-link"
                :class="[
                    orderByDesc ? 'sorted-desc' : 'sorted-asc',
                    { 'is-active' : order == 'rating' }
                ]"
                @click="setOrderBy('rating')">
                rating
            </a>, 
            <a 
                href="javascript:;" 
                class="movies__sorting-link"
                :class="[
                    orderByDesc ? 'sorted-desc' : 'sorted-asc',
                    { 'is-active' : order == 'year' }
                ]"
                @click="setOrderBy('year')">
                year
            </a>
        </p>

        <section class="movies__list">
            <MovieItem
                v-for="movie in filteredMovies"
                :item="movie"
                :key="movie.id"/>
        </section>
    </main>
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapMutations } from "vuex";
    import { orderBy } from "lodash";
    import { firebase } from "@/db";
    import MovieItem from "@/components/MovieItem";

    export default {
        name: "MoviePage",
        components: {
            MovieItem
        },
        methods: {
			...mapMutations([
				"changeOrder",	
				"changeOrderByDesc",
				"setHighestAndLowestRatedBoolean"
			]),
			setOrderBy(orderBy) {
				this.changeOrder(orderBy);
				this.changeOrderByDesc();
			}
		},
        computed: {
            ...mapGetters([
				"order",
				"orderByDesc"
            ]),
            filteredMovies() {
                return orderBy(this.movies, [this.$store.getters.order], this.$store.getters.orderByDesc ? "desc" : "asc");
            }
        },
        firebase
    };
</script>

<style lang="scss">
    .movies__list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 20px;
    }

    .movies__sorting {
        text-align: right;
    }

    .movies__sorting-link {
        color: map-get($colors, 03);

        &.is-active,
        &:hover {
            color: map-get($colors, 01);
        }
    }

    .movie-item {
        img {
            height: 350px;
            width: auto;
            max-width: 100%;
            box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .25);
        }
    }
</style>