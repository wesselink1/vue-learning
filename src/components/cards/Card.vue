<template>
	<div class="card__item" :class="{ 'is-alert' : cardsTotal > limit[0], 'is-danger' : cardsTotal > limit[1] }">
		<h3 class="card__item-heading">{{ card.heading }} <small class="card__item-price">{{ card.price | euroCurrency }}</small></h3>

		<button
			@click="buyCard" class="card__item-button"
			:disabled="cardsTotal > limit[2]">
			Buy card
		</button>
	</div>
</template>

<script>
	export default {
		props: [
			"card",
			"cardsTotal",
			"limit"
		],
		methods: {
			buyCard() {
				this.$emit("addToTotal", this.card.price);
			}
		}
	}
</script>

<style>
	.card__item {
		padding: 10px;
		color: white;
		border-radius: 8px;
		border: 1px solid #ddd;
		background-color: green;
		transition: background-color .5s;
	}

	.card__item.is-alert {
		background-color: orange;
	}

	.card__item.is-danger {
		background-color: red;
	}

	.card__item-heading,
	.card__item-price {
		font-family: "Roboto", sans-serif;
	}

	.card__item-heading {
		margin: 0 0 10px 0;
		padding: 0;
		font-weight: 700;
	}

	.card__item-price {
		font-size: 12px;
		font-weight: 700;
	}

	.card__item-button {
		padding: 4px;
		cursor: pointer;
		border-radius: 3px;
		border: 1px solid #ddd;
		background-color: #eee;
	}

	.card__item-button[disabled] {
		cursor: not-allowed;
	}
</style>
