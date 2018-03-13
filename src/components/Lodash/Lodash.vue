<template>
	<main class="lodash">
		<h1 class="lodash__title">Lodash</h1>

		<table class="lodash__movies" cellspacing="0">
			<thead>
				<tr>
					<th>Title</th>
					<th>Rating</th>
					<th>Year</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="movie in _.orderBy(movies, ['rating'])">
					<td>{{ movie.title }}</td>
					<td>{{ movie.rating }}</td>
					<td>{{movie.year}}</td>
				</tr>
			</tbody>
		</table>
	</main>
</template>

<script>
	import _ from "lodash";

	export default {
		components: {
			
		},
		data() {
			return {
				orderBy: "rating",
				movies: [
					{
						"title": "The Last Jedi",
						"rating": 9,
						"year": 2017
					},
					{
						"title": "Conan: The Barbarian",
						"rating": 7,
						"year": 1983
					},
					{
						"title": "Lost in Space",
						"rating": 7.5,
						"year": 2010
					},
					{
						"title": "The Shawshank Redemption",
						"rating": 9.5,
						"year": 1999
					},
					{
						"title": "The Revenant",
						"rating": 8,
						"year": 2016
					},
					{
						"title": "Home Alone 2",
						"rating": 5.5,
						"year": 1995
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.lodash__movies th,
	.lodash__movies td,
	.lodash__title {
		font-family: "Roboto", sans-serif;
	}

	.lodash__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.lodash__movies th,
	.lodash__movies td {
		padding: 20px;
	}

	.lodash__movies th {
		font-weight: 300;
		font-size: 32px;
		color: deeppink;
		text-align: left;
	}

	.lodash__movies td {
		font-size: 22px;
	}

	.lodash__movies tbody tr:nth-child(odd) {
		background-color: #eee;
	}
</style>