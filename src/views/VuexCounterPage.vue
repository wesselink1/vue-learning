<template>
	<main class="counter">
		<h1 class="heading">Counter</h1>

		<h3 class="sub-heading">Vuex stored counter: {{ counter }}</h3>

		<p class="counter__buttons">
			<button
				@click="incrementCounter"
				class="button button--02">
				Increment counter
			</button>

			<button
				@click="decrementCounter"
				class="button button--02"
				:disabled="counter <= 0">
				Decrement counter
			</button>
		</p>

		<hr class="hr">

		<p class="paragraph">Testing additional computed properties besides mapGetters</p>

		<p class="paragraph">FullName: {{ fullName }}</p>

		<p class="paragraph">
			<button 
				class="button button--02"
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
		name: "VuexCounterPage",
		data() {
			return {
				firstName: "James",
				lastName: "Dean",
				nameChanged: false,
			}
		},
		methods: {
			...mapMutations([
				"decrementCounter",
				"incrementCounter"
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
	};
</script>