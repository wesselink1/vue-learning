<template>
	<main class="lodash">
		<h1 class="lodash__title">Sorting an array with Lodash</h1>

		<p class="lodash__body">State of the sorting is stored in <strong>Vuex</strong>.</p>

		<h2 class="lodash__sub-title">Movie sorting</h2>

		<table class="lodash__movies" cellspacing="0">
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
		methods: {
			...mapMutations([
				"changeOrder",
				"changeOrderByDesc"
			]),
			setOrderBy(orderValue) {
				this.changeOrder(orderValue);
				this.changeOrderByDesc();
			}
		},
		computed: {
			...mapGetters([
				"movies",
				"order",
				"orderByDesc"
			]),
			filteredMovies() {
				return orderBy(this.movies, [this.order], this.orderByDesc ? "desc" : "asc");
			}
		}
	};
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