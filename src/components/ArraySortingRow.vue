<template>
    <tr 
        :class="{ 'is-highest' : movie.highest, 'is-lowest' : movie.lowest }">
        <td>
            <router-link
                tag="a"
                :to="{ name: 'MovieDetailPage', params: { id: movie.id, slug: $options.filters.slugify(movie.title) } }"
                class="array-sorting__link"
                active-class="is-active"
                exact-active-class="is-exact">
                <img
                    :src="'/img/movies/' + movie.poster"
                    :alt="movie.title"
                    class="array-sorting__poster">
            </router-link>						
        </td>
        <td>
            <router-link
                tag="a"
                :to="{ name: 'MovieDetailPage', params: { id: movie.id, slug: $options.filters.slugify(movie.title) } }"
                class="array-sorting__link"
                active-class="is-active"
                exact-active-class="is-exact">
                {{ movie.title }}
            </router-link>
        </td>
        <td>{{ movie.rating }}</td>
        <td>{{ movie.year }}</td>
        <td>{{ $options.filters.inlineList(movie.genre) }}</td>
    </tr>
</template>

<script>
    export default {
        name: "ArraySortingRow",
        props: {
            movie: {
                type: Object,
                required: true
            }
        }
    };
</script>

<style lang="scss">
    .array-sorting__movies {
		tr {
			&.is-highest td {
				color: green;
			}

			&.is-lowest td {
				color: red;
			}
		}

		th,
		td {
			padding: 20px;
			vertical-align: top;
			font-family: $font-custom;
		}

		th {
			font-weight: 700;
			font-size: 32px;
			color: black;
			text-align: left;
		}

		a {
			display: inline-block;
			color: inherit;
			transition: .3s color;
			text-decoration: none;

			span::after {
				position: relative;
				top: 0px;
				left: 15px;
				display: inline-block;
				visibility: hidden;
				width: 0px;
				height: 0px;
				overflow: hidden;
				margin-right: 10px;
				content: '';
				border: 10px;
				border-color: transparent;
				border-width: 10px;
				border-style: solid;
			}

			&.is-active span::after {
				visibility: visible;
			}

			&.sorted-asc span::after {
				top: 5px;
				border-top-color: map-get($colors, 01);
			}

			&.sorted-desc span::after {
				top: -5px;
				border-bottom-color: map-get($colors, 01);
			}

			&:hover,
			&.is-active {
				color: map-get($colors, 01);
			}
		}

		td {
			font-size: 22px;
		}
	}	

    .array-sorting__poster {
		max-width: 80px;
		height: auto;;
	}

    .array-sorting__link {
		color: inherit;
		text-decoration: none;

		&:hover {
			color: map-get($colors, 02);
		}
	}
</style>