<template lang="pug">
	main.pug
		h1.pug__title Pug template
		p.pug__body
			| The origin of this template is a Pug file. <strong>Webpack compiles the Pug syntax into HTML</strong> before it's send to the browser. No precompiling needed.

		h2.pug__sub-title Techniques used
		ul.pug__body
			li Vue
			li Vuex
			li Vue Router
			li JavaScript spreat operator for #[code mapGetters] &amp; #[code mapMutations]</code>
</template>

<style>
	.pug__title,
	.pug__sub-title,
	.pug__body {
		font-family: "Roboto", sans-serif;
	}

	.pug__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

	.pug__sub-title {
		font-size: 42px;
	}
</style>
