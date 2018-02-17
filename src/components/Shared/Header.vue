<template>
	<header class="header">
		<h1 class="header__title">Vue SPA learning ground</h1>

		<div class="vuex-demo">
			<h2 class="vuex-demo__title">Vuex state values</h2>			

			<p class="vuex-demo__body">
				Your cards total counter is: {{ cardsTotal | euroCurrency }}
			</p>

			<p class="vuex-demo__body">
				Your increment is: {{ counter }}
			</p>
		</div>

		<nav class="header__nav">
			<ul class="header__nav-items" role="navigation">
				<router-link tag="li" :to="{ name: 'linkHome' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact" exact><a>Home</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCards' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Cards</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCounter' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Counter</a></router-link>
				<router-link tag="li" :to="{ name: 'linkDynamicComponents' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Dynamic Components</a></router-link>
				<router-link tag="li" :to="{ name: 'linkPug' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Pug</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCustomDirectives' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Custom Directives</a></router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		computed: {
			cardsTotal() {
				return this.$store.getters.cardsTotal;
			},
			counter() {
				return this.$store.getters.counter;
			}
		}
	}
</script>

<style>
	.header {
		margin-bottom: 30px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}

	.header__title,
	.header__body {
		font-weight: 300;
		font-family: "Roboto", sans-serif;
	}

	.header__title {
		color: deeppink;
		font-size: 42px;
	}

	.header__body {
		font-size: 18px;
	}

	.header__nav-items {
		display: flex;
		margin: 0;
		padding: 0;
	}

	.header__nav-item {
		list-style: none;
	}

	.header__nav-item + .header__nav-item {
		margin-left: 10px;
	}

	.header__nav-item a {
		color: #000;
		font-weight: 700;
		text-decoration: none;
		font-family: "Roboto", sans-serif;
	}

	.header__nav-item.is-active a {
		color: deepskyblue;
	}

	.vuex-demo {
		margin-bottom: 40px;
		padding: 20px;
		border-radius: 8px;
		border: 1px solid #ccc;
	}

	.vuex-demo__title,
	.vuex-demo__body {
		font-weight: 300;
		font-family: "Roboto", sans-serif;
	}

	.vuex-demo__title {
		margin-top: 0;
		color: deepskyblue;
		font-size: 26px;
	}

	.vuex-demo__body {
		font-size: 18px;
	}

	.vuex-demo__body:last-child {
		margin-bottom: 0;
	}
</style>
