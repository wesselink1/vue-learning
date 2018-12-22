<template>
    <article
        class="tv-show-row__item">
        <div class="tv-show-row__poster">
            <a :href="show.imdb" target="_blank">
                <img
                    :src="show.poster" 
                    class="tv-show-row__item-poster"
                    :alt="show.title">
            </a>
        </div>

        <div class="tv-show-row__body">
            <h3 class="tv-show-row__item-heading">{{ show.title }} <small>({{ show.year }})</small></h3>

            <p class="tv-show-row__item-genre">
                {{ $options.filters.inlineList(show.genre) }}
                <span class="tv-show-row__item-rating">iMDb rating: {{ show.rating }} </span> 
            </p>           

            <p class="tv-show-row__item-description"> {{ show.description }} </p>

            <p class="tv-show-card__item-link"><a :href="show.imdb">View in IMDb</a></p>
        </div>
    </article>
</template>

<script>
    export default {
        name: "TvShowItemRow",
        props: {
            show: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .tv-show-row__item + .tv-show-row__item {
        border-top: 1px solid #ccc;
        padding-top: 20px;
    }

    .tv-show-row__item {
        display: grid;
        grid-template-columns: 100px 1fr;
        grid-gap: 20px;
        padding-bottom: 20px;
    }

    .tv-show-row__item-heading,
    .tv-show-row__item-description {
        margin: 0;
        font-family: sans-serif;
    }

    .tv-show-row__item-heading {
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

    .tv-show-row__item-description {
        margin-top: 10px;
        color: map-get($colors, 03);
        font-size: 14px;
        line-height: 1.6;
        font-family: $font-custom;
    }

    .tv-show-row__item-poster {
        width: 100%;
        max-width: 100px;
        box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .25);
    }

    .tv-show-row__item-rating {
        display: inline-block;
        margin: 0 0 0 5px;
        font-size: 12px;
        font-weight: 700;
        font-family: $font-custom;
        color: map-get($colors, 01);
    }

    .tv-show-row__item-genre {
        margin: 0;
        font-family: $font-custom;
        font-size: 14px;
        color: map-get($colors, 04);
    }

    .tv-show-row__item-stars {
        margin: 0;
        font-family: $font-custom;
        font-size: 14px;
        color: map-get($colors, 04);
    }

    .tv-show-row__item-link {
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