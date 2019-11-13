<template>
  	<section id="app" class="app__container">
  		<TheHeader/>

  		<transition
  			name="app__container-"
  			mode="out-in"
  			type="animation">
  			<router-view/>
  		</transition>

  		<TheFooter/>
  	</section>
</template>

<script>
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

export default {
	name: "VueLearning",
	components: {
		TheFooter,
		TheHeader
	}
}
</script>

<style lang="scss">
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
