<script>
export default {
  name: 'AppCardSeries',
  props: ['series']
};
</script>

<template>
  <div class="cards" v-for="(serie, index) in series" :key="index">
    <ul>
      <li>{{ serie.name }}</li>
      <li>{{ serie.original_name }}</li>
      <li>{{ serie.original_language }}</li>
      <li>{{ serie.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;
</style>