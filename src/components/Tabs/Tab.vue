<template>
    <article
        v-show="isActive"
        :id="$options.filters.slugify(name) + '-tab'"
        :aria-labelledby="$options.filters.slugify(name)"
        role="tabpanel">
        <slot></slot>
    </article>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },
            selected: {
                type: Boolean
            }
        },
        mounted() {
            this.isActive = this.selected;
        },
        data() {
            return {
                isActive: false
            }
        },
        methods: {

        }
    };
</script>

<style>
    .dynamic-components__title {
		font-weight: 300;
		font-size: 32px;
		color: map-get($colors, 01);
    }
    
    .dynamic-components__body {
		line-height: 1.2;
	}
</style>