<template>
    <div        
        @click="remove(index)"
        title="Click to delete"
        class="movie-prop__item">
        <h2 class="movie-prop__item-title">{{ title }}</h2>

        <p class="movie-prop__item-year">{{ year }}</p>
    </div>
</template>

<script>
export default {
    props: {
        index: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        remove: {
            type: Function,
            required: true
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------


// ---------------------------------------------
// Element
// ---------------------------------------------

.movie-prop__item {
    cursor: pointer;
    padding: 20px;
    border-radius: 10px;
    color: white;
    min-height: 200px;
    font-family: $font-custom;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: map-get($colors, 02);

    &:hover {
        background-color: map-get($colors, 01);
    }
}

.movie-prop__item-title {
    margin: 0 0 10px 0;
    font-size: 32px;
    text-align: center;
}

.movie-prop__item-year {
    margin: 0;
    font-size: 25px;
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------


</style>