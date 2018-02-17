<template>
	<main class="counter">
		<h1 class="counter__title">Counter</h1>

		<p class="counter__body">Using Vuex to store the state the counter property.</p>

		<h3 class="counter__sub-title">Vuex stored counter: {{ counter }}</h3>

		<p class="counter__buttons">
			<button @click="incrementCounter" class="counter__button">Increment counter</button>
			<button @click="decrementCounter" class="counter__button">Decrement counter</button>
		</p>

		<hr class="counter__line">

		<h3 class="counter__sub-title">Testing an added computed property when using <code>mapGetters</code> in a spread operator</h3>

		<p class="counter__body">Custom computed property, fullName: {{ fullName }}</p>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";

	export default {
		data() {
			return {
				firstName: "James",
				lastName: "Dean"
			}
		},
		methods: {
			...mapMutations([
				"incrementCounter",
				"decrementCounter"
			])
		},
		computed: {
			...mapGetters([
				"counter"
			]),
			fullName() {
				return this.firstName + " " + this.lastName;
			}
		}
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

	.counter__line {
		height: 0;
		margin: 30px 0;
		border: 0;
		border-top: 1px solid #ccc;
	}
</style>
