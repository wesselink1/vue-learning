<template>
	<main class="slideupdown">
		<h1 class="heading">Slide Up and Down</h1>

		<p class="paragraph">Using the <a href="https://github.com/danieldiekmeier/vue-slide-up-down/" class="slideupdown__link">vue-slide-up-down component</a>.</p>

		<p class="paragraph">jQuery like slideUp() and slideDown() functions</p>

		<p class="paragraph">
			<button
				class="button button--01"
				@click="toggleText">
				Toggle the text
			</button>
		</p>

		<vue-slide-up-down
			class="slideupdown__container"
			:tag="section"
			:active="active"
			:duration="duration">
			<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae unde ex aperiam asperiores dicta molestiae, facere suscipit doloribus ipsum!</p>
			<p class="paragraph">Ab quisquam fugiat voluptates voluptatem quis, incidunt nesciunt velit, voluptatum odit esse necessitatibus dolores sint illo et nostrum ullam accusantium.</p>
			<p class="paragraph">Minus quas consequuntur possimus quia autem voluptatem, facilis reiciendis quis recusandae rerum, eum corporis accusamus omnis, labore perspiciatis sed deleniti?</p>
		</vue-slide-up-down>

		<h2 class="sub-heading">FAQ like expanding list</h2>

		<dl class="faqList">
			<template v-for="(faq, index) in faqList">
				<dt
					@click="faq.active = !faq.active"
					class="faqList__title"
					:class="{ 'is-active' : faq.active }">
					{{ faq.title }}
				</dt>

				<vue-slide-up-down
					class="faqList__body" 
					:tag="section"
					:class="{ 'is-active' : faq.active }"
					:active="faq.active" 
					:duration="duration">
					{{ faq.body }}
				</vue-slide-up-down>
			</template>
		</dl>
	</main>
</template>

<script>
	import SlideUpDown from "vue-slide-up-down";

	export default {
		data() {
			return {
				active: false,
				duration: 300,
				faqList: [
					{
						id: 1,
						active: false,
						title: "Whats on my icecream?",
						body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aspernatur cupiditate rerum ut, repellat veniam in, placeat sit porro fuga!"
					},
					{
						id: 2,
						active: false,
						title: "Where can I get a fancy red dress?",
						body: "Mollitia aspernatur cupiditate rerum ut, repellat veniam in, placeat sit porro fuga!"
					},
					{
						id: 3,
						active: false,
						title: "Where's the park?",
						body: "Consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia aspernatur cupiditate rerum ut, repellat veniam in, placeat sit porro fuga!"
					},
					{
						id: 4,
						active: false,
						title: "Is the internet finally done?",
						body: "The internet is not finished yet!"
					},
				]
			}
		},
		methods: {
			toggleText() {
				this.active = !this.active;
			}
		},
		components: {
			"vue-slide-up-down": SlideUpDown
		}
	}
</script>

<style lang="scss">
	@import "../../scss/style";

	.slideupdown__container p {
		margin-top: 0;
	}

	.slideupdown__link {
		color: map-get($colors, 01);

		&:hover {
			color: map-get($colors, 02);
		}
	}

	.faqList__title,
	.faqList__body {
		font-family: $font-custom;
	}

	.faqList__title {
		cursor: pointer;
		font-weight: 700;

		&.is-active {
			color: map-get($colors, 02);
		}
	}

	.faqList__body {
		margin-bottom: 5px;
	}
</style>
