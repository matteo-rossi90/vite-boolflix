<script>
import AppCardMovies from './AppCardMovies.vue';
import AppCardSeries from './AppCardSeries.vue';

export default {
  name: 'AppMain',
  components: {
    AppCardMovies,
    AppCardSeries
  },
  props: {
    movies: Array,
    series: Array
  },
  computed: {
    hasMovies() {
      return this.movies && this.movies.length > 0;
    },
    hasSeries() {
      return this.series && this.series.length > 0;
    },
    hasResults() {
      return this.hasMovies || this.hasSeries;
    }
  }
};
</script>

<template>
  
  <div class="container">
      <h2 v-if="!hasResults">Cosa vuoi guardare oggi?</h2>

      <div v-if="hasMovies">
        <h2 >Film</h2>
        <AppCardMovies :movies="movies"/>
      </div>  
    
      <div v-if="hasSeries">
        <h2>Serie</h2>
        <AppCardSeries :series="series"/>
      </div>
       
  </div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

h2{
  margin: 20px 0;
  color: $text;
}

</style>