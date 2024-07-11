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
    getMovies(query = '') {
      axios.get(`${this.store.apiURLMovies}&query=${query}`)
        .then(response => {
          this.store.movies = response.data.results;
        })
        .catch(error => {
          console.error('Errore durante il fetch dei film:', error);
        });
    },
    getSeries(query = '') {
      axios.get(`${this.store.apiURLSeries}&query=${query}`)
        .then(response => {
          this.store.series = response.data.results;
        })
        .catch(error => {
          console.error('Errore durante il fetch delle serie:', error);
        });
    },
    handleSearch(query) {
      this.getMovies(query);
      this.getSeries(query);
    }
  },
  mounted() {
    this.getMovies();
    this.getSeries();
  }
};
</script>

<template>

    <AppHeader @search-query="handleSearch"/>
    <main>
      <AppMain :movies="store.movies" :series="store.series"/>
    </main>
    
</template>

<style lang="scss">
@use './styles/general.scss';
</style>