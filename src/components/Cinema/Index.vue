<template>
    <main class="movies">
        <h1 class="heading">Movie overview</h1>

        <p class="paragraph">Some favourite movies.</p>

        <cinema-item
            v-for="movie in cinema"
            :item="movie"
            :key="movie.id">
        </cinema-item>
    </main>
</template>

<script>
    import { mapGetters } from "vuex";
	import { mapMutations } from "vuex";
    import CinemaItem from "./CinemaItem";

    export default {
        components: {
            CinemaItem
        },
        data() {
            return {

            }
        },
        methods: {
            
        },
        computed: {
            ...mapGetters([
                "cinema"
            ])
        }
    };
</script>

<style>
    .cinema {

    }
</style>