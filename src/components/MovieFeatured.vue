<template>
    <div class="movie-featured">
			<p class="movie-featured__poster">
				<router-link
					tag="a"
					:to="{ name: 'MovieDetailPage', params: { id: movie.id, slug: $options.filters.slugify(movie.title) } }">
						<img 
							:src="'/img/movies/' + movie.poster" 
							:alt="movie.title"
							class="movie-featured__image">
				</router-link>
			</p>

			<h4 class="movie-featured__title">
				<router-link
					tag="a"
					:to="{ name: 'MovieDetailPage', params: { id: movie.id, slug: $options.filters.slugify(movie.title) } }">
					{{ movie.title }} <small>({{ movie.year }})</small>
				</router-link>
			</h4>
		</div>
</template>

<script>
	export default {
		name: "MovieFeatured",
		props: {
			movie: Object,
			required: true
		}
	}
</script>


<style lang="scss">
	.movie-featured__title {
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

	.movie-featured__image {
		max-width: 200px;
		box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .25);
	}
</style>