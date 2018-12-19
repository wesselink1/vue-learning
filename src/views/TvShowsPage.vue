<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1>   

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

        <section class="tv-shows__overview">
            <TvShowItem
                v-for="show in filteredTvShows"
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
        methods: {
            ...mapMutations([
                "changeOrderTvShowsBy",
                "changeOrderTvShowsByDesc"
            ]),
            setOrderBy(orderBy) {
                this.changeOrderTvShowsBy(orderBy);
				this.changeOrderTvShowsByDesc();
			}
        },
        computed: {           
            ...mapGetters([
                "orderTvShowsBy",
                "orderTvShowsByDesc",
                "tvShowsPaginationLimit"
            ]),
            filteredTvShows() {
                return slice(orderBy(this.tvshows, [this.orderTvShowsBy], this.orderTvShowsByDesc ? "desc" : "asc"), 0, this.tvShowsPaginationLimit);
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
</style>