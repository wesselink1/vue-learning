<template>
	<footer class="footer">
		<p class="footer__body">By Dennis Burger, march 2018</p>
	</footer>
</template>

<style lang="scss">
	@import "../../scss/style";

	.footer__body {
		margin-top: 30px;
		padding-top: 10px;
		border-top: 1px solid map-get($colors, 04);
		color: map-get($colors, 04);
		text-align: right;
		font-size: 14px;
		font-weight: 300;
		font-family: $font-custom;
	}
</style>
