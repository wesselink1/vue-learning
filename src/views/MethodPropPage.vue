<template>
    <main class="method-prop">
        <h1 class="heading">Method as a prop</h1>

        <p class="paragraph">Passing a parent method to a component</p>

        <p class="paragraph">Click an item to delete them.</p>

        <form 
            class="method-prop__form"
            @submit.prevent="onSubmit">
            <fieldset class="method-prop__fieldset">
                <legend class="method-prop__legend">Create movies</legend>

                <label 
                    class="method-prop__label"
                    for="movie-title">
                    Movie title:
                </label>

                <input 
                    type="text"
                    class="method-prop__input"
                    id="movie-title"
                    ref="title"
                    name="title"
                    placeholder="Movie title"
                    v-model="movieTitle">
                
                <label 
                    class="method-prop__label"
                    for="movie-year">
                    Movie year:
                </label>

                <input
                    type="text"
                    class="method-prop__input"
                    id="movie-year"
                    ref="year"
                    name="year"
                    placeholder="Movie year"
                    v-model="movieYear">

                <input
                    type="submit"
                    class="movie-prop__submit button button--02"
                    value="Add movie">
            </fieldset>
        </form>       

        <section
            v-if="movies.length == 0">
            <p class="movie-prop__no-movies">Please add some movies above!</p>
        </section>  

        <section
            v-else
            class="movie-prop__grid">
            <MovieBlock
                v-for="(movie, index) in movies"
                :key="index" 
                :index="index"
                :title="movie.title"
                :year="movie.year"
                :remove="removeItem" />
        </section>        
    </main>
</template>

<script>
import MovieBlock from '@/components/MovieBlock.vue';

export default {
    components: {
        MovieBlock,
    },
    data() {
        return {
            movies: [
                {
                    title: "The Terminator",
                    year: 1984
                },
                {
                    title: "Dombo",
                    year: 1941
                }
            ],
            movieTitle: "",
            movieYear: ""
        }
    },
    methods: {
        onSubmit() {
            this.movies.push({
                title: this.movieTitle,
                year: this.movieYear
            });
            
            this.movieTitle = "";
            this.movieYear = "";
            this.$refs.title.focus();
        }, 
        removeItem(index) {
            this.movies.splice(index, 1);
        }      
    },
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------


// ---------------------------------------------
// Element
// ---------------------------------------------

.method-prop__fieldset {
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-gap: 20px;
    padding: 40px;
    border-color: #eee;
    border-radius: 8px;
}

.method-prop__legend,
.method-prop__label {
    font-family: $font-custom;
}

.method-prop__legend {
    font-size: 26px;
    padding-left: 20px;
    padding-right: 20px;
    color: map-get($colors, 02);
}

.method-prop__label {
    grid-column: 1;
    align-self: center;
}

.method-prop__input {
    grid-column: 2;
	box-sizing: border-box;
	padding: 15px;
	border-radius: $border-radius;
	border: 2px solid #ccc;
}

.movie-prop__no-movies {
    font-family: $font-custom;
    color: map-get($colors, 02);
}

.movie-prop__submit {
    grid-column: 2;
}

.movie-prop__grid {
    display: grid;
    grid-gap: 20px;
    margin-top: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------


</style>