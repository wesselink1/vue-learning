<template>
	<main class="array-sorting">
		<h1 class="heading">Sorting an array with Lodash</h1>

		<p class="paragraph">State of the sorting is stored in <strong>Vuex</strong>.</p>

		<h2 class="sub-heading">Movie sorting</h2>

		<table class="array-sorting__movies" cellspacing="0">
			<thead>
				<tr>
					<th 
						@click="setOrderBy('title')"
						:class="[
								orderByDesc ? 'sorted-desc' : 'sorted-asc',
								{ 'is-active' : order == 'title' }
							]">
						<span>Title</span>
					</th>
					<th 
						@click="setOrderBy('rating')"
						:class="[
								orderByDesc ? 'sorted-desc' : 'sorted-asc',
								{ 'is-active' : order == 'rating' }
							]">
						<span>Rating</span>
					</th>
					<th 
						@click="setOrderBy('year')"
						:class="[
								orderByDesc ? 'sorted-desc' : 'sorted-asc',
								{ 'is-active' : order == 'year' }
							]">
						<span>Year</span>
					</th>
					<th 
						@click="setOrderBy('genre')"
						:class="[
								orderByDesc ? 'sorted-desc' : 'sorted-asc',
								{ 'is-active' : order == 'genre' }
							]">
						<span>Genre</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr 
					v-for="(movie, index) in filteredMovies"
					:key="index"
					:class="{ 'is-highest' : movie.highest, 'is-lowest' : movie.lowest }">
					<td>
						<router-link
							tag="a"
							:to="'/cinema/' + movie.id + '/' + $options.filters.slugify(movie.title)"
							class="array-sorting__link"
							active-class="is-active"
							exact-active-class="is-exact">
							{{ movie.title }} &rsaquo; 
						</router-link>
					</td>
					<td>{{ movie.rating }}</td>
					<td>{{ movie.year }}</td>
					<td>{{ $options.filters.inlineList(movie.genre) }}</td>
				</tr>
			</tbody>
		</table>

		<h2 class="sub-heading">Highest rated movie</h2>

		<p class="paragraph">{{ highestRatedMovie.title }}, rated a {{ highestRatedMovie.rating }} from the year {{ highestRatedMovie.year }}.</p>

		<h2 class="sub-heading">Lowest rated movie</h2>
		
		<p class="paragraph">{{ lowestRatedMovie.title }}, rated a {{ lowestRatedMovie.rating }} from the year {{ lowestRatedMovie.year }}.</p>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";

	export default {
		created() {
			this.setHighestAndLowestRatedBoolean();
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
				"highestRatedMovie",
				"lowestRatedMovie",
				"cinemaList",
				"order",
				"orderByDesc"
			]),
			
		}
	};
</script>

<style lang="scss">
	@import "../../scss/style";

	.array-sorting__movies {
		border: 1px solid map-get($colors, 05);

		tbody tr:nth-child(odd) {
			background-color: map-get($colors, 05);
		}

		tr {
			&.is-highest td {
				color: green;
			}

			&.is-lowest td {
				color: red;
			}
		}

		th,
		td {
			font-family: $font-custom;
			padding: 20px;
		}

		th {
			font-weight: 700;
			font-size: 32px;
			color: black;
			text-align: left;
			cursor: pointer;
			transition: .3s color;

			span::after {
				position: relative;
				top: 0px;
				left: 15px;
				display: inline-block;
				visibility: hidden;
				width: 0px;
				height: 0px;
				overflow: hidden;
				margin-right: 10px;
				content: '';
				border: 10px;
				border-color: transparent;
				border-width: 10px;
				border-style: solid;
			}

			&.is-active span::after {
				visibility: visible;
			}

			&.sorted-asc span::after {
				top: 5px;
				border-top-color: map-get($colors, 01);
			}

			&.sorted-desc span::after {
				top: -5px;
				border-bottom-color: map-get($colors, 01);
			}

			&:hover,
			&.is-active {
				color: map-get($colors, 01);
			}
		}

		td {
			font-size: 22px;
		}
	}

	.array-sorting__link {
		color: inherit;
		text-decoration: none;

		&:hover {
			color: map-get($colors, 02);
		}
	}
</style>