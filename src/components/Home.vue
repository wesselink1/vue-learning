<template>
	<main>
		<h1>Dutchwebworks homepage</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ab, adipisci mollitia deserunt nesciunt ullam non illo reiciendis perferendis fuga.</p>
		<p>Nisi suscipit, rem! Repellendus voluptate perferendis at animi, reprehenderit quidem illum, error veniam est perspiciatis ipsam autem harum tempore vero.</p>

		<p>
			<button v-on:click="goToAdmin">Go to the admin area</button>
		</p>

		<h3>{{ counter }}</h3>

		<p>
			<button v-on:click="btnIncrementCounter">Increment counter</button>
			<button v-on:click="btnDecrementCounter">Decrement counter</button>
		</p>
	</main>
</template>

<script>
	export default {
		computed: {
			counter() {
				return this.$store.state.counter;
			}
		},
		methods: {
			goToAdmin() {
				this.$router.push({ name: 'linkAdmin' });
			},
			btnIncrementCounter() {
				this.$store.state.counter++;
			},
			btnDecrementCounter() {
				if(this.$store.state.counter > 0) {
					this.$store.state.counter--;
				}
			}
		}
	}
</script>

<style scoped>
	h1,
	p {
		font-family: 'Roboto', sans-serif;
	}
</style>
