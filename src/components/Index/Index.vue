<template>
	<main class="overview">
		<nav class="overview__nav">
			<router-link
				tag="div"
				:to="{ name: 'linkNavbuttons' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Nav. buttons
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'linkVuexCounter' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuex counter
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'linkBuyCards' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Buy cards
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'linkTabs' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Tabs
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'linkPug' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Pug
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'linkCustomDirectives' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Custom Directives
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'linkVuelidate' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuelidate
			</router-link>
			<router-link tag="div"
				:to="{ name: 'linkArraySorting' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Array sorting
			</router-link>
			<router-link tag="div"
				:to="{ name: 'linkSlideUpDown' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				SlideUpDown
			</router-link>
			<router-link tag="div"
				:to="{ name: 'linkMovies' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Movies
			</router-link>
		</nav>

		<p class="overview__logo">
			<img src="/static/vuejs-logo.png" alt="Vue logo" class="overview__logo-img">
		</p>

		<hr>

		<h3 class="heading">Featured movie of the minute</h3>

		<div class="featured-movie">
			<p class="featured-movie__poster">
				<router-link
					tag="a"
					:to="{ name: 'linkMovieDetail', params: { id: featuredMovie.id, slug: $options.filters.slugify(featuredMovie.title) } }">
						<img 
							:src="'/static/movies/' + featuredMovie.poster" 
							:alt="featuredMovie.title"
							class="featured-movie__image">
				</router-link>
			</p>

			<h4 class="featured-movie__title">
				<router-link
					tag="a"
					:to="{ name: 'linkMovieDetail', params: { id: featuredMovie.id, slug: $options.filters.slugify(featuredMovie.title) } }">
					{{ featuredMovie.title }} <small>({{ featuredMovie.year }})</small>
				</router-link>
			</h4>
		</div>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		computed: {
			...mapGetters([
				"movies"
			]),
			featuredMovie() {
				let randomMovie = this.movies[Math.floor(Math.random()*this.movies.length)];
				return this.$store.getters.movie(randomMovie.id);
			}
		}
	}
</script>


<style lang="scss">
	@import "../../scss/style";

	.overview__nav {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
		grid-auto-rows: 175px;

		> div {
			@include flexbox;
			@include flex-direction(column);
			@include justify-content(center);
			@include align-items(center);
			border-radius: $border-radius;
			text-align: center;
			font-weight: 700;
			font-size: 24px;
			color: white;
			cursor: pointer;
			font-family: $font-custom;
			transition: background-color .3s, font-size .3s;
			background-color: map-get($colors, 01);

			&:hover {
				font-size: 30px;
				background-color: map-get($colors, 02);
			}
		}
	}

	.overview__logo {
		text-align: center;
	}

	.overview__logo-img {
		width: 400px;
		height: auto;
	}

	.featured-movie__title {
		font-size: 22px;
		font-family: $font-custom;
		font-weight: 300;
		color: map-get($colors, 02);

		a {
			color: inherit;
			text-decoration: none;
		}

		small {
			font-size: 16px;
		}
	}

	.featured-movie__image {
		max-width: 200px;
	}
</style>
