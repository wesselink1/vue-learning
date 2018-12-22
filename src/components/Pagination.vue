<template>
    <ul class="pagination">
        <li                    
            class="pagination__item pagination__item--prev">
            <button
                class="pagination__button"
                :disabled="currentPage == 1"
                @click="$emit('prevPage')">
                &larr;
            </button>
        </li>
        <li
            class="pagination__item"
            :aria-label="['Goto page ' + pageNumber]"
            :aria-current="currentPage == pageNumber ? true : false"
            v-for="(pageNumber, index) in totalPages"
            :class="{ 'is-active' : currentPage == pageNumber }"
            :key="index">             
            <button
                class="pagination__button"
                @click="$emit('setPage', pageNumber)">
                {{ pageNumber }}
            </button>
        </li>
        <li
            class="pagination__item pagination__item--next">
            <button
                class="pagination__button"
                :disabled="currentPage >= totalPages.length"
                @click="$emit('nextPage')">
                &rarr;
            </button>
        </li>
    </ul> 
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            totalPages: {
                type: Array,
                required: true
            },
            currentPage: {
                type: Number,
                required: true
            }
        },
        created () {
            const that = this;

            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 37:
                        if(that.currentPage > 1) {
                            that.$emit("prevPage");
                        }
                        break;
                    case 39:
                        if(that.currentPage < that.totalPages.length) {
                            that.$emit("nextPage");
                        }
                        break;
                    }
            }
        },
    };
</script>

<style lang="scss">
    .pagination {
        @include flexbox;         
        @include flex-wrap(wrap);
        @include justify-content(center);
        margin: 0;
        padding: 0;

        @include respond-to-min('tablet') {
            @include flex-wrap(nowrap);
            @include justify-content(flex-start);
        }
    }

    .pagination__item {
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 10px;
        list-style: none;

        &:last-child {
            margin-right: 0;
        }

        &.is-active {
            button {
                background-color: map-get($colors, 02);
            }
        }        
    }

    .pagination__button {
            display: block;
            border: none;
            color: #fff;
            cursor: pointer;
            padding: 10px 15px;
            border-radius: 8px;
            text-decoration: none;
            font-family: $font-custom;
            background-color: map-get($colors, 01);
            transition: .5s background-color;

            &:hover {
                background-color: map-get($colors, 02);
            }

            &:focus {
                outline: 0;
            }

            &[disabled] {
                cursor: default;
                opacity: .5;

                &:hover {
                    background-color: map-get($colors, 01);
                }
            }
        }
</style>