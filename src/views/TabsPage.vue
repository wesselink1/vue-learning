<template>
	<main class="tab-components">
		<h1 class="heading">Using Vue dynamic components as tabs</h1>

		<p class="paragraph">
			Easily switch (aria enabled) tabs by changing a Vue data property.
			The selected tab is saved in <strong>Vuex</strong>.
		</p>

		<TabList
			class="tabs"
			navClass="tabs__nav"
			ariaLabel="Business value"
			listClass="tabs__list">
			<TabItem
				name="Catalog"
				class="tabs__panel">

				<h2 class="heading">Catalog</h2>

				<p class="paragraph">
					Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
				</p>

				<p class="paragraph">
					Adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
				</p>
			</TabItem>

			<TabItem
				name="Products"
				class="tabs__panel">
				
				<h2 class="heading">These are our products</h2>

				<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sunt doloremque, incidunt adipisci maiores, minus facere modi vel similique ad!</p>

				<p class="paragraph">Amet eum provident rerum obcaecati dolorum distinctio animi nisi, dolorem in quidem inventore maiores, possimus tenetur atque. Soluta, alias, vel.</p>

				<p class="paragraph">Veritatis iure blanditiis odio magnam nesciunt culpa sapiente consectetur molestiae, minus itaque quaerat amet cum qui officia laborum rerum. Non.</p>
			</TabItem>

			<TabItem
				name="About"
				class="tabs__panel">
				
				<h2 class="heading">This is our story</h2>

				<p class="paragraph">Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.</p>
			</TabItem>

			<TabItem
				name="Contact"
				class="tabs__panel">
				
				<h2 class="heading">Contact</h2>

				<p class="paragraph">
					Consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
				</p>

				<p class="paragraph">
					Fistinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
				</p>
			</TabItem>			
		</TabList>
	</main>
</template>

<script>
	import { mapGetters } from "vuex";
	import TabItem from "@/components/TabItem";
	import TabList from "@/components/TabList";

	export default {
		components: {
			'TabItem': TabItem,
			'TabList': TabList
		},
		computed: {
			...mapGetters([
				"selectedTabComponent"
			])
		}
	};
</script>
