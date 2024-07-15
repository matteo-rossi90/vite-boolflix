import { reactive } from 'vue'

export const store = reactive({
    movies: [],
    series: [],
    movieGenre:[],
    tvGenre: [],
    apiURLMovies: "https://api.themoviedb.org/3/search/movie?api_key=9df9412fbceaf86f8a1faaa6b66edbf5&language=it-IT&page=1&query",
    apiURLSeries: "https://api.themoviedb.org/3/search/tv?api_key=9df9412fbceaf86f8a1faaa6b66edbf5&language=it-IT&page=1&query",
    apiURLMovieCast: "https://api.themoviedb.org/3/movie/{id}/credits?api_key=9df9412fbceaf86f8a1faaa6b66edbf5",
    apiURLSerieCast: "https://api.themoviedb.org/3/tv/{id}/credits?api_key=9df9412fbceaf86f8a1faaa6b66edbf5",
    apiMoviesGenre: "https://api.themoviedb.org/3/genre/movie/list?api_key=9df9412fbceaf86f8a1faaa6b66edbf5",
    apiTVGenre: "https://api.themoviedb.org/3/genre/tv/list?api_key=9df9412fbceaf86f8a1faaa6b66edbf5"
})