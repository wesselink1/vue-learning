import { orderBy, minBy, maxBy } from "lodash";

const state = {
    order: "year",
    orderByDesc: false,
    movies: [
        {
            id: "0081505",
            title: "The Shining",
            description: "A family heads to an isolated hotel for the winter where an evil spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
            year: 1980,
            poster: "the-shining.jpg",
            genre: [
                "Drama",
                "Horror"
            ],
            stars: [
                "Jack Nicholson", 
                "Shelley Duvall", 
                "Danny Lloyd"
            ],
            rating: 8.4,
            imdb: "https://www.imdb.com/title/tt0081505/"
        },
        {
            id: "0104431",
            title: "Home Alone 2: Lost in New York",
            description: "One year after Kevin was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself in New York City, and the same criminals are not far behind.",
            year: 1992,
            poster: "home-alone-2.jpg",
            genre: [
                "Comedy",
                "Adventure",
                "Family"
            ],
            stars: [
                "Macaulay Culkin",
                "Joe Pesci",
                "Daniel Stern"
            ],
            rating: 6.6,
            imdb: "https://www.imdb.com/title/tt0104431/"
        },
        {
            id: "1663202",
            title: "The Revenant",
            description: "A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",
            year: 2015,
            poster: "the-revenant.jpg",
            genre: [
                "Action",
                "Adventure",
                "Drama"
            ],
            stars: [
                "Leonardo DiCaprio",
                "Tom Hardy",
                "Will Poulter"
            ],
            rating: 8.0,
            imdb: "https://www.imdb.com/title/tt1663202/"
        },
        {
            id: "0111161",
            title: "The Shawshank Redemption",
            description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            year: 1994,
            poster: "the-shawshank-redemption.jpg",
            genre: [
                "Drama"
            ],
            stars: [
                "Tim Robbins",
                "Morgan Freeman",
                "Bob Gunton"
            ],
            rating: 9.3,
            imdb: "https://www.imdb.com/title/tt0111161/"
        },
        {
            id: "5232792",
            title: "Lost in Space",
            description: "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
            year: 2018,
            poster: "lost-in-space.jpg",
            genre: [
                "Fantasy",
                "Sci-Fi",
                "Drama"
            ],
            stars: [
                "Molly Parker",
                "Toby Stephens",
                "Maxwell Jenkin"
            ],
            rating: 6.8,
            imdb: "https://www.imdb.com/title/tt5232792/"
        },
        {
            id: "0082198",
            title: "Conan the Barbarian",
            description: "A barbarian warrior sets off to avenge his parents and his tribe whom were slain by an evil sorcerer and his henchmen when he was a boy.",
            year: 1982,
            poster: "conon-the-barbarian.jpg",
            genre: [
                "Fantasy",
                "Adventure"
            ],
            stars: [
                "Arnold Schwarzenegger",
                "James Earl Jones",
                "Max von Sydow"
            ],
            rating: 6.9,
            imdb: "https://www.imdb.com/title/tt0082198/"
        },
        {
            id: "2527336",
            title: "Star Wars: The Last Jedi",
            description: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares for battle with the First Order.",
            year: 2017,
            poster: "star-wars-last-jedi.jpg",
            genre: [
                "Sci-Fi",
                "Adventure"
            ],
            stars: [
                "Daisy Ridley",
                "John Boyega",
                "Mark Hamill"
            ],
            rating: 7.4,
            imdb: "https://www.imdb.com/title/tt2527336/"
        },
        {
            id: "2798920",
            title: "Annihilation",
            description: "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
            year: 2018,
            poster: "annihilation.jpg",
            genre: [
                "Horror",
                "Thriller"
            ],
            stars: [
                "Natalie Portland",
                "Jennifer Jason Leigh",
                "Tessa Thompson"
            ],
            rating: 8.7,
            imdb: "https://www.imdb.com/title/tt2798920/"
        },
        {
            id: "3778644",
            title: "Solo: A Star Wars Story",
            description: "During an adventure into the criminal underworld, Han Solo meets his future copilot Chewbacca and encounters Lando Calrissian years before joining the Rebellion.",
            year: 2018,
            poster: "solo-star-wars.jpg",
            genre: [
                "Action",
                "Sci-Fi"
            ],
            stars: [
                "Alden Ehrenreich", 
                "Woody Harrelson", 
                "Emilia Clarke"
            ],
            rating: 7.1,
            imdb: "https://www.imdb.com/title/tt3778644/"
        },
        {
            id: "6644200",
            title: "A Quiet Place",
            description: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
            year: 2018,
            poster: "a-quit-place.jpg",
            genre: [
                "Horror"
            ],
            stars: [
                "Emily Blunt", 
                "John Krasinski",
                "Millicent Simmonds"
            ],
            rating: 9.5,
            imdb: "https://www.imdb.com/title/tt6644200/"
        },
        {
            id: "7784604",
            title: "Hereditary",
            description: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.",
            year: 2018,
            poster: "hereditary.jpg",
            genre: [
                "Horror"
            ],
            stars: [
                 "Toni Collette",
                 "Milly Shapiro",
                 "Gabriel Byrne"
            ],
            rating: 8.9,
            imdb: "https://www.imdb.com/title/tt7784604/"
        },
        {
            id: "5463162",
            title: "Deadpool 2",
            description: "Foul-mouthed mutant mercenary Wade Wilson (AKA. Deadpool), brings together a team of fellow mutant rogues to protect a young boy with supernatural abilities from the brutal, time-traveling cyborg, Cable.",
            year: 2018,
            poster: "deadpool-2.jpg",
            genre: [
                "Action",
                "Sci-Fi"
            ],
            stars: [
                "Ryan Reynolds",
                "Josh Brolin",
                "Morena Baccarin"
            ],
            rating: 8.2,
            imdb: "https://www.imdb.com/title/tt5463162/"
        },
        {
            id: "1396484",
            title: "IT",
            description: "It is a movie starring Bill Skarsgård, Jaeden Lieberher, and Finn Wolfhard. In the summer of 1989, a group of bullied kids band together to destroy a shapeshifting monster, which disguises itself as a clown and preys on the children of Derry, their small Maine town.",
            year: 2017,
            poster: "it.jpg",
            genre: [
                "Horror",
            ],
            stars: [
                "Bill Skarsgård",
                "Jaeden Lieberher",
                "Finn Wolfhard"
            ],
            rating: 8.5,
            imdb: "https://www.imdb.com/title/tt1396484/"
        },
        {
            id: "4846340",
            title: "Hidden Figures",
            description: "The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.",
            year: 2016,
            poster: "hidden-figures.jpg",
            genre: [
                "Biography",
                "Drama",
                "History"
            ],
            stars: [
                "Taraji P. Henson",
                "Octavia Spencer", 
                "Janelle Monáe"
            ],
            rating: 9.3,
            imdb: "https://www.imdb.com/title/tt4846340/"
        },
        {
            id: "1825683",
            title: "Black Panther",
            description: "TT'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
            year: 2018,
            poster: "black-panther.jpg",
            genre: [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            stars: [
                "Chadwick Boseman",
                "Michael B. Jordan",
                "Lupita Nyong'o"
            ],
            rating: 9.7,
            imdb: "https://www.imdb.com/title/tt1825683/"
        }
    ]
};

const getters = {
    order: state => {
        return state.order;
    },
    orderByDesc: state => {
        return state.orderByDesc;
    },
    movies: state => {
        return state.movies;
    },
    movie: (state) => (id) => {
        // https://vuex.vuejs.org/guide/getters.html
        return state.movies.find(item => item.id == id);
    },
    filteredMovies: state => {
        return orderBy(state.movies, [state.order], state.orderByDesc ? "desc" : "asc");
    },
    highestRatedMovie: state => {
        return maxBy(state.movies, function (item) {
            return item.rating;
        });
    },
    lowestRatedMovie: state => {
        return minBy(state.movies, function (item) {
            return item.rating;
        });
    }
};

const mutations = {
    changeOrder: (state, payload) => {
        state.order = payload;
    },
    changeOrderByDesc: state => {
        state.orderByDesc = !state.orderByDesc;
    },
    setHighestAndLowestRatedBoolean: state => {
        let maxRatedMovie = maxBy(state.movies, function (item) {
            return item.rating;
        });

        let maxIndex = state.movies.indexOf(maxRatedMovie);
        state.movies[maxIndex].highest = true;

        let minRatedMovie = minBy(state.movies, function (item) {
            return item.rating;
        });

        let minIndex = state.movies.indexOf(minRatedMovie);
        state.movies[minIndex].lowest = true;
    }
};

export default {
    state,
    getters,
    mutations
};