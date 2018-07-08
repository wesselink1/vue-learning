<template>
    <main class="movies">
        <h1 class="heading">Movie overview</h1>

        <p class="paragraph">Movie overview- and detail page using <strong>vue-router</strong>, a dynamic url using movie ID and an URL slug.</p>

        <section class="movies__list">
            <cinema-item
                v-for="movie in cinemaList"
                :item="movie"
                :key="movie.id">
            </cinema-item>
        </section>
    </main>
</template>

<script>
    import { mapGetters } from "vuex";
    import CinemaItem from "./CinemaItem";

    export default {
        components: {
            CinemaItem
        },
        computed: {
            ...mapGetters([
                "cinemaList"
            ])
        }
    };
</script>

<style lang="scss">
    @import "../../scss/style";

    .movies__list {
        @include display-grid;
        @include grid-basic(5, 200px, 20px);
        @include grid-basic-ie-placement(5);
    }

    .cinema-item {
        img {
            height: 300px;
            width: auto;
        }
    }
</style>