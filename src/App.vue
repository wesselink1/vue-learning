<template>
  	<div id="app" class="container">
  		<appHeader></appHeader>

  		<transition name="comp-slide" mode="out-in" type="animation">
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

	.comp-slide-enter-active {
		animation: componentSlideIn .3s ease-out forwards;
	}

	.comp-slide-leave-active {
		animation: componentSlideOut .3s ease-out forwards;		
	}

	@keyframes componentSlideIn {
		0% {
			opacity: 0;
			transform: translateY(20px);
		}

		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes componentSlideOut {
		0% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
</style>
