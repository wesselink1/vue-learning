const state = {
    cinema: [
        {
            id: 2798920,
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
            imdb: "https://www.imdb.com/title/tt2798920/"
        },
        {
            id: 3778644,
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
            imdb: "https://www.imdb.com/title/tt3778644/"
        },
        {
            id: 6644200,
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
            imdb: "https://www.imdb.com/title/tt6644200/"
        },
        {
            id: 7784604,
            title: "Hereditary",
            description: "After the family matriarch passes away, a grieving family is haunted by tragic and disturbing occurrences, and begin to unravel dark secrets.",
            year: 2018,
            poster: "hereditary.jpg",
            genre: [
                "Horror"
            ],
            stars: [
                "Natalie Portland",
                "Jennifer Jason Leigh",
                "Tessa Thompson"
            ],
            imdb: "https://www.imdb.com/title/tt7784604/"
        },
        {
            id: 5463162,
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
            imdb: "https://www.imdb.com/title/tt5463162/"
        }
    ]
};

const getters = {
    cinemaList: state => {
        return state.cinema;
    },
    cinemaItem: (state) => (id) => {
        // https://vuex.vuejs.org/guide/getters.html
        return state.cinema.find(item => item.id == id);
    }
};

const mutations = {
    setCinemaList: (state, value) => {
        state.cinemaList = value;
    }
};

export default {
    state,
    getters,
    mutations
};