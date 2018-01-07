<template>
	<main class="home">
		<h1 class="home__title">Homepage</h1>

		<p class="home__body">Learning various aspects of Vue Webpack Simple SPA setup.</p>

		<h2 class="home__sub-title">Scripted nav button using Vue Router</h2>

		<p class="home__buttons">
			<button @click="goToCards" class="home__button">Go to the cards demo page</button>
			<button @click="goToError404" class="home__button">Go to 404 error page</button>
		</p>
	</main>
</template>

<script>
	export default {
		methods: {
			goToCards() {
				this.$router.push({ name: "linkCards" });
			},
			goToError404() {
				this.$router.push('/404');
			},
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
