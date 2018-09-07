<template>
	<main class="overview">
		<nav class="overview__nav">
			<router-link
				tag="div"
				:to="{ name: 'navButtons' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Nav. buttons
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'vuexCounter' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuex counter
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'buyCards' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Buy cards
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'tabs' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Tabs
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'pug' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Pug
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'customDirectives' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Custom Directives
			</router-link>
			<router-link
				tag="div"
				:to="{ name: 'vuelidate' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Vuelidate
			</router-link>
			<router-link tag="div"
				:to="{ name: 'arraySorting' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Array sorting
			</router-link>
			<router-link tag="div"
				:to="{ name: 'slideUpDown' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				SlideUpDown
			</router-link>
			<router-link tag="div"
				:to="{ name: 'moviesOverview' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Movies
			</router-link>
			<router-link tag="div"
				:to="{ name: 'formModules' }"
				class="overview__nav-item"
				active-class="is-active" 
				exact-active-class="is-exact">
				Form modules
			</router-link>
		</nav>

		<p class="overview__logo">
			<img src="/img/vuejs-logo.png" alt="Vue logo" class="overview__logo-img">
		</p>

		<hr>

		<h3 class="heading">Featured movie of the minute</h3>

		<featured-movie
			:movie="featuredMovie">
		</featured-movie>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import FeaturedMovie from "../components/Movies/FeaturedMovie";

	export default {
		components: {
			FeaturedMovie
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
	@import "~@/scss/style";

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
</style>
