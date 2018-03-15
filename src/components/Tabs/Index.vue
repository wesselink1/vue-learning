<template>
	<main class="dynamic-components">
		<h1 class="dynamic-components__title">Using Vue dynamic components as tabs</h1>

		<p class="dynamic-components__body">
			Easily switch (aria enabled) tabs by changing a Vue data property.
			The selected tab is saved in <strong>Vuex</strong>.
		</p>

		<nav class="dynamic-components__nav">
			<ul class="dynamic-components__tab" ref="tabs" role="tablist" aria-label="Business value">
				<li
					class="dynamic-components__tab-item"
					:class="{ 'is-active' : selectedComponent == 'appCatalog' }">
					<a 
						href="#catalog-tab"
						@click.prevent="selectTab('appCatalog', $event)"
						id="catalog"
						role="tab"
						aria-selected="false"
						aria-controls="catalog-tab">
						Catalog
					</a>
				</li>
				<li
					class="dynamic-components__tab-item"
					:class="{ 'is-active' : selectedComponent == 'appProducts' }">
					<a 
						href="#products-tab"
						@click.prevent="selectTab('appProducts', $event)"
						id="products"
						role="tab"
						aria-selected="false"
						aria-controls="products-tab">
						Products
					</a>
				</li>
				<li
					class="dynamic-components__tab-item"
					:class="{ 'is-active' : selectedComponent == 'appAbout' }">
					<a 
						href="#about-tab"
						@click.prevent="selectTab('appAbout', $event)"
						id="about"
						role="tab"
						aria-selected="true"
						aria-controls="about-tab">
						About
					</a>
				</li>
				<li
					class="dynamic-components__tab-item"
					:class="{ 'is-active' : selectedComponent == 'appContact' }">
					<a 
						href="#contact-tab"
						@click.prevent="selectTab('appContact', $event)"
						id="contact"
						role="tab"
						aria-selected="false"
						aria-controls="contact-tab">
						Contact
					</a>
				</li>
			</ul>
		</nav>

		<component :is="selectedComponent"></component>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
	import About from "./About.vue";
	import Catalog from "./Catalog.vue";
	import Contact from "./Contact.vue";
	import Products from "./Products.vue";

	export default {
		data() {
			return {
				
			}
		},
		components: {
			'appAbout': About,
			'appCatalog': Catalog,
			'appContact': Contact,
			'appProducts': Products
		},
		methods: {
			...mapMutations([
				"setSelectedComponent"
			]),
			selectTab(componentName, event) {
				let isActiveClass = "is-active";
				let ariaSelected = "aria-selected";

				for(let tab of this.$refs.tabs.querySelectorAll("li")) {
					tab.classList.remove(isActiveClass);
					tab.firstChild.setAttribute(ariaSelected, "false");
				}

				event.currentTarget.parentNode.classList.add(isActiveClass);
				event.currentTarget.setAttribute(ariaSelected, "true");

				this.setSelectedComponent(componentName);
				return false;
			}
		},
		computed: {
			...mapGetters([
				"selectedComponent",
			])
		}
	}
</script>

<style>
	.dynamic-components__title,
	.dynamic-components__body,
	.dynamic-components__tab-item a {
		font-family: "Roboto", sans-serif;
	}

	.dynamic-components__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.dynamic-components__body {
		line-height: 1.2;
	}

	.dynamic-components__tab {
		position: relative;
		display: flex;
		margin: 0;
		padding: 0;
	}

	.dynamic-components__tab::after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		content: '';
		display: block;
		width: 100%;
		border-top: 1px solid deepskyblue;
	}

	.dynamic-components__tab-item {
		margin: 0;
		list-style: none;
	}

	.dynamic-components__tab-item + .dynamic-components__tab-item {
		margin-left: 10px;
	}

	.dynamic-components__tab-item a {
		display: block;
		padding: 5px 20px;
		color: white;
		font-weight: 300;
		text-decoration: none;
		cursor: pointer;
		border-width: 1px 1px 0 1px;
		border-style: solid;
		border-radius: 5px 5px 0 0;
		border-color: deepskyblue;
		background-color: deepskyblue;
	}

	.dynamic-components__tab-item:hover a {
		color: white;
		background-color: deepskyblue;
	}

	.dynamic-components__tab-item.is-active a {
		color: deepskyblue;
		border-bottom-color: deepskyblue;
		background-color: white;
	}
</style>
