<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1>

        <p class="paragraph">The list of tv shows is coming from Google Firebase.</p>

        <ul>
            <li
                v-for="show in tvshows"
                :key="show['.key']">
                {{ show.title }} ({{show.year}})
            </li>
        </ul>

        <h2 class="sub-heading">Prerequites</h2>

        <p class="paragraph">These are the extra NPM package you'll need to get easy access to Google Firebase (database).</p>

        <ul>
            <li><a href="https://www.npmjs.com/package/firebase" target="_blank">firebase</a></li>
            <li><a href="https://www.npmjs.com/package/vuefire" target="_blank">Vuefire</a></li>
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