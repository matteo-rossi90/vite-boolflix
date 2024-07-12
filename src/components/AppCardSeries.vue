<script>
import { getFlagCode } from '../flagUtils';

export default {
  name: 'AppCardSeries',
  props: ['series'],
    methods:{
      getFlagCode
  }

};
</script>

<template>
  <div class="cards" v-for="(serie, index) in series" :key="index">
    <ul>
      <li>{{ serie.name }}</li>
      <li>{{ serie.original_name }}</li>
      <li>
        <span :class="`fi fi-${getFlagCode(serie.original_language)}`"></span>
      </li>
      <li>{{ serie.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;
</style>