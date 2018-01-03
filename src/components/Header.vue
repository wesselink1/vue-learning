<template>
	<header>
		<p>Dutchwebworks logo</p>
		<nav>
			<ul role="navigation">
				<router-link tag="li" :to="{ name: 'linkHome' }" active-class="is-active" exact-active-class="is-exact" exact><a>Home</a></router-link>
				<router-link tag="li" :to="{ name: 'linkAdmin' }" active-class="is-active" exact-active-class="is-exact"><a>Admin</a></router-link>
				<router-link tag="li" :to="{ name: 'linkCards' }" active-class="is-active" exact-active-class="is-exact"><a>Cards</a></router-link>
			</ul>
		</nav>
		<p>{{ counter }}</p>
		<hr>
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
	p {
		font-family: 'Roboto', sans-serif;
		font-weight: 300;
		font-size: 32px;
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
		}
	}
</style>
