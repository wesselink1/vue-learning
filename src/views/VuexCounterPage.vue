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
				@click="showConfirmCounterResetModal = true"
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
				@click="showConfirmNameChangeModal = true"
				:disabled="nameChanged">
				{{ nameChanged ? 'Name was already changed' : 'Change name' }}
			</button>
		</p>

		<ModalConfirm
            v-show="showConfirmCounterResetModal"
            @onConfirm="confirmCounterReset"
            @onCancel="showConfirmCounterResetModal = false"
            title="Reset counter">
            <p>Do you want to reset the counter?</p>
        </ModalConfirm>

		<ModalConfirm
            v-show="showConfirmNameChangeModal"
            @onConfirm="confirmChangeName"
            @onCancel="showConfirmNameChangeModal = false"
            title="Change the name">
            <p>Remember this is not undoable.</p>
        </ModalConfirm>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
	import ModalConfirm from "@/components/ModalConfirm";

	export default {
		name: "VuexCounterPage",
		components: {
            ModalConfirm
        },
		data: () => ({
			showConfirmCounterResetModal: false,
			showConfirmNameChangeModal: false,
			firstName: "James",
			lastName: "Dean",
			nameChanged: false
        }),
		methods: {
			...mapMutations([
				"decrementCounter",
				"incrementCounter"
			]),
			confirmCounterReset() {
				this.$store.commit("resetCounter");
				this.showConfirmCounterResetModal = false;
			},
			confirmChangeName() {
				this.firstName = "Master",
				this.lastName = "of Disaster",
				this.nameChanged = true;
				this.showConfirmNameChangeModal = false;
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

<style lang="scss">
	.counter__buttons {
		.button + .button {
			margin-left: 20px;
		}
	}
</style>
