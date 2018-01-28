<template>
    <main class="customdirective">
        <h1 class="customdirective__title">Custom Directives</h1>

        <p class="customdirective__body">Using Vue custom directive attributes to create custom functionality.</p>

        <p class="customdirective__body" v-highlight:background.delayed="'orange'">Using inline attribute to set the background color of this custom directive</p>

        <p class="customdirective__body">Directives can be set globally or localy.</p>
    </main>
</template>

<script>
    export default {
        components: {
            
        },
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>

<style>
    .customdirective__title,
	.customdirective__body,
	.customdirective__total {
		font-family: "Roboto", sans-serif;
	}

	.customdirective__title {
		font-weight: 300;
		font-size: 32px;
		color: deepskyblue;
	}

    .customdirective__body[style] {
        padding: 10px;
        transition: background-color .5s ease-in-out, color .5s ease-in-out;
    }
</style>