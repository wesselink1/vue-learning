<template>
  	<section id="app" class="app__container">
  		<appHeader></appHeader>

  		<transition
  			name="app__container-"
  			mode="out-in"
  			type="animation">
  			<router-view></router-view>
  		</transition>

  		<appFooter></appFooter>
  	</section>
</template>

<script>
	import Footer from "./components/Shared/Footer";
	import Header from "./components/Shared/Header";

	export default {
		components: {
			"appFooter": Footer,
			"appHeader": Header
		}
	}
</script>

<style lang="scss">
	@import "scss/style";

	.app__container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.app__container--enter-active {
		animation: routerSlideIn .3s ease-out forwards;
	}

	.app__container-leave-active {
		animation: routerSlideOut .3s ease-out forwards;		
	}

	@keyframes routerSlideIn {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes routerSlideOut {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
