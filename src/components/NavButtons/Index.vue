<template>
	<main class="home">
		<h1 class="heading">Navigation buttons</h1>

		<p class="paragraph">Scripted navigation button using <strong>Vue Router</strong></p>

		<p class="home__buttons">
			<button
				@click="$router.go(-1)"
				class="button button--02">
				Go to back one page
			</button>

			<button
				@click="$router.push({ name: 'buyCards' })"
				class="button button--02">
				Go to Buy Cards demo page
			</button>
			
			<button
				@click="$router.push('/404')"
				class="button button--02">
				Trigger 404 error
			</button>
		</p>
	</main>
</template>

<style lang="scss">
	@import "~@/scss/style";

	.home__buttons {
		@include display-grid;
		max-width: 450px;
	}

	.button {
		margin-bottom: 20px;
	}
</style>
