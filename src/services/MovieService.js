import axios from "axios";

const movieList = axios.create({
    baseURL: "/json",
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getMovies() {
        return movieList.get("/Movies.json");
    }
}