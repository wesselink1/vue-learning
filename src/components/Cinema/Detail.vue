<template>
    <main class="movie-detail">
        <p class="movie-detail__back-button">
            <router-link
                tag="a"
                :to="{ name: 'linkCinema' }">
                &lsaquo; Back to the cinema list
            </router-link>
        </p>

        <p class="paragraph movie-detail__poster-block">
            <img
                :src="'/static/movies/' + selectedMovie.poster"
                :alt="selectedMovie.title"
                class="movie-detail__poster">
        </p>

        <div class="movie-details__body">
            <h1 class="movie-detail__title">{{ selectedMovie.title }}</h1>

            <p class="movie-detail__genre">{{ inlineList(selectedMovie.genre) }}</p>            

            <p class="movie-detail__year">{{ selectedMovie.year }}</p>

            <p class="movie-detail__description">{{ selectedMovie.description }}</p>

            <h4 class="movie-detail__starring-title">Starring</h4>

            <p class="movie-detail__actor-list">
                {{ inlineList(selectedMovie.stars) }}
            </p>   
        </div>

        <p class="movie-detail__external">
            <a :href="selectedMovie.imdb" class="movie-detail__externa-link" target="_blank">View on IMDb</a>
        </p>
    </main>
</template>

<script>
    import { mapGetters } from "vuex";
    
    export default {
        data() {
            return {
                id: this.$route.params.id,
                slug: this.$route.params.slug
            }
        },
        methods: {
            inlineList(listItems) {
                return listItems.join(", ");
            }
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

<style lang="scss">
    @import "../../scss/style";

    .movie-detail {
        @include display-grid;
        @include grid-template-columns(490px 1fr);
    }

    .movie-detail__back-button {
        @include grid-row(1);
        font-size: 18px;
        font-family: $font-custom;
        color: map-get($colors, 01);

        a {
            color: inherit;
            text-decoration: none;

            &:hover {
                color: map-get($colors, 02);
            }
        }
    }

    .movie-detail__poster-block {
        margin: 0;
        @include grid-row(2);
    }

    .movie-detail__poster {
        max-width: 450px;
        height: auto;
    }

    .movie-details__body {
        @include grid-row(2);
        @include grid-column(2);
    }

    .movie-detail__title {
        margin: 0 0 0 0;
        font-size: 85px;
        font-family: $font-custom;
        font-weight: 300;
        color: map-get($colors, 01);
    }    

    .movie-detail__genre {
        margin: 0 0 10px 0;
        font-size: 22px;
        color: map-get($colors, 04);
        font-family: $font-custom;
    } 

    .movie-detail__year {
        margin: 0 0 40px 0;
        font-size: 24px;
        font-family: $font-custom;
        color: map-get($colors, 02);
    }
    
    .movie-detail__description {
        margin: 0 0 40px 0;
        font-size: 28px;
        line-height: 1.5;
        font-weight: 300;
        font-family: $font-custom;
    }   

    .movie-detail__starring-title {
        margin: 0;
        font-size: 22px;
        font-family: $font-custom;
        font-weight: 300;
        color: map-get($colors, 02);
    }

    .movie-detail__actor-list {
        font-size: 16px;
        font-family: $font-custom;
    }

    .movie-detail__external {
        margin: 0;
        @include grid-row(3);
        @include grid-column(1);
    }

    .movie-detail__externa-link {
        font-size: 14px;
        font-family: $font-custom;
        color: map-get($colors, 02);
    }
</style>