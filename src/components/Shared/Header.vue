<template>
	<header class="header">
		<h1 class="header__title">{{ appTitle }}</h1>

		<p class="header__body">Username: {{ userName }}</p>

		<p>
			<button @click="changeName">Change name</button>
		</p>

		<appVuexValues></appVuexValues>

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
	import VuexValues from "./VuexValues.vue";

	export default {
		components: {
			"appVuexValues": VuexValues
		},
		data() {
			return {
				newName: "Master of Disaster"
			}
		},
		methods: {
			changeName() {
				this.$store.commit("changeName", this.newName);
			}
		},
		computed: {
			appTitle() {
				return this.$store.getters.appTitle;
			},
			userName() {
				return this.$store.getters.userName;
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
</style>
