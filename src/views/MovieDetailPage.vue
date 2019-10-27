<template>
    <main class="movie-detail">
        <template v-if="movie == undefined">
            <h1 class="heading">Movie not found</h1>

            <p class="paragraph movie-detail__not-found">
                The movie ID is incorret. Please go the <router-link :to="{ name: 'MoviesOverview' }">movies page</router-link>.
                Or go back to the <router-link :to="{ name: 'IndexPage' }">homepage</router-link>.
            </p>
        </template>
        <template v-else>
            <p class="movie-detail__back-button">
                <a href="javascript:;" @click="$router.go(-1)">Back</a>
            </p>

            <p class="paragraph movie-detail__poster-block">
                <img
                    :src="'/img/movies/' + movie.poster"
                    :alt="movie.title"
                    class="movie-detail__poster">
            </p>

            <div class="movie-details__body">
                <h1 class="movie-detail__title">{{ movie.title }}</h1>

                <p class="movie-detail__genre">{{ $options.filters.inlineList(movie.genre) }}</p>            

                <p class="movie-detail__year">{{ movie.year }}</p>

                <p class="movie-detail__description">{{ movie.description }}</p>

                <h4 class="movie-detail__starring-title">Starring</h4>

                <p class="movie-detail__actor-list">
                    {{ $options.filters.inlineList(movie.stars) }}
                </p>

                <h4 class="movie-detail__rating">Score: {{ movie.rating }}</h4>
            </div>

            <p class="movie-detail__external">
                <a :href="movie.imdb" class="movie-detail__externa-link" target="_blank">View on IMDb</a>
            </p>
        </template>
    </main>
</template>

<script>    
    export default {
        computed: {
            movie() {                
                return this.$store.getters.movie(this.$route.params.id);
            }            
        }
    };
</script>

<style lang="scss">
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
        margin-bottom: 20px;
        max-width: 450px;
        height: auto;
        box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .25);
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

    .movie-detail__not-found {
        @include grid-row(2);
        @include grid-column(1, 2);
        font-family: $font-custom;
        font-size: 26px;

        a {
            color: map-get($colors, 02);

            &:hover {
                color: map-get($colors, 01);
            }
        }
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

    .movie-detail__rating {
        font-size: 26px;
        font-family: $font-custom;
        font-weight: 300;
        color: map-get($colors, 01);
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