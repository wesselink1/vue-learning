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
        name: "TabItem",
        props: {
            name: {
                type: String,
                required: true
            },
            selected: Boolean
        },
        mounted() {
            this.isActive = (this.selectedTabComponent == this.name);
        },
        data: () => ({
            isActive: false
        }),
        computed: {
			...mapGetters([
				"selectedTabComponent"
            ])            
		}
    };
</script>

<style lang="scss">
    .tab__title {
		font-weight: 300;
		font-size: 32px;
		color: map-get($colors, 01);
	}

	.tab__body {
		line-height: 1.2;
	}
</style>