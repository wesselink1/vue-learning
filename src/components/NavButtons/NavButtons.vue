<template>
	<main class="home">
		<h1 class="home__title">Navigation buttons</h1>

		<p class="home__body">Scripted navigation button using <strong>Vue Router</strong></p>

		<p class="home__buttons">
			<button @click="$router.go(-1)" class="home__button">Go to back one page</button>
			<button @click="$router.push({ name: 'linkBuyCards' })" class="home__button">Go to Buy Cards demo page</button>
			<button @click="$router.push('/404')" class="home__button">Trigger 404 error</button>
		</p>
	</main>
</template>

<style>
	.home__title,
	.home__body {
		font-family: "Roboto", sans-serif;
	}

	.home__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.home__buttons {
		display: grid;
		max-width: 450px;
	}

	.home__button {
		display: block;
		margin-bottom: 20px;
		padding: 15px 30px;
		color: white;
		cursor: pointer;
		font-size: 26px;
		border: 0;
		border-radius: 8px;
		background-color: deeppink;
	}
</style>
