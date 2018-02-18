<template>
	<header class="header">
		<h1 class="header__title">SPA learning with Vue, Vuex and vue-router</h1>

		<nav class="header__nav">
			<router-link tag="a" :to="{ name: 'linkOverview' }" active-class="is-active" exact-active-class="is-exact" exact>Overview</router-link>
		</nav>
	</header>
</template>

<style>
	.header {
		margin-bottom: 30px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}

	.header__title {
		color: deeppink;
		font-weight: 300;
		font-size: 42px;
		font-family: "Roboto", sans-serif;
	}

	.header__nav a {
		font-size: 18px;
		font-weight: 300;
		color: deepskyblue;
		text-decoration: none;
		font-family: "Roboto", sans-serif;
	}

	.header__nav a.is-active {
		color: #444;
		visibility: hidden;
	}
</style>
