<template>
	<main class="home">
		<h1 class="heading">Navigation buttons</h1>

		<p
			class="paragraph"
			v-fancy.delayed="{ classname: 'fancy', delay: 2000 }">
			Scripted navigation button using <strong>Vue Router</strong>
		</p>

		<p>
			<button
				class="button button--01"
				@click="confirmThis">
				Test me
			</button>
		</p>

		<p class="home__buttons">
			<button
				@click="$router.go(-1)"
				class="button button--02">
				Go to back one page
			</button>

			<button
				@click="$router.push({ name: 'BuyCardsPage' })"
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

<script>
	export default {
		name: "NavButtonsPage",
		methods: {
			confirmThis() {
				this.$modalConfirm("Do you want to delete this?")
					.then((response) => {
						console.log(`[modal test] ${response}`);
					})
					.catch((response) => {
						console.log(`[modal test] ${response}`);
					})
			}
		}
	}
</script>

<style lang="scss">
	.home__buttons {
		@include display-grid;
		max-width: 450px;
	}

	.button {
		margin-bottom: 20px;
	}

	.paragraph {
		transition: .3s background-color, .3s color;
		padding: 10px 20px;
	}

	p.fancy {
		color: white;
		border-radius: 10px;
		background-color: deeppink;
	}
</style>
