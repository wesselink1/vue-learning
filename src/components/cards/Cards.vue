<template>
	<main class="cards">
		<h1 class="cards__title">Cards demo</h1>

		<p class="cards__body">
			Using parent and child components. Repeating child components based
			on data array in parent. And having the child $emit() an event to parent.
		</p>

		<p class="cards__body">
			When going over {{ limit[0] }}, the cards will turn orange.
			Going over {{ limit[1] }} will turn them red. And going over {{ limit[2] }} will disable the 'buy' -button.
		</p>

		<h2 class="cards__total">Parent total: {{ total | euroCurrency }}</h2>

		<p class="cards__reset">
			<button @click="resetTotal">Reset total</button>
		</p>

		<div class="cards__grid">
			<app-card v-for="(card, index) in cards" :key="index" :card="card" :total="total" :limit="limit" @addToTotal="addToTotal"></app-card>
		</div>
	</main>
</template>

<script>
	import Card from "./Card.vue";

	export default {
		components: {
			"app-card": Card
		},
		data() {
			return {
				total: 0,
				cards: [
					{ id: 1, heading: "BMW", price: 5.95 },
					{ id: 2, heading: "Google", price: 10.33 },
					{ id: 3, heading: "Twitter", price: 15.99 },
					{ id: 4, heading: "Amazone", price: 50 },
					{ id: 5, heading: "Bol.com", price: 75.25 }
				],
				limit: [
					50,
					100,
					150
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
	.cards__title,
	.cards__body,
	.cards__total {
		font-family: "Roboto", sans-serif;
	}

	.cards__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.cards__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 20px;		
	}
</style>