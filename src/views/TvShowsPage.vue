<template>
    <div class="tv-shows">
        <h1 class="heading">Tv shows</h1>        

        <p class="paragraph">The list of tv shows is coming from <strong>Google Firebase</strong>.</p>

        <section class="tv-shows__overview">
            <TvShowItem
                v-for="show in tvshows"
                :show="show"
                :key="show['.key']">
            </TvShowItem>
        </section>

        <hr>

        <p class="paragraph"><strong>Prerequites</strong></p>

        <p class="paragraph">These are the extra NPM package you'll need to get easy access to Google Firebase (database).</p>

        <ul>
            <li class="paragraph"><a href="https://www.npmjs.com/package/firebase" target="_blank">firebase</a></li>
            <li class="paragraph"><a href="https://www.npmjs.com/package/vuefire" target="_blank">Vuefire</a></li>
        </ul>    
    </div>
</template>

<script>    
    import { firebase } from "@/db";
    import TvShowItem from "@/components/TvShowItem";

    export default {
        name: "TvShowPage",
        components: {
            TvShowItem
        },
        firebase
    };
</script>

<style lang="scss">
    .tv-shows {
        a {
            color: map-get($colors, 01);
        }
    }

    .tv-shows__overview {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(182px, 1fr));
        grid-gap: 40px;
        margin-top: 40px;
    }
</style>