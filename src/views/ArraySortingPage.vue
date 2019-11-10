<template>
	<main class="array-sorting">
		<h1 class="heading">Sorting an array with Lodash</h1>

		<p class="paragraph">State of the sorting is stored in <strong>Vuex</strong>.</p>

		<h2 class="sub-heading">Movie sorting</h2>

		<table class="array-sorting__movies" cellspacing="0">
			<thead>
				<tr>
					<th>
						<span>Poster</span>
					</th>
					<th>
						<a 
							href="javascript:;"
							@click="setOrderBy('title')"
							:class="[
									orderByDesc ? 'sorted-desc' : 'sorted-asc',
									{ 'is-active' : order == 'title' }
								]">
							<span>Title</span>
						</a>
					</th>
					<th>
						<a 
							href="javascript:;"
							@click="setOrderBy('rating')"
							:class="[
									orderByDesc ? 'sorted-desc' : 'sorted-asc',
									{ 'is-active' : order == 'rating' }
								]">
							<span>Rating</span>
						</a>
					</th>
					<th> 
						<a 
							href="javascript:;"
							@click="setOrderBy('year')"
							:class="[
									orderByDesc ? 'sorted-desc' : 'sorted-asc',
									{ 'is-active' : order == 'year' }
								]">
							<span>Year</span>
						</a>
					</th>
					<th>
						<span>Genre</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<ArraySortingRow
					v-for="movie in filteredMovies"
					:movie="movie"
					:key="movie.id"	/>	
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
	import ArraySortingRow from "@/components/ArraySortingRow";

	export default {
		components: {
			ArraySortingRow
		},
		created() {
			this.setHighestAndLowestRatedBoolean();
		},
		methods: {
			...mapMutations("Movies", {
				changeOrder: "changeOrder",	
				changeOrderByDesc: "changeOrderByDesc",
				setHighestAndLowestRatedBoolean: "setHighestAndLowestRatedBoolean"
			}),
			setOrderBy(orderBy) {
				this.changeOrder(orderBy);
				this.changeOrderByDesc();
			}
		},
		computed: {
			...mapGetters("Movies", {
				filteredMovies: "filteredMovies",
				highestRatedMovie: "highestRatedMovie",
				lowestRatedMovie: "lowestRatedMovie",
				movies: "movies",
				order: "order",
				orderByDesc: "orderByDesc"
			})			
		}
	};
</script>

<style lang="scss">
	.array-sorting__movies {
		border: 1px solid map-get($colors, 05);

		tbody tr:nth-child(odd) {
			background-color: map-get($colors, 05);
		}
	}	
</style>