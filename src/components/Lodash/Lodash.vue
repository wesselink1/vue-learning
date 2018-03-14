<template>
	<main class="lodash">
		<h1 class="lodash__title">Lodash array sorting</h1>

		<p class="lodash__body">Click on a table heading to sort.</p>

		<h2 class="lodash__sub-title">Movie sorting</h2>

		<table class="lodash__movies" cellspacing="0">
			<thead>
				<tr>
					<th 
						@click="orderBy = 'title', orderByDesc = !orderByDesc"
						:class="{ 'is-active' : orderBy == 'title' }">
						Title
					</th>
					<th 
						@click="orderBy = 'rating', orderByDesc = !orderByDesc" 
						:class="{ 'is-active' : orderBy == 'rating' }">
						Rating
					</th>
					<th 
						@click="orderBy = 'year', orderByDesc = !orderByDesc" 
						:class="{ 'is-active' : orderBy == 'year' }">
						Year
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="movie in filteredMovies">
					<td>{{ movie.title }}</td>
					<td>{{ movie.rating }}</td>
					<td>{{ movie.year }}</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>

<script>
	import { orderBy } from "lodash";

	export default {
		data() {
			return {
				orderBy: "year",
				orderByDesc: false,
				movies: [
					{
						"title": "The Last Jedi",
						"rating": 7.4,
						"year": 2017
					},
					{
						"title": "Conan: The Barbarian",
						"rating": 6.9,
						"year": 1982
					},
					{
						"title": "Lost in Space",
						"rating": 5.2,
						"year": 1998
					},
					{
						"title": "The Shawshank Redemption",
						"rating": 9.3,
						"year": 1994
					},
					{
						"title": "The Revenant",
						"rating": 8.0,
						"year": 2015
					},
					{
						"title": "Home Alone 2",
						"rating": 6.6,
						"year": 1992
					}
				]
			}
		},
		computed: {
			filteredMovies() {
				return orderBy(this.movies, [this.orderBy], this.orderByDesc ? "desc" : "asc");
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