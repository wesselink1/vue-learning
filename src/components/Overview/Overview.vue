<template>
	<main class="overview">
		<nav class="overview__nav">
			<router-link tag="div" :to="{ name: 'linkNavbuttons' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact" >Navbuttons</router-link>
			<router-link tag="div" :to="{ name: 'linkCards' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Cards</router-link>
			<router-link tag="div" :to="{ name: 'linkCounter' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Counter</router-link>
			<router-link tag="div" :to="{ name: 'linkDynamicComponents' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Dynamic Components</router-link>
			<router-link tag="div" :to="{ name: 'linkPug' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Pug</router-link>
			<router-link tag="div" :to="{ name: 'linkCustomDirectives' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Custom Directives</router-link>
			<router-link tag="div" :to="{ name: 'linkVuelidate' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Vuelidate</router-link>
			<router-link tag="div" :to="{ name: 'linkLodash' }" class="overview__nav-item" active-class="is-active" exact-active-class="is-exact">Lodash</router-link>
		</nav>

		<p class="overview__logo">
			<img src="../../assets/vuejs-logo.png" alt="Vue logo" class="overview__logo-img">
		</p>
	</main>
</template>

<style>
	.overview__title,
	.overview__body {
		font-family: "Roboto", sans-serif;
	}

	.overview__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.overview__nav {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
		grid-auto-rows: 175px;
	}

	.overview__nav > div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-radius: 8px;
		align-items: center;
		text-align: center;
		font-weight: 700;
		font-size: 24px;
		color: white;
		cursor: pointer;
		font-family: "Roboto", sans-serif;
		transition: background-color .3s, font-size .3s;
		background-color: deepskyblue;
	}

	.overview__nav > div:hover {
		background-color: deeppink;
		font-size: 30px;
	}

	.overview__logo {
		text-align: center;
	}

	.overview__logo-img {
		width: 400px;
		height: auto;
	}
</style>
