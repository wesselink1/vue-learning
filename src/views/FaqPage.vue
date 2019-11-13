<template>
	<main class="faq">
		<h1 class="heading">FAQ</h1>		

		<dl class="faq-list">
			<template v-for="(faq, index) in faqList">
				<dt
					@click="toggleFaqItem(index)"
					class="faq-list__title"
					:class="{ 'is-active' : faq.active }">
					{{ faq.title }}
				</dt>

				<SlideUpDown
					class="faq-list__body"
					:tag="'dd'"
					:class="{ 'is-active' : faq.active }"
					:active="faq.active"
					:duration="duration">
					{{ faq.body }}
				</SlideUpDown>
			</template>
		</dl>

		<p class="paragraph">Using the <a href="https://github.com/danieldiekmeier/vue-slide-up-down/" class="faq__link">vue-slide-up-down component</a>.</p>
	</main>
</template>

<script>
import SlideUpDown from "vue-slide-up-down";

export default {
	components: {
		"SlideUpDown": SlideUpDown
	},
	data: () => ({   
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
	}),
	methods: {
		toggleFaqItem(index) {
			for(let i = 0, j = this.faqList.length; i < j; i++){
				if(i != index) {
					this.faqList[i].active = false;
				}
			}

			this.faqList[index].active = !this.faqList[index].active;
		}
	}		
}
</script>

<style lang="scss">
.faq__link {
	color: map-get($colors, 01);

	&:hover {
		color: map-get($colors, 02);
	}
}

.faq-list {
	max-width: 400px;
}

.faq-list__title,
.faq-list__body {
	font-family: $font-custom;
	line-height: 1.6;
}

.faq-list__title {
	cursor: pointer;
	font-size: 22px;
	font-weight: 700;
	cursor: pointer;
	color: map-get($colors, 01);
	transition: .3s color;

	&.is-active {
		color: map-get($colors, 02);

		&::before {
			transform: rotate(90deg);
			transition: .3s transform;
			border-left-color: map-get($colors, 02);
		}
	}

	&::before {
		transform-origin: 25% 50%;
		position: relative;
		top: 2px;
		display: inline-block;
		width: 0px;
		height: 0px;
		overflow: hidden;
		margin-right: 0px;
		content: '';
		border: 10px;
		border-color: transparent;
		border-width: 10px;
		border-style: solid;
		border-left-color: map-get($colors, 01);
	}
}

.faq-list__body {
	margin: 0 0 20px 25px;
	color: map-get($colors, 03);
}
</style>
