<template>
  	<div id="app" class="container">
  		<dwHeader></dwHeader>
  		<router-view></router-view>
  		<dwFooter></dwFooter>
  	</div>
</template>

<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	export default {
		components: {
			dwHeader: Header,
			dwFooter: Footer
		}
	}
</script>

<style scoped>
	.container {
		max-width: 1024px;
		margin: 0 auto;
	}
</style>
