<template>
	<main>
		<h1>Dutchwebworks homepage</h1>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ab, adipisci mollitia deserunt nesciunt ullam non illo reiciendis perferendis fuga.</p>
		<p>Nisi suscipit, rem! Repellendus voluptate perferendis at animi, reprehenderit quidem illum, error veniam est perspiciatis ipsam autem harum tempore vero.</p>

		<p>
			<button v-on:click="goToAdmin">Go to the admin area</button>
		</p>
	</main>
</template>

<script>
	export default {
		methods: {
			goToAdmin() {
				this.$router.push({ name: 'linkAdmin' });
			}
		}
	}
</script>