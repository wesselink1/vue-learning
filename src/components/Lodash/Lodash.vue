<template>
	<main class="lodash">
		<h1 class="lodash__title">Lodash array sorting</h1>

		<p class="lodash__body">Click on a table heading to sort.</p>

		<h2 class="lodash__sub-title">Movie sorting</h2>

		<table class="lodash__movies" cellspacing="0">
			<thead>
				<tr>
					<th 
						@click="setOrderBy('title')"
						:class="[ changeOrderByDesc ? 'sorted-desc' : 'sorted-asc', { 'is-active' : order == 'title' }]">
						<span>Title</span>
					</th>
					<th 
						@click="setOrderBy('rating')"
						:class="[ changeOrderByDesc ? 'sorted-desc' : 'sorted-asc', { 'is-active' : order == 'rating' }]">
						<span>Rating</span>
					</th>
					<th 
						@click="setOrderBy('year')"
						:class="[ changeOrderByDesc ? 'sorted-desc' : 'sorted-asc', { 'is-active' : order == 'year' }]">
						<span>Year</span>
					</th>
					<th 
						@click="setOrderBy('genre')"
						:class="[ changeOrderByDesc ? 'sorted-desc' : 'sorted-asc', { 'is-active' : order == 'genre' }]">
						<span>Genre</span>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="movie in filteredMovies">
					<td>{{ movie.title }}</td>
					<td>{{ movie.rating }}</td>
					<td>{{ movie.year }}</td>
					<td>{{ movie.genre }}</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
	import { orderBy } from "lodash";

	export default {
		data() {
			return {
				movies: [
					{
						"title": "The Last Jedi",
						"rating": 7.4,
						"year": 2017,
						"genre": "Science-Fiction"
					},
					{
						"title": "Conan: The Barbarian",
						"rating": 6.9,
						"year": 1982,
						"genre": "Adventure"
					},
					{
						"title": "Lost in Space",
						"rating": 5.2,
						"year": 1998,
						"genre": "Adventure"
					},
					{
						"title": "The Shawshank Redemption",
						"rating": 9.3,
						"year": 1994,
						"genre": "Crime"
					},
					{
						"title": "The Revenant",
						"rating": 8.0,
						"year": 2015,
						"genre": "History"
					},
					{
						"title": "Home Alone 2",
						"rating": 6.6,
						"year": 1992,
						"genre": "Comedy"
					},
					{
						"title": "The Shining",
						"rating": 8.4,
						"year": 1980,
						"genre": "Horror"
					}
				]
			}
		},
		methods: {
			...mapMutations([
				"order",
				"changeOrderByDesc"
			]),
			setOrderBy(orderValue) {
				this.$store.commit("order", orderValue);
				this.$store.commit("changeOrderByDesc");
			}
		},
		computed: {
			...mapGetters([
				"order",
				"orderByDesc"
			]),
			filteredMovies() {
				return orderBy(this.movies, [this.order], this.orderByDesc ? "desc" : "asc");
			}
		}
	}
</script>

<style>
	.lodash__movies {
		border: 1px solid #eee;
	}

	.lodash__movies th,
	.lodash__movies td,
	.lodash__title,
	.lodash__sub-title,
	.lodash__body {
		font-family: "Roboto", sans-serif;
	}

	.lodash__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.lodash__sub-title {
		font-size: 42px;
	}

	.lodash__movies th,
	.lodash__movies td {
		padding: 20px;
	}

	.lodash__movies th {
		font-weight: 700;
		font-size: 32px;
		color: black;
		text-align: left;
		cursor: pointer;
	}

	.lodash__movies th span::after {
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

	.lodash__movies th.is-active span::after {
		visibility: visible;
	}

	.lodash__movies th.sorted-asc span::after {
		top: 5px;
		border-top-color: deepskyblue;
	}

	.lodash__movies th.sorted-desc span::after {
		top: -5px;
		border-bottom-color: deepskyblue;
	}

	.lodash__movies th.is-active,
	.lodash__movies th:hover {
		color: deepskyblue;
	}

	.lodash__movies td {
		font-size: 22px;
	}

	.lodash__movies tbody tr:nth-child(odd) {
		background-color: #eee;
	}
</style>