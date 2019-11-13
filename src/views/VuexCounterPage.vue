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

			<button
				@click="confirmCounterReset"
				class="button button--01"
				:disabled="counter == 0">
				Reset counter
			</button>		
		</p>

		<hr class="hr">

		<p class="paragraph">Testing additional computed properties besides mapGetters</p>

		<p class="paragraph">FullName: {{ fullName }}</p>

		<p class="paragraph">
			<button 
				class="button button--02"
				@click="confirmChangeName"
				:disabled="nameChanged">
				{{ nameChanged ? 'Name was already changed' : 'Change name' }}
			</button>
		</p>
	</main>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
	data: () => ({
		firstName: "James",
		lastName: "Dean",
		newFirstName: "Master",
		newLastName: "of Disaster",
		nameChanged: false
	}),
	methods: {
		...mapMutations("VuexCounter", {
			decrementCounter: "decrementCounter",
			incrementCounter: "incrementCounter"
		}),
		confirmCounterReset() {
			this.$modalConfirm({ title: "Reset the counter?", description: "Do you want to reset the counter?" })
				.then(e => {
					this.$store.commit("VuexCounter/resetCounter");
					this.showConfirmCounterResetModal = false;
				})
				.catch(e => {
					console.log(e);
				});				
		},
		confirmChangeName() {
			this.$modalConfirm({ title: "Are your sure you want to change the name?", description: `To: ${this.newFirstName} ${this.newLastName}` })
				.then((response) => {
					this.firstName = this.newFirstName,
					this.lastName = this.newLastName,
					this.nameChanged = true;
					this.showConfirmNameChangeModal = false;
				})
				.catch(e => {
					console.log(e);
				});				
		}
	},
	computed: {
		...mapGetters("VuexCounter", {
			counter: "counter"
		}),
		fullName() {
			return this.firstName + " " + this.lastName;
		}
	}
};
</script>

<style lang="scss">
.counter__buttons {
	.button + .button {
		margin-left: 20px;
	}
}
</style>
