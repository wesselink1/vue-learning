<template>
    <div class="movie-item">
        <p class="movie-item__poster">
            <router-link
                tag="a"
                :to="{ name: 'MovieDetailPage', params: { id: item.id, slug: $options.filters.slugify(item.title) } }"
                :title="item.title"
				active-class="is-active"
				exact-active-class="is-exact">
                <img
                    :src="'/img/movies/' + item.poster"
                    :alt="item.title"
                    class="movie-item__cinema-poster">
            </router-link>
        </p>

        <h3 class="movie-item__title">
            <router-link
                tag="a"
                :to="{ name: 'MovieDetailPage', params: { id: item.id, slug: $options.filters.slugify(item.title) } }"
				active-class="is-active"
				exact-active-class="is-exact">
                {{ item.title }}
            </router-link>
        </h3>

        <p class="movie-item__genre">{{ $options.filters.inlineList(item.genre) }}</p>        
    </div>
</template>

<script>
    export default {
        name: "MovieItem",
        props: {
            item: Object
        }
    };
</script>

<style lang="scss">
    .movie-item__cinema-poster {
        width: 200px;
    }

    .movie-item__title {   
        margin: 0;     
        font-size: 16px;
        font-weight: 300;
        font-family: $font-custom;
        color: map-get($colors, 02);

        a {
            color: inherit;
            text-decoration: none;
        }
    }

    .movie-item__genre {
        margin: 0;
        font-family: $font-custom;
        font-size: 14px;
        color: map-get($colors, 04);
    }    
</style>
