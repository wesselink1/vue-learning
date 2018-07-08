<template>
    <main class="movies">
        <h1 class="heading">Movies</h1>

        <p class="paragraph">Movie overview- and detail page using <strong>vue-router</strong>, a dynamic URL using movie ID and an URL title slug.</p>

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
            <movie
                v-for="movie in filteredMovies"
                :item="movie"
                :key="movie.id">
            </movie>
        </section>
    </main>
</template>

<script>
    import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
    import Movie from "./Movie";

    export default {
        components: {
            Movie
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
                "filteredMovies",
                "movies",
				"order",
				"orderByDesc"
            ])
        }
    };
</script>

<style lang="scss">
    @import "../../scss/style";

    .movies__list {
        @include display-grid;
        @include grid-basic(5, 200px, 20px);
        @include grid-basic-ie-placement(5);
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
            height: 300px;
            width: auto;
        }
    }
</style>