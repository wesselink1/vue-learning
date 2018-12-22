<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1>        

        <nav class="tv-shows-nav" role="navigation" aria-label="Navigation">            
            <Pagination
                :totalPages="pages"
                :currentPage="page"
                @setPage="page = $event"
                @prevPage="page--"
                @nextPage="page++" />
            
            <p class="paragraph tv-shows__display">
                Display as:
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="{ 'is-active' : tvShowDisplay == 'TvShowItemCard' }"
                    @click="setTvShowDisplay('TvShowItemCard')">
                    cards
                </a>or

                <a
                    href="javascript:;"
                    class="tv-shows__sorting-link"
                    :class="{ 'is-active' : tvShowDisplay == 'TvShowItemRow' }"
                    @click="setTvShowDisplay('TvShowItemRow')">
                    rows
                </a>
            </p>

            <p class="paragraph tv-shows__sorting">
                and order by: 
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="[
                        orderTvShowsByDesc ? 'sorted-desc' : 'sorted-asc',
                        { 'is-active' : orderTvShowsBy == 'title' }
                    ]"
                    @click="setOrderBy('title')">
                    title</a>, 
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="[
                        orderTvShowsByDesc ? 'sorted-desc' : 'sorted-asc',
                        { 'is-active' : orderTvShowsBy == 'rating' }
                    ]"
                    @click="setOrderBy('rating')">
                    rating</a> or
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="[
                        orderTvShowsByDesc ? 'sorted-desc' : 'sorted-asc',
                        { 'is-active' : orderTvShowsBy == 'year' }
                    ]"
                    @click="setOrderBy('year')">
                    year</a>
            </p>            
        </nav>

        <section
            class="tv-shows__overview"
            :class="tvShowsOverviewType">
            <component
                :is="tvShowDisplay"
                v-for="show in displayedPosts"
                :show="show"
                :key="show['.key']">
            </component>
        </section>  

        <nav class="tv-shows-nav" role="navigation" aria-label="Navigation">
            <Pagination
                :totalPages="pages"
                :currentPage="page"
                @setPage="page = $event"
                @prevPage="page--"
                @nextPage="page++" />
        </nav>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapMutations } from "vuex";
    import { orderBy, slice } from "lodash";
    import { firebase } from "@/db";
    import TvShowItemCard from "@/components/TvShowItemCard";
    import TvShowItemRow from "@/components/TvShowItemRow";
    import Pagination from "@/components/Pagination";

    export default {
        name: "TvShowsPage",
        components: {
            TvShowItemCard,
            TvShowItemRow,
            Pagination
        },
        data() {
            return {
                posts: [],
                page: 1,
                perPage: 10,
                pages: [],
            }
        },
        created () {
            this.posts = this.tvshows;
        },
        methods: {
            ...mapMutations([
                "setOrderTvShowsBy",
                "setOrderTvShowsByDesc",
                "setTvShowCurrentPage",
                "setTvShowDisplay",
                "setTvShowsPerPage"
            ]),
            setOrderBy(orderBy) {
                this.setOrderTvShowsBy(orderBy);
                this.setOrderTvShowsByDesc();
                this.page = 1;
            },
            setPages() {
                let numberOfPages = Math.ceil(this.posts.length / this.perPage);

                for (let index = 1; index <= numberOfPages; index++) {
                    this.pages.push(index);
                }
            },
            paginate(posts) {
                let page = this.page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                return  orderBy(posts, [this.orderTvShowsBy, "year"], [this.orderTvShowsByDesc ? "desc" : "asc", "desc"]).slice(from, to);
            },
            setTvShowDisplay(componentName) {
                var displayName = "";

                switch(componentName) {
                    case "TvShowItemCard":
                        displayName = "cards";
                        break;
                    case "TvShowItemRow":
                        displayName = "rows";
                        break;
                }

                this.$modalConfirm({ title: "Switch tv show display to " + displayName + "?" })
                    .then((response) => {
                        this.$store.commit("setTvShowDisplay", componentName);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        computed: {           
            ...mapGetters([
                "orderTvShowsBy",
                "orderTvShowsByDesc",
                "tvShowDisplay",
                "tvShowsCurrentPage",
                "tvShowsPerPage"
            ]),
            displayedPosts () {
                return this.paginate(this.posts);
            },
            tvShowsOverviewType() {
                return {
                    'tv-shows__overview--cards': this.tvShowDisplay == "TvShowItemCard",
                    'tv-shows__overview--rows': this.tvShowDisplay == "TvShowItemRow"
                }
            }
        },
        watch: {
            posts () {
                this.setPages();
            }
        },
        firebase
    };
</script>

<style lang="scss">
    .tv-shows__overview {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .tv-shows__overview--cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
        grid-gap: 40px;
    }

    .tv-shows__display {
        margin-left: auto;
    }

    .tv-shows__sorting {
        text-align: right;
        font-family: sans-serif;
    }

    .tv-shows__sorting {
        text-align: right;
    }

    .tv-shows__sorting-link {
        color: map-get($colors, 03);

        &.is-active,
        &:hover {
            color: map-get($colors, 01);
        }
    }

    .tv-shows-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }    
</style>