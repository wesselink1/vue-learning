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
    import { mapGetters } from "vuex";

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
            this.isActive = (this.selectedTabComponent == this.name);
        },
        data() {
            return {
                isActive: false
            }
        },
        computed: {
			...mapGetters([
				"selectedTabComponent"
            ])            
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