<template>
    <div class="cinema-item">
        <p class="cinema-item__poster">
            <router-link
                tag="a"
                :to="'/cinema/' + item.id + '/' + $options.filters.slugify(item.title)"
                :title="item.title"
				active-class="is-active"
				exact-active-class="is-exact">
                <img
                    :src="'/static/movies/' + item.poster"
                    :alt="item.title"
                    class="cinema__poster">
            </router-link>
        </p>

        <h3 class="cinema-item__title">
            <router-link
                tag="a"
                :to="'/cinema/' + item.id + '/' + $options.filters.slugify(item.title)"
				active-class="is-active"
				exact-active-class="is-exact">
                {{ item.title }}
            </router-link>
        </h3>

        <p class="cinema-item__genre">{{ inlineList(item.genre) }}</p>        
    </div>
</template>

<script>
    export default {
        props: [
            "item"
        ],
        methods: {
            inlineList(listItems) {
                return listItems.join(", ");
            }
        }
    };
</script>

<style lang="scss">
    @import "../../scss/style";

    .cinema__poster {
        width: 200px;
    }

    .cinema-item__title {   
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

    .cinema-item__genre {
        margin: 0;
        font-family: $font-custom;
        font-size: 14px;
        color: map-get($colors, 04);
    }    
</style>
