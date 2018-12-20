<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1> 

        <nav class="tv-shows-nav">
            <ul class="tv-shows__pagination">
                <li                    
                    class="tv-shows__pagination-item tv-shows__pagination--prev">
                    <button
                        :disabled="page == 1"
                        @click="page--">
                        Prev
                    </button>
                </li>
                <li
                    class="tv-shows__pagination-item"
                    :class="{ 'is-active' :  page == pageNumber }"
                    v-for="(pageNumber, index) in pages"
                    :key="index">             
                    <button
                        @click="page = pageNumber">
                        {{ pageNumber }}
                    </button>
                </li>
                <li
                    class="tv-shows__pagination-item tv-shows__pagination--next">
                    <button
                        :disabled="page >= pages.length"
                        @click="page++">
                        Next
                    </button>
                </li>
            </ul>  

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

    export default {
        name: "TvShowsPage",
        components: {
            TvShowItem
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
            const that = this;
            this.posts = this.tvshows;

            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 37:
                        if(that.page > 1) {
                            that.page--;
                        }

                        break;
                    case 39:
                        if(that.page < that.pages.length) {
                            that.page++;
                        }

                        break;
                    }
            }
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

    .tv-shows__pagination {
        display: flex;
        margin: 0;
        padding: 0;
    }

    .tv-shows__pagination-item {
        list-style: none;
        margin-right: 10px;

        &:last-child {
            margin-right: 0;
        }

        &.is-active {
            button {
                background-color: map-get($colors, 02);
            }
        }

        button {
            display: block;
            border: none;
            font-family: $font-custom;
            color: #fff;
            cursor: pointer;
            padding: 10px 15px;
            background-color: map-get($colors, 01);
            border-radius: 8px;
            text-decoration: none;
            transition: .5s background-color;

            &:hover {
                background-color: map-get($colors, 02);
            }

            &[disabled] {
                cursor: default;
                opacity: .5;

                &:hover {
                    background-color: map-get($colors, 01);
                }
            }
        }
    }
</style>