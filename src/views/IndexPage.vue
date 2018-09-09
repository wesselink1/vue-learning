<template>
	<main class="overview">
		<nav class="overview__nav">
			<router-link
				tag="div"
				:to="{ name: 'navButtonsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Nav. buttons
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'vuexCounterPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuex counter
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'buyCardsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Buy cards
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'tabsPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Tabs
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'pugPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Pug
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'customDirectivesPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Custom Directives
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'vuelidatePage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuelidate
			</router-link>
			<router-link tag="div"
				:to="{ name: 'arraySortingPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Array sorting
			</router-link>
			<router-link tag="div"
				:to="{ name: 'slideUpDownPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				SlideUpDown
			</router-link>
			<router-link tag="div"
				:to="{ name: 'moviesPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Movies
			</router-link>
			<router-link tag="div"
				:to="{ name: 'formModulesPage' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Form modules
			</router-link>
		</nav>

		<p class="overview__logo">
			<img src="@/assets/img/vuejs-logo.png" alt="Vue logo" class="overview__logo-img">
		</p>

		<hr>

		<h3 class="heading">Featured movie of the minute</h3>

		<movie-featured
			:movie="featuredMovie">
		</movie-featured>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import MovieFeatured from "@/components/MovieFeatured";

	export default {
		components: {
			MovieFeatured
		},
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
		width: 200px;
		height: auto;
	}
</style>
