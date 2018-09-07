<template>
    <div class="featured-movie">
			<p class="featured-movie__poster">
				<router-link
					tag="a"
					:to="{ name: 'movieDetail', params: { id: movie.id, slug: $options.filters.slugify(movie.title) } }">
						<img 
							:src="'/movies/' + movie.poster" 
							:alt="movie.title"
							class="featured-movie__image">
				</router-link>
			</p>

			<h4 class="featured-movie__title">
				<router-link
					tag="a"
					:to="{ name: 'movieDetail', params: { id: movie.id, slug: $options.filters.slugify(movie.title) } }">
					{{ movie.title }} <small>({{ movie.year }})</small>
				</router-link>
			</h4>
		</div>
</template>

<script>
	export default {
		props: [
			'movie'
		]
	}
</script>


<style lang="scss">
	@import "~@/scss/style";

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
		box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .25);
	}
</style>