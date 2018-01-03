<template>
	<div class="card__item">
		<h3 class="card__item__heading">{{ card.heading }}</h3>

		<p class="card__item__price">Price: {{ card.price }}</p>

		<button v-on:click="buyCard" class="card__item__button">Buy card</button>
	</div>
</template>

<script>
	export default {
		props: ['card'],
		methods: {
			buyCard() {
				this.$emit('addToTotal', this.card.price);
			}
		}
	}
</script>

<style>
	.card__item {
		padding: 10px;
		border-radius: 8px;
		border: 1px solid #ddd;
	}

	.card__item__heading,
	.card__item__price {
		font-family: 'Roboto', sans-serif;
	}

	.card__item__heading {
		margin: 0;
		padding: 0;
		font-weight: 700;
	}

	.card__item__price {
		font-weight: 400;
		font-size: 12px;
	}

	.card__item__button {
		border: 1px solid #ddd;
		background-color: #eee;
		border-radius: 3px;
		padding: 4px;
	}
</style>
