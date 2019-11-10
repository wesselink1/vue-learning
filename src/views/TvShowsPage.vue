<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1> 

        <!--nav>
            <Genres
                :genres="genres"
                @setGenre="filteredGenre = $event">
            </Genres>
        </nav-->       

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
    import { orderBy, slice, sortBy, filter } from "lodash";
    import Genres from "@/components/Genres";
    import Pagination from "@/components/Pagination";
    import TvShowItemCard from "@/components/TvShowItemCard";
    import TvShowItemRow from "@/components/TvShowItemRow";

    export default {
        components: {
            Genres,
            Pagination,
            TvShowItemCard,
            TvShowItemRow
        },
        data() {
            return {
                posts: [],
                page: 1,
                perPage: 10,
                pages: [],
                genres: [],
                filteredGenre: "",
                selectedGenres: []
            }
        },
        created () {
            this.posts = this.tvShows;
        },
        methods: {
            ...mapMutations("TvShows", {
                setOrderTvShowsBy: "setOrderTvShowsBy",
                setOrderTvShowsByDesc: "setOrderTvShowsByDesc",
                setTvShowCurrentPage: "setTvShowCurrentPage",
                setTvShowDisplay: "setTvShowDisplay"
            }),
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
                        this.$store.commit("TvShows/setTvShowDisplay", componentName);
                    })
                    .catch(e => {
                        console.log(e);
                    });
            },
            getGenreList(posts) {
                var genres = [];

                for (var i = 0; i < posts.length; i++) {
                    var list = posts[i].genre;
                    for (var j = 0; j < list.length; j++) {
                
                        var existingValue = genres.find(function (value) {
                            return value.label === list[j]
                        });
                
                        if (!existingValue) {
                            genres.push(
                                {
                                    label: list[j],
                                    count: 1
                                }
                            );
                        } else {
                            existingValue.count++;
                        }
                    }
                }

                return sortBy(genres, "label");
            },
            setGenre(genre) {
                this.filteredByGenre = genre;
            }
        },
        computed: {           
            ...mapGetters("TvShows", {
                orderTvShowsBy: "orderTvShowsBy",
                orderTvShowsByDesc: "orderTvShowsByDesc",
                tvShowDisplay: "tvShowDisplay",
                tvShows: "tvShows",
                tvShowsCurrentPage: "tvShowsCurrentPage"
            }),
            displayedPosts() {
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
                this.genres = this.getGenreList(this.posts);
                this.setPages();
            }
        }
    };
</script>

<style lang="scss">
    .tv-shows__overview {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    .tv-shows__overview--cards {        
        @include respond-to-min('tablet') {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
            grid-gap: 40px;            
        }
    }

    .tv-shows__display {
        margin: 10px 0 0 0;
        padding: 0;

        @include respond-to-min('desktop') {
            margin: 0 10px 0 0;
            margin-left: auto;            
        }
    }

    .tv-shows__sorting {
        margin: 0;
        padding: 0;
        font-family: sans-serif;

        @include respond-to-min('desktop') {
            text-align: right;            
        }
    }

    .tv-shows__sorting {
        @include respond-to-min('desktop') {
            text-align: right;            
        }
    }

    .tv-shows__sorting-link {
        color: map-get($colors, 03);

        &.is-active,
        &:hover {
            color: map-get($colors, 01);
        }
    }

    .tv-shows-nav {        
        @include respond-to-min('desktop') {
            @include flexbox; 
            @include justify-content(space-between);
            @include align-items(center);
        }
    }    
</style>