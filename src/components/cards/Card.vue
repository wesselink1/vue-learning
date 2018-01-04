<template>
	<div class="card__item" v-bind:class="{ 'is-alert' : total > 50, 'is-danger' : total > 100 }">
		<h3 class="card__item__heading">{{ card.heading }} <small class="card__item__price">{{ card.price }}</small></h3>

		<button v-on:click="buyCard" class="card__item__button" v-bind:disabled="total > 150">Buy card</button>
	</div>
</template>

<script>
	export default {
		props: [
			'card',
			'total'
		],
		methods: {
			buyCard() {
				this.$emit('addToTotal', this.card.price);
			}
		}
	}
</script>

<style scoped>
	.card__item {
		padding: 10px;
		border-radius: 8px;
		border: 1px solid #ddd;
		background-color: green;
		color: white;
		transition: background-color .5s;
	}

	.is-alert {
		background-color: orange;
	}

	.is-danger {
		background-color: red;
	}

	.card__item__heading,
	.card__item__price {
		font-family: 'Roboto', sans-serif;
	}

	.card__item__heading {
		margin: 0 0 10px 0;
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
		cursor: pointer;
	}

	.card__item__button[disabled] {
		cursor: not-allowed;
	}
</style>
