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
  <div class="box-container">
    <div class="box-card container">
        <h2>Film</h2>
      <div class="box-content">
        <AppCardMovies :movies="movies"/>
      </div>
      <h2>Serie</h2>
      <div class="box-content">
        <AppCardSeries :series="series"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

h2{
  margin: 10px 0;
}

.box-content {
  @include flexbox(start);
  flex-wrap: wrap;

}
</style>