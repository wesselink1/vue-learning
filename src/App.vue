<template>
  	<div id="app">
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