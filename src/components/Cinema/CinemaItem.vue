<template>
    <div class="cinema-item">
        <h3 class="cinema-item__title">
            <router-link
                tag="a"
                :to="'/cinema/' + item.id + '/' + $options.filters.slugify(item.title)"
				active-class="is-active"
				exact-active-class="is-exact">
                {{ item.title }} ({{ item.year }})
            </router-link>
        </h3>

        <p>
            <router-link
                tag="a"
                :to="'/cinema/' + item.id + '/' + $options.filters.slugify(item.title)"
                :title="item.title"
				active-class="is-active"
				exact-active-class="is-exact">
                <img
                    :src="'/static/movies/' + item.poster"
                    :alt="item.title"
                    class="movie__poster">
            </router-link>

        </p>

        <p class="cinema-item__description">{{ item.description }}</p>

        <p class="cinema-item__year">{{ item.year }}</p>

        <h4>Starring</h4>

        <ul>
            <li
                v-for="(actor, index) in item.stars"
                :key="index">
                {{ actor }}
                </li>
        </ul>

        <p>
            View IMDb link: <a :href="item.imdb" target="_blank">{{ item.title }}</a>.
        </p>
    </div>
</template>

<script>
    export default {
        props: [
            "item"
        ],
        data() {
            return {

            }
        },
        methods: {
            slugify(title) {

            }
        }
    };
</script>

<style>
    .movie__poster {
        width: 200px;
    }
</style>
