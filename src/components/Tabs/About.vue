<template>
	<div id="about-tab" aria-labelledby="about" class="tab" tabindex="0" role="tabpanel">
		<h3 class="about__title">About</h3>

		<p class="about__body">
			Distinctio quae nobis molestiae, ullam animi magni ratione voluptatem harum laborum. Dolore.
		</p>
	</div>
</template>

<style>
	.about__title,
	.about__body {
		font-family: "Roboto", sans-serif;
	}

	.about__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.about__body {
		line-height: 1.6;
	}

	.tab:focus {
		outline: none;
	}
</style>
