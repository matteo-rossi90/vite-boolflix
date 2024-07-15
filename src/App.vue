<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    };
  },
  methods: {
    //gestione delle API relative ai film
     async getMovies(query = '') {
      try {

        //chiamata dall'API relativa ai film dallo store per estrarre tutti i film
        const response = await axios.get(`${this.store.apiURLMovies}&query=${query}`);
        this.store.movies = response.data.results;

        //estrarre il cast dei film attraverso l'API apposita
        for (let i = 0; i < this.store.movies.length; i++) {
          const movie = this.store.movies[i];
          const castRespMovies = await axios.get(this.store.apiURLMovieCast.replace('{id}', movie.id));
          movie.cast = []; // array vuoto per accogliere il cast dei film
          for (let j = 0; j < castRespMovies.data.cast.length && j < 5; j++) {
            movie.cast.push(castRespMovies.data.cast[j]);
          }
        };

        //associare i generi ai film
        this.store.movies.forEach(movie => {
          movie.genres = movie.genre_ids.map(id => {
            return this.store.movieGenre.find(genre => genre.id === id);
          });
        });

      } catch (error) {
        console.error('Errore recupero il recupero dei film:', error);
      }
    },

    //gestione delle API relative alle serie
    async getSeries(query = '') {
      try {

        //chiamata dall'API relativa ai film dallo store per estrarre tutti i film
        const response = await axios.get(`${this.store.apiURLSeries}&query=${query}`);
        this.store.series = response.data.results;

        // estrarre il cast delle serie dall'API
        for (let i = 0; i < this.store.series.length; i++) {
          const serie = this.store.series[i];
          const castRespSeries = await axios.get(this.store.apiURLSerieCast.replace('{id}', serie.id));
          serie.cast = [];
          for (let j = 0; j < castRespSeries.data.cast.length && j < 5; j++) {
            serie.cast.push(castRespSeries.data.cast[j]);
          }
        };

        //associare i generi ai film
        this.store.series.forEach(serie => {
          serie.genres = serie.genre_ids.map(id => {
            return this.store.tvGenre.find(genre => genre.id === id);
          });
        });

      } catch (error) {
        console.error('Errore durante il recupero delle serie:', error);
      }
    },

    //gestione delle API per il genere dei film
    async getMovieGenre(){
      try{

        //chiamata dell'API per estrarre le tipologie di genere dei film
        const answer = await axios.get(this.store.apiMoviesGenre);;
        this.store.movieGenre = answer.data.genres;
      } catch (error) {
        console.error('Errore durante il recupero dei generi:', error);
      }
    },

    //gestione delle API per il genere delle serie
    async getTVGenre(){
      try{

        //chiamata dell'API per estrarre le tipologie di genere delle serie
        const risp = await axios.get(this.store.apiTVGenre);
        this.store.tvGenre = risp.data.genres;

      } catch (error) {
        console.error('Errore durante il recupero dei generi:', error);
      }
    },
    handleSearch(query) {
      this.getMovies(query);
      this.getSeries(query);
    }
  },
  mounted() {
    this.getMovies();
    this.getSeries();
    this.getMovieGenre();
    this.getTVGenre();
  }
};
</script>

<template>

    <AppHeader @searchQuery="handleSearch"/>
    <main>
      <AppMain :movies="store.movies" :series="store.series"/>
    </main>

</template>

<style lang="scss">
@use './styles/general.scss';
@use '@fortawesome/fontawesome-free/css/all.min.css';

</style>