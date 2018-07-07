<template>
    <main class="movie-detail">
        <p><router-link tag="a" :to="{ name: 'linkCinema' }">Back to the cinema list</router-link></p>

        <h1 class="heading">{{ selectedMovie.title }}</h1>

        <p class="paragraph">
            <img
                :src="'/static/movies/' + selectedMovie.poster"
                :alt="selectedMovie.title"
                class="movie__poster">
        </p>

        <p class="paragraph">{{ selectedMovie.description }}</p>

        <h4>Starring</h4>

        <ul class="movie__actors">
            <li 
                v-for="(actor, index) in selectedMovie.stars"
                :key="index">
                {{ actor }}
                </li>
        </ul>
    </main>
</template>

<script>
    import { mapGetters } from "vuex";
    import { mapMutations } from "vuex";
    
    export default {
        components: {
            
        },
        data() {
            return {
                id: this.$route.params.id,
                slug: this.$route.params.slug
            }
        },
        methods: {
            
        },
        computed: {
            ...mapGetters([
                "cinemaList"
            ]),
            selectedMovie() {
                // https://vuex.vuejs.org/guide/getters.html
                return this.$store.getters.cinemaItem(this.id);
            }
        }
    };
</script>

<style>
    .movie__poster {
        width: 200px;
    }
</style>