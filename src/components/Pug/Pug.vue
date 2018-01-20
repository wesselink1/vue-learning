<template lang="pug">
	main.pug
		h1.pug__title Pug template
		p.pug__body
			| The origin of this template is a Pug file.
			| Webpack compiles the Pug syntax into HTML before it's send to the browser.
			| No precompiling needed.
</template>

<style>
	.pug__title,
	.pug__body {
		font-family: "Roboto", sans-serif;
	}

	.pug__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}
</style>
