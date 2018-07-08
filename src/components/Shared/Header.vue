<template>
	<header class="header">
		<h1 class="header__title">SPA learning with Vue, Vuex and vue-router</h1>

		<nav class="header__nav">
			<router-link 
				tag="a"
				:to="{ name: 'homepage' }"
				active-class="is-active"
				exact-active-class="is-exact"
				exact>
				Overview
			</router-link>
		</nav>
	</header>
</template>

<style lang="scss">
	@import "../../scss/style";

	.header {
		margin-bottom: 30px;
		padding-bottom: 10px;
		border-bottom: 1px solid map-get($colors, 04);
	}

	.header__title {
		color: map-get($colors, 02);
		font-weight: 300;
		font-size: 42px;
		font-family: $font-custom;
	}

	.header__nav a {
		font-size: 18px;
		font-weight: 300;
		color: map-get($colors, 01);
		text-decoration: none;
		font-family: $font-custom;
	}

	.header__nav a.is-active {
		color: map-get($colors, 03);
		visibility: hidden;
	}
</style>
