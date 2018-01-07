<template>
	<main class="home">
		<h1 class="home__title">Homepage</h1>

		<p class="home__body">Learning various aspects of Vue Webpack Simple SPA setup.</p>

		<h2 class="home__sub-title">Scripted nav button using vue-router</h2>

		<p class="home__buttons">
			<button @click="goToAdmin" class="home__button">Go to the admin area</button>
		</p>
	</main>
</template>

<script>
	export default {
		methods: {
			goToAdmin() {
				this.$router.push({ name: "linkAdmin" });
			}
		}
	}
</script>

<style>
	.home__title,
	.home__sub-title,
	.home__body {
		font-family: "Roboto", sans-serif;
	}

	.home__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}
</style>
