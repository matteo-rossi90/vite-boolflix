<script>
export default {
  name: 'AppCardMovies',
  props: ['movies']
};
</script>

<template>
  <div class="cards" v-for="(movie, index) in movies" :key="index">
    <ul>
      <li>{{ movie.title }}</li>
      <li>{{ movie.original_title }}</li>
      <li>{{ movie.original_language }}</li>
      <li>{{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

</style>