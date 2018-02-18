<template>
	<main class="counter">
		<h1 class="counter__title">Counter</h1>

		<p class="counter__body">Using Vuex to store the state of the counter property.</p>

		<h3 class="counter__sub-title">Vuex stored counter: {{ counter }}</h3>

		<p class="counter__buttons">
			<button @click="incrementCounter" class="counter__button">Increment counter</button>
			<button @click="decrementCounter" class="counter__button">Decrement counter</button>
		</p>

		<hr class="counter__line">

		<h3 class="counter__sub-title">Testing additional computed properties besides mapGetters</h3>

		<p class="counter__body">FullName: {{ fullName }}</p>

		<p class="counter__body">
			<button class="counter__button" 
				@click="changeName"
				:disabled="nameChanged">
				{{ nameChanged ? 'Name was changed' : 'Change name' }}
			</button>
		</p>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";

	export default {
		data() {
			return {
				firstName: "James",
				lastName: "Dean",
				nameChanged: false,
			}
		},
		methods: {
			...mapMutations([
				"incrementCounter",
				"decrementCounter"
			]),
			changeName() {
				this.firstName = "Master",
				this.lastName = "of Disaster",
				this.nameChanged = true;
			}
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

	.counter__sub-title {
		font-size: 42px;
	}

	.counter__line {
		height: 0;
		margin: 30px 0;
		border: 0;
		border-top: 1px solid #ccc;
	}

	.counter__button {
		padding: 15px 30px;
		color: white;
		cursor: pointer;
		font-size: 26px;
		border-radius: 8px;
		background-color: deeppink;
		transition: background-color .3s;
	}

	.counter__button[disabled] {
		color: #444;
		cursor: not-allowed;
		background-color: #ccc;
	}
</style>
