<template>
  	<main id="app" class="app__container">
  		<app-header></app-header>

  		<transition name="routerSlide" mode="out-in" type="animation">
  			<router-view></router-view>
  		</transition>

  		<app-footer></app-footer>
  	</main>
</template>

<script>
	import Footer from './components/Shared/Footer.vue';
	import Header from './components/Shared/Header.vue';

	export default {
		components: {
			'app-footer': Footer,
			'app-header': Header
		}
	}
</script>

<style>
	.app__container {
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
