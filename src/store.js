import { reactive } from 'vue'

export const store = reactive({
    movies: [],
    series: [],
    apiURLMovies: "https://api.themoviedb.org/3/search/movie?api_key=9df9412fbceaf86f8a1faaa6b66edbf5&language=it-IT&page=1&query",
    apiURLSeries: "https://api.themoviedb.org/3/search/tv?api_key=9df9412fbceaf86f8a1faaa6b66edbf5&language=it-IT&page=1&query",
    searchMovies: "",
    searchSeries: ""
})