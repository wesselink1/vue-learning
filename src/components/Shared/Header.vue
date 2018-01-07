<template>
	<header class="header">
		<h1 class="header__title">Vue SPA learning ground</h1>

		<nav class="header__nav">
			<ul class="header__nav-items" role="navigation">
				<router-link tag="li" :to="{ name: 'linkHome' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact" exact><a>Home</a></router-link>
				<router-link tag="li" :to="{ name: 'linkAdmin' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Admin</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCards' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Cards</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCounter' }" class="header__nav-item" active-class="is-active" exact-active-class="is-exact"><a>Counter</a></router-link>
			</ul>
		</nav>
	</header>
</template>

<script>
	export default {
		
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
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
	}

	.header__title {
		font-size: 42px;
		color: deeppink;
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
		font-family: 'Roboto', sans-serif;
		text-decoration: none;
		color: #000;
		font-weight: 700;
	}

	.header__nav-item.is-active a {
		color: deepskyblue;
	}
</style>
