<template>
    <article
        v-show="isActive"
        :aria-labelledby="$options.filters.slugify(name)"
        role="tabpanel"
        tabindex="0"
        :id="$options.filters.slugify(name) + '-tab'"
        :class="{ 'is-active' : isActive }">
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
    .tab__title {
		font-weight: 300;
		font-size: 32px;
		color: map-get($colors, 01);
	}

	.tab__body {
		line-height: 1.2;
	}
</style>