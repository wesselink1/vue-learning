<template>
    <div class="dynamic-components">
        <nav
            class="dynamic-components__nav">
            <ul
                role="tablist"
                aria-label="Business value"
                class="dynamic-components__tab">
                <li
                    v-for="(tab, index) in tabs"
                    v-bind:key="index"
                    class="dynamic-components__tab-item"
                    :class="{ 'is-active' : tab.isActive }">
                    <a 
                        :href="'#' + $options.filters.slugify(tab.name) + '-tab'"
                        :id="$options.filters.slugify(tab.name)"
                        role="tab"
                        @click="selectTab(tab)"
                        :aria-selected="tab.isActive"
                        :aria-controls="$options.filters.slugify(tab.name) + '-tab'">
                        {{ tab.name }}
                    </a> 
                </li>
            </ul>
        </nav>

        <slot></slot>
    </div>
</template>

<script>
	import { mapGetters } from "vuex";
    import { mapMutations } from "vuex";
    
    export default {
        data() {
            return {
                tabs: []
            }
        },
        created() {
            this.tabs = this.$children;
        },
        methods: {
            ...mapMutations([
				"setSelectedComponent"
			]),
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });

                this.setSelectedComponent(selectedTab.name);
            }
        }
    };
</script>

<style lang="scss">
    @import "~@/scss/style";
    
    .dynamic-components__tab-item {
		a {
			font-family: $font-custom;
		}

		.tab:focus {
			outline: none;
		}
	}

	.dynamic-components__title {
		font-weight: 300;
		font-size: 32px;
		color: map-get($colors, 01);
	}

	.dynamic-components__body {
		line-height: 1.2;
	}

	.dynamic-components__tab {
		position: relative;
		@include flexbox;
		margin: 0;
		padding: 0;
	}

	.dynamic-components__tab::after {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: -1;
		content: '';
		display: block;
		width: 100%;
		border-top: 1px solid map-get($colors, 01);
	}

	.dynamic-components__tab-item {
		margin: 0;
		list-style: none;
	}

	.dynamic-components__tab-item + .dynamic-components__tab-item {
		margin-left: 10px;
	}

	.dynamic-components__tab-item {
		:hover {
			a {
				color: white;
				background-color: map-get($colors, 01);
			}
		}

		a {
			display: block;
			padding: 5px 20px;
			color: white;
			font-weight: 300;
			text-decoration: none;
			cursor: pointer;
			border-width: 1px 1px 0 1px;
			border-style: solid;
			border-radius: 5px 5px 0 0;
			border-color: map-get($colors, 01);
			background-color: map-get($colors, 01);
		}

		&.is-active a {
			color: map-get($colors, 01);
			border-bottom-color: map-get($colors, 01);
			background-color: white;
		}
	}
</style>