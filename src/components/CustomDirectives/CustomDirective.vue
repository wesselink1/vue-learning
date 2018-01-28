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
        directives: {
            "highlight": {
                bind(el, binding) {
                    var delay = 0;
                    
                    if(binding.modifiers['delayed']) {
                        delay = 3000;
                    }

                    setTimeout(() => {
                        if (binding.arg == 'background') {
                            el.style.backgroundColor = binding.value;
                        } else {
                            el.style.color = binding.value;
                        }
                    }, delay);	
                }
            } 
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