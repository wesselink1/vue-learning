<template>
	<div class="card__item" :class="{ 'is-alert' : cardsTotal > limit[0], 'is-danger' : cardsTotal > limit[1] }">
		<h3 class="card__item-heading">{{ card.heading }}</h3>

		<p class="card__item-price">{{ card.price | euroCurrency }}</p>

		<button
			@click="buyCard"
			:disabled="cardsTotal > limit[2]"
			class="button button--03">
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
	};
</script>

<style lang="scss">
	@import "../../scss/style";

	.card__item {
		@include flexbox;
		@include flex-direction(column);
		padding: 10px;
		color: white;
		border-radius: $border-radius;
		border: 1px solid #ddd;
		background-color: map-get($colors, 01);
		transition: background-color .5s;
		text-align: center;

		&.is-alert {
			background-color: orange;	
		}

		&.is-danger {
			background-color: red;
		}
	}

	.card__item-heading,
	.card__item-price {
		font-family: $font-custom;
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
</style>
