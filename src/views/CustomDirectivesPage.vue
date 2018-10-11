<template>
    <main class="customdirective">
        <h1 class="heading">Custom Directives</h1>

        <p class="paragraph">Using Vue custom directive attributes to create custom functionality.</p>

        <p
            class="paragraph customdirective__body"
            v-highlight="{ color: 'red' }">
            Simple example with one object value.
        </p>

        <p
            class="paragraph customdirective__body"
            v-highlight:background="{ color: 'deeppink', backgroundColor: 'deepskyblue' }">
            Example directive with a directive argument 'background' and multiple object values.
        </p>
        
        <p
            class="paragraph customdirective__body"
            v-highlight:background.delayed="{ color: 'white', backgroundColor: 'deeppink', delay: 2000, classname: 'has-hightlight' }">
            Example with a directive argument and a directive modifier. And also adding a classname to the element.
        </p>

        <p class="paragraph customdirective__body">Directives can be set globally or localy.</p>
    </main>
</template>

<script>
    export default {
        name: "CustomDirectivesPage",
        directives: {
            "highlight": {
                bind(el, binding) {                    
                    setTimeout(() => {
                        if(binding.value.classname != undefined) {
                            el.classList.add(binding.value.classname);
                        }

                        if (binding.arg == 'background') {
                            el.style.color = binding.value.color;
                            el.style.backgroundColor = binding.value.backgroundColor;
                        } else {
                            el.style.color = binding.value.color;
                        }
                    }, binding.modifiers['delayed'] ? binding.value.delay : 0);	
                }
            } 
        }
    };
</script>

<style lang="scss">
    .customdirective__total {
		font-family: "Roboto", sans-serif;
	}

    .customdirective__body[style] {
        padding: 10px;
        border-radius: 10px;
        -webkit-transition: background-color .5s ease-in-out, color .5s ease-in-out;
        transition: background-color .5s ease-in-out, color .5s ease-in-out;
    }
</style>