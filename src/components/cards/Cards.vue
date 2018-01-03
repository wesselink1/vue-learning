<template>
	<section>
		<h2 class="cards__total">Total: {{ total }}</h2>

		<p>
			<button v-on:click="resetTotal">Reset total</button>
		</p>

		<div class="cards">
			<appCard v-for="card in cards" v-bind:card="card" v-on:addToTotal="addToTotal"></appCard>
		</div>
	</section>
</template>

<script>
	import Card from './Card.vue';

	export default {
		components: {
			appCard: Card
		},
		data() {
			return {
				total: 0,
				cards: [
					{ id: 1, heading: 'BMW', price: 5 },
					{ id: 2, heading: 'Google', price: 10 },
					{ id: 3, heading: 'Twitter', price: 15 },
					{ id: 4, heading: 'Amazone', price: 22 },
					{ id: 5, heading: 'Bol.com', price: 88 },
					{ id: 6, heading: 'Tweakers.com', price: 55 },
				]
			}
		},
		methods: {
			addToTotal(value) {
				this.total += value;
			},
			resetTotal() {
				this.total = 0;
			}
		}
	}
</script>

<style>
	.cards {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 20px;
	}
</style>
