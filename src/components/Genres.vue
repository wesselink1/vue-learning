<template>
    <ul>
        <li
            v-for="(genre, index) in genres"
            :key="index">              
            <a 
                href="javascript:;"
                @click="$emit('setGenre', genre.label)">
                {{ genre.label }}
            </a> 
            ({{ genre.count }})
        </li>
    </ul>
</template>

<script>
    export default {
        name: "GenreList",
        props: {
            genres: {
                type: Array,
                required: true
            }
        },
        data() {

        },
        methods: {

        }
    };
</script>

<style>
    .classname {

    }
</style>