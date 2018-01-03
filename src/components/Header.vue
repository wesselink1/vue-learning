<template>
	<header>
		<h1>Vue SPA learning ground</h1>
		<nav>
			<ul role="navigation">
				<router-link tag="li" :to="{ name: 'linkHome' }" active-class="is-active" exact-active-class="is-exact" exact><a>Home</a></router-link>
				<router-link tag="li" :to="{ name: 'linkAdmin' }" active-class="is-active" exact-active-class="is-exact"><a>Admin</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCards' }" active-class="is-active" exact-active-class="is-exact"><a>Cards</a></router-link>
			</ul>
		</nav>
		<hr>
		<p>Using Vuex Getters: {{ counter }}</p>
	</header>
</template>

<script>
	export default {
		computed: {
			counter() {
				return this.$store.getters.counter;
			}
		}
	}
</script>

<style lang="scss" scoped>
	h1,
	p {
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
	}

	h1 {
		font-size: 32px;
	}

	p {
		font-size: 18px;
	}

	ul {
		display: flex;
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;

		& + & {
			margin-left: 10px;
		}

		a {
			font-family: 'Roboto', sans-serif;
			text-decoration: none;
			color: #000;
		}
	}

	.is-active {
		a {
			font-weight: 700;
		}
	}
</style>
