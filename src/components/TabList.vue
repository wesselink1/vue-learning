<template>
    <div>
        <nav
            :class="navClass">
            <ul
                role="tablist"
                :aria-label="ariaLabel"
                :class="listClass">
                <li
                    v-for="(tab, index) in tabs"
                    :key="index"
                    :class="[ listClass + '-item', { 'is-active' : isActiveClass(tab.name) } ]">
                    <a 
                        :href="'#' + $options.filters.slugify(tab.name) + '-tab'"
                        :id="$options.filters.slugify(tab.name)"
                        role="tab"
                        :tabindex="tab.isActive ? '' : '-1'"
                        @click="selectTab($event, tab)"
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
        name: "TabList",
        props: {
            navClass: String,
            listClass: String,
            ariaLabel: String,
        },
        data: () => ({
            tabs: []
        }),
        created() {
            this.tabs = this.$children;
        },
        methods: {
            ...mapMutations({
				setSelectedTabComponent: "Tabs/setSelectedTabComponent"
            }),
            selectTab(event, selectedTab) {
                event.preventDefault();
                
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                });
                
                this.setSelectedTabComponent(selectedTab.name);
                return false;
            },
            isActiveClass(selectedTab) {
                return this.selectedTabComponent == selectedTab;
            }
        },
        computed: {
			...mapGetters({
				selectedTabComponent: "Tabs/selectedTabComponent"
            })            
		}
    };
</script>

<style lang="scss">
    .tabs__list {
		position: relative;
		@include flexbox;
		margin: 0;
        padding: 0;
        
        &::after {
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
	}	

	.tabs__list-item {
		margin: 0;
        list-style: none;

        &:hover {
			a {
				color: white;
				background-color: map-get($colors, 01);
			}
		}
        
        & + & {
            margin-left: 10px;
        }    
        
        a {
            display: block;
			padding: 5px 20px;
			color: white;
			font-weight: 300;
			text-decoration: none;
			cursor: pointer;
            font-family: $font-custom;
			border-width: 1px 1px 0 1px;
			border-style: solid;
			border-radius: 5px 5px 0 0;
			border-color: map-get($colors, 01);
            background-color: map-get($colors, 01);
            
            &:focus {
                outline: none;
            }
        }
        
        &.is-active a {
			color: map-get($colors, 01);
			border-bottom-color: map-get($colors, 01);
			background-color: white;
		}
    }
    
    .tabs__panel:focus {
        outline: none;
    }
</style>