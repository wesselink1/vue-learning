<template>
	<div class="card__item" :class="{ 'is-alert' : cardsTotal > limit[0], 'is-danger' : cardsTotal > limit[1] }">
		<h3 class="card__item-heading">{{ card.heading }}</h3>

		<p class="card__item-price">{{ card.price | euroCurrency }}</p>

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
				this.$emit("incrementCardsTotal", this.card.price);
			}
		}
	}
</script>

<style>
	.card__item {
		display: flex;
		flex-direction: column;
		padding: 10px;
		color: white;
		border-radius: 8px;
		border: 1px solid #ddd;
		background-color: deepskyblue;
		transition: background-color .5s;
		text-align: center;
	}

	.card__item:hover {
		
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
		margin: 0 0 auto 0;
		padding: 0;
		font-size: 36px;
		font-weight: 300;
	}

	.card__item-price {
		margin: 0 0 30px 0;
		font-size: 28px;
		font-weight: 300;
	}

	.card__item-button {
		padding: 15px 30px;
		cursor: pointer;
		border-radius: 8px;
		font-size: 26px;
		color: #444;
		border: 0;
		font-family: "Roboto", sans-serif;
		font-weight: 300;
		background-color: white;
	}

	.card__item-button[disabled] {
		cursor: not-allowed;
	}
</style>
