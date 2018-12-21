<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1>        

        <nav class="tv-shows-nav">            
            <Pagination
                :pages="pages"
                :page="page"
                @setPage="page = $event"
                @prevPage="page--"
                @nextPage="page++" />

            <p class="paragraph tv-shows__sorting">
                Order by: 
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="[
                        orderTvShowsByDesc ? 'sorted-desc' : 'sorted-asc',
                        { 'is-active' : orderTvShowsBy == 'title' }
                    ]"
                    @click="setOrderBy('title')">
                    Title
                </a>, 
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="[
                        orderTvShowsByDesc ? 'sorted-desc' : 'sorted-asc',
                        { 'is-active' : orderTvShowsBy == 'rating' }
                    ]"
                    @click="setOrderBy('rating')">
                    rating
                </a>, 
                <a 
                    href="javascript:;" 
                    class="tv-shows__sorting-link"
                    :class="[
                        orderTvShowsByDesc ? 'sorted-desc' : 'sorted-asc',
                        { 'is-active' : orderTvShowsBy == 'year' }
                    ]"
                    @click="setOrderBy('year')">
                    year
                </a>
            </p>            
        </nav>

        <section class="tv-shows__overview">
            <TvShowItem
                v-for="show in displayedPosts"
                :show="show"
                :key="show['.key']">
            </TvShowItem>
        </section>  
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapMutations } from "vuex";
    import { orderBy, slice } from "lodash";
    import { firebase } from "@/db";
    import TvShowItem from "@/components/TvShowItem";
    import Pagination from "@/components/Pagination";

    export default {
        name: "TvShowsPage",
        components: {
            TvShowItem,
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
                "setTvShowsPerPage",
                "setTvShowCurrentPage"
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
                return  orderBy(posts, [this.orderTvShowsBy], this.orderTvShowsByDesc ? "desc" : "asc").slice(from, to);
            }
        },
        computed: {           
            ...mapGetters([
                "orderTvShowsBy",
                "orderTvShowsByDesc",
                "tvShowsPerPage",
                "tvShowsCurrentPage"
            ]),
            displayedPosts () {
                return this.paginate(this.posts);
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
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
        grid-gap: 40px;
        margin-top: 40px;
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