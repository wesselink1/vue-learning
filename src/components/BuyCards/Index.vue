<template>
	<main class="cards">
		<h1 class="cards__title">Buy cards, calculation demo</h1>

		<p class="cards__body">
			Using parent and child components. Repeating child components based
			on data array in parent. And having the child <code>$emit()</code> an event to parent.			
		</p>

		<ul class="cards__list">
			<li>When going <strong>over {{ limit[0] }}, the cards will turn orange</strong>.</li>
			<li>Going <strong>over {{ limit[1] }} will turn them red</strong>.</li>
			<li>And going <strong>over {{ limit[2] }} will disable</strong> the 'Buy card' -button.</li>
		</ul>

		<h2 class="cards__total">Vuex stored total: {{ cardsTotal | euroCurrency }}</h2>

		<p class="cards__reset">
			<button class="cards__reset-btn" @click="resetCardsTotal">Reset total</button>
		</p>

		<div class="cards__grid">
			<appCard
				v-for="(card, index) in cards"
				:key="index"
				:card="card"
				:cardsTotal="cardsTotal"
				:limit="limit"
				@incrementCardsTotal="incrementCardsTotal">
			</appCard>
		</div>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
	import Card from "./Card";

	export default {
		components: {
			"appCard": Card
		},
		data() {
			return {				
				
			}
		},
		methods: {
			...mapMutations([
				"incrementCardsTotal",
				"resetCardsTotal",
			])
		},
		computed: {
			...mapGetters([
				"cards",
				"cardsTotal",
				"limit"
			])
		}
	};
</script>

<style>
	.cards__title,
	.cards__body,
	.cards__list,
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
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-auto-rows: 200px;
		grid-gap: 10px;
	}

	.cards__total {
		font-size: 42px;
	}

	.cards__reset-btn {
		padding: 15px 30px;
		color: white;
		cursor: pointer;
		font-size: 26px;
		border: 0;
		border-radius: 8px;
		background-color: deeppink;
	}
</style>
