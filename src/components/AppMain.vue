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
  }
};
</script>

<template>
  
  <div class="container">
      <h2>Film</h2>
    
      <AppCardMovies :movies="movies"/>
    
      <h2>Serie</h2>
    
      <AppCardSeries :series="series"/>
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