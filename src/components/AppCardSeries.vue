<script>
//importare la funzioni
import { getFlagCode, convertToFiveScale, starRating } from '../functions';


export default {
  name: 'AppCardSeries',
  props: ['series'],
    methods:{
      getFlagCode, //funzione che permette di convertire il codice della lingua originale nella bandiera del paese
      convertToFiveScale, //funzione che converte una scala di dieci numeri in una scala di cinque numeri
      starRating //funzione che converte il punteggio da numeri a stelle
  }

};
</script>

<template>
  <div class="cards" v-for="(serie, index) in series" :key="index">
    <!-- placeholder da mettere come immagine se nel link non dovesse esserci la locandina della serie TV -->
    <div class="image" v-if="(!serie.poster_path)">
      <img :src="`no_image.jpg`">
    </div>

    <!-- immagine locandina della serie TV estrapolata dall'API -->
    <div class="image" v-else>
      <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`">
    </div>

    <!-- elenco delle informazioni sul serie TV -->
    <ul>
      <li>{{ serie.name }}</li>
      <li>{{ serie.original_name }}</li>
      <li>
        <span v-if="getFlagCode(serie.original_language) !== serie.original_language"
          :class="`fi fi-${getFlagCode(serie.original_language)}`">
        </span>
        <span v-else>
          {{ serie.original_language }}
        </span>
      </li>
      <li v-html="starRating(convertToFiveScale(serie.vote_average))"></li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;
</style>