<template>
    <ul class="pagination">
        <li                    
            class="pagination__item pagination__item--prev">
            <button
                class="pagination__button"
                :disabled="page == 1"
                @click="$emit('prevPage')">
                &larr;
            </button>
        </li>
        <li
            class="pagination__item"
            v-for="(pageNumber, index) in pages"
            :class="{ 'is-active' : page == pageNumber }"
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
                :disabled="page >= pages.length"
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
            pages: {
                type: Array,
                required: true
            },
            page: {
                type: Number,
                required: true
            }
        },
        created () {
            const that = this;

            document.onkeydown = function(e) {
                switch (e.keyCode) {
                    case 37:
                        if(that.page > 1) {
                            that.$emit("prevPage");
                        }
                        break;
                    case 39:
                        if(that.page < that.pages.length) {
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
        display: flex;
        margin: 0;
        padding: 0;
    }

    .pagination__item {
        list-style: none;
        margin-right: 10px;

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
            font-family: $font-custom;
            color: #fff;
            cursor: pointer;
            padding: 10px 15px;
            background-color: map-get($colors, 01);
            border-radius: 8px;
            text-decoration: none;
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