<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1>

        <p class="paragraph">The list of tv shows is coming from Google Firebase.</p>

        <ul>
            <li
                v-for="show in tvshows">
                {{ show.title }} ({{show.year}})
            </li>
        </ul>
    </div>
</template>

<script>
    import { firebase } from "@/db";

    export default {
        name: "tvshows",
        firebase
    };
</script>

<style>
    .tv-shows {

    }
</style>