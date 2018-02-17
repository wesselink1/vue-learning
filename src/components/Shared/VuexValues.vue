<template>
	<div class="vuex-values">
		<h2 class="vuex-values__title">Vuex state values</h2>			

		<p class="vuex-values__body">
			Your cards total counter is: {{ cardsTotal | euroCurrency }}
		</p>

		<p class="vuex-values__body">
			Your increment is: {{ counter }}
		</p>
	</div>
</template>

<script>
	export default {
		computed: {
			cardsTotal() {
				return this.$store.getters.cardsTotal;
			},
			counter() {
				return this.$store.getters.counter;
			}
		}
	}
</script>

<style>
	.vuex-values {
		margin-bottom: 40px;
		padding: 20px;
		border-radius: 8px;
		border: 1px solid #ccc;
	}

	.vuex-values__title,
	.vuex-values__body {
		font-weight: 300;
		font-family: "Roboto", sans-serif;
	}

	.vuex-values__title {
		margin-top: 0;
		color: deepskyblue;
		font-size: 26px;
	}

	.vuex-values__body {
		font-size: 18px;
	}

	.vuex-values__body:last-child {
		margin-bottom: 0;
	}
</style>