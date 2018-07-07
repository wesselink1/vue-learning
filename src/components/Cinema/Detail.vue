<template>
    <main class="movie-detail">
        <p><router-link tag="a" :to="{ name: 'linkCinema' }">Back to the cinema list</router-link></p>

        <h1 class="heading">{{ selectedMovie.title }}</h1>

        <p class="paragraph">
            <img :src="'/assets/movies/' + selectedMovie.poster" :alt="selectedMovie.title">
        </p>

        <p class="paragraph">{{ selectedMovie.description }}</p>

        <h4>Starring</h4>

        <ul>
            <li v-for="actor in selectedMovie.stars">{{ actor }}</li>
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
                "cinema"
            ]),
            selectedMovie() {
                let activeMovie = {};

                for(var i = 0, j = this.cinema.length; i < j; i++){
                    if(this.cinema[i].id == parseInt(this.id)) {
                        activeMovie = this.cinema[i];
                    }
                }
                return activeMovie;
            }
        }
    };
</script>

<style>
    .movie-detail {

    }
</style>