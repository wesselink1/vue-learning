<template>
    <main class="gsap">
        <h1 class="heading">GSAP Animation</h1>

        <p class="paragraph">Using the <a href="https://greensock.com/gsap/" class="gsap__link" target="_blank">GSAP</a> JavaScript animation library to animate 'in' a certain amount of blocks. These are positioned using CSS Grid.</p>

        <transition-group
            appear
            :css="false"
            tag="section"
            class="gsap__container">
            <div
                v-for="(block, index) in blocks"
                :key="index"
                class="gsap__block">
                {{ block }}
            </div>
        </transition-group>
    </main>
</template>

<script>
import gsap from 'gsap';

export default {
    mounted() {
        gsap.from('.gsap__block', {
            duration: 1,
            opacity: 0,
            scale: 0.8,
            y: -25,
            ease: 'power1',
            stagger: 0.25
        });
    },
    data() {
        return {
            blocks: [
                "Basic Instinct",
                "Highlander",
                "Pinocio",
                "Revenant",
                "Robocop",
                "Short-circuit",
                "Swan",
                "The Terminator",
                "What Dreams May Come",
            ]
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

.gsap__container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.gsap__block {
    display: flex;
    min-height: 150px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: white;
    padding: 20px;
    background-color: map-get($colors, 02);
    font-family: $font-custom;
    font-size: 26px;
    text-align: center;
}

.gsap__link {
    color: map-get($colors, 01);
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>