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
                 "Toni Collette",
                 "Milly Shapiro",
                 "Gabriel Byrne"
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
        },
        {
            id: 1396484,
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
            imdb: "https://www.imdb.com/title/tt1396484/"
        },
        {
            id: 4846340,
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
            imdb: "https://www.imdb.com/title/tt4846340/"
        },
        {
            id: 1825683,
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
            imdb: "https://www.imdb.com/title/tt1825683/"
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

export default {
    state,
    getters
};