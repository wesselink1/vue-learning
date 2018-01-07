<template>
	<main class="counter">
		<h1 class="counter__title">Counter</h1>

		<p class="counter__body">Using Vuex to store the state of a property</p>

		<h3 class="counter__sub-title">Vuex stored counter: {{ counter }}</h3>

		<p class="counter__buttons">
			<button @click="btnIncrementCounter" class="counter__button">Increment counter</button>
			<button @click="btnDecrementCounter" class="counter__button">Decrement counter</button>
		</p>
	</main>
</template>

<script>
	export default {		
		methods: {
			btnIncrementCounter() {
				this.$store.commit("incrementCounter");
			},
			btnDecrementCounter() {
				this.$store.commit("decrementCounter");				
			}
		},
		computed: {
			counter() {
				return this.$store.getters.counter;
			}
		},
	}
</script>

<style>
	.counter__title,
	.counter__sub-title,
	.counter__body {
		font-family: "Roboto", sans-serif;
	}

	.counter__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}
</style>
