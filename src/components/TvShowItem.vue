<template>
    <article
        class="tv-shows__item">
        <a :href="show.imdb" target="_blank">
            <img
                :src="show.poster" 
                class="tv-shows__item-poster"
                :alt="show.title">
        </a>

        <h3 class="tv-shows__item-heading">{{ show.title }} <small>({{ show.year }})</small></h3>

        <p class="tv-shows__item-genre">{{ $options.filters.inlineList(show.genre) }}</p>  

        <p class="tv-shows__item-rating">iMDb rating: {{ show.rating }} </p> 

        <p class="tv-shows__item-description"> {{ show.description }} </p>

        <p class="tv-shows__item-link"><a :href="show.imdb">View in IMDb</a></p>                            
    </article>
</template>

<script>
    export default {
        name: "TvShowItem",
        props: {
            show: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .tv-shows__item-heading,
    .tv-shows__item-description {
        font-family: sans-serif;
    }

    .tv-shows__item-heading {
        margin: 0 0 10px 0;     
        font-size: 24px;
        font-weight: 300;
        font-family: $font-custom;
        color: map-get($colors, 02);

        a {
            color: inherit;
            text-decoration: none;
        }

        small {
            font-size: 16px;
        }
    }

    .tv-shows__item-description {
        margin-top: 30px;
        color: map-get($colors, 03);
        font-size: 14px;
        line-height: 1.6;
        font-family: $font-custom;
    }

    .tv-shows__item-poster {
        margin-bottom: 16px;
        width: 100%;
        max-width: 182px;
        box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .25);
    }

    .tv-shows__item-rating {
        font-size: 12px;
        font-weight: 700;
        font-family: $font-custom;
        color: map-get($colors, 01);
    }

    .tv-shows__item-genre {
        margin: 0;
        font-family: $font-custom;
        font-size: 14px;
        color: map-get($colors, 04);
    }

    .tv-shows__item-stars {
        margin: 0;
        font-family: $font-custom;
        font-size: 14px;
        color: map-get($colors, 04);
    }

    .tv-shows__item-link {
        a {
            font-family: $font-custom;
            font-size: 12px;
            color: map-get($colors, 02);

            &:hover {
                color: map-get($colors, 01);
            }
        }
    }
</style>