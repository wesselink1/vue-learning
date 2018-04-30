<template>
	<main class="slideupdown">		
		<h1 class="heading">Slide Up and Down</h1>

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
			:active="active"
			:duration="duration">
			<p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repudiandae unde ex aperiam asperiores dicta molestiae, facere suscipit doloribus ipsum!</p>
			<p class="paragraph">Ab quisquam fugiat voluptates voluptatem quis, incidunt nesciunt velit, voluptatum odit esse necessitatibus dolores sint illo et nostrum ullam accusantium.</p>
			<p class="paragraph">Minus quas consequuntur possimus quia autem voluptatem, facilis reiciendis quis recusandae rerum, eum corporis accusamus omnis, labore perspiciatis sed deleniti?</p>
		</vue-slide-up-down>

	</main>
</template>

<script>
	import SlideUpDown from "vue-slide-up-down";

	export default {
		data() {
			return {
				active: false,
				duration: 300
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

	.slideupdown__container {
		p {
			margin-top: 0;
		}
	}
</style>