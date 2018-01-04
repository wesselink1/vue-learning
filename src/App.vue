<template>
  	<div id="app" class="container">
  		<appHeader></appHeader>

  		<transition name="routerSlide" mode="out-in" type="animation">
  			<router-view></router-view>
  		</transition>

  		<appFooter></appFooter>
  	</div>
</template>

<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	export default {
		components: {
			appHeader: Header,
			appFooter: Footer
		}
	}
</script>

<style scoped>
	.container {
		max-width: 1024px;
		margin: 0 auto;
	}

	.routerSlide-enter-active {
		animation: routerSlideIn .3s ease-out forwards;
	}

	.routerSlide-leave-active {
		animation: routerSlideOut .3s ease-out forwards;		
	}

	@keyframes routerSlideIn {
		0% {
			opacity: 0;
			transform: translateY(20px);
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
