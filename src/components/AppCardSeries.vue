<script>
//importare la funzioni
import { getFlagCode, convertToFiveScale, starRating } from '../functions';

//importare lo store
import { store } from '../store.js';


export default {
  name: 'AppCardSeries',
  props: ['series'],
  data(){
    return{
      store
    }
  },
    methods:{
      getFlagCode, //funzione che permette di convertire il codice della lingua originale nella bandiera del paese in base a condizioni
      convertToFiveScale, //funzione che converte una scala di dieci numeri in una scala di cinque numeri
      starRating //funzione che converte il punteggio da numeri a stelle
  }

};
</script>

<template>

  <div class="container my-4">

    <div class="row container-row">

      <!-- estrapolazione delle serie TV dall'API corrispondente -->
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 col mb-4" v-for="(serie, index) in series" :key="index">

        <div class="card no-border h-100">

          <div class="card-inner no-border">

            <!-- Fronte della card -->
            <div class="card-front no-border p-0">

              <!-- Placeholder da mettere come immagine se nel link non dovesse esserci l'anteprima delle serie -->
              <div class="image no-border" v-if="!serie.poster_path">
                <img :src="`no_image.jpg`" class="card-img-top">
              </div>

              <!-- Immagine locandina delle serie estrapolata dall'API -->
              <div class="image no-border" v-else>
                <img :src="`https://image.tmdb.org/t/p/w342${serie.poster_path}`">
              </div>

            </div>

            <!-- Retro della card -->
            <div class="card-back card-body p-2 text-center text-white bg-dark">

              <!-- Elenco delle informazioni sulle serie TV -->
              <ul class="list-unstyled">
                <li>
                  <strong>Titolo: </strong>
                  <span>
                    {{ serie.name }}
                  </span>
                </li>
                <li>
                   <strong>Titolo originale: </strong>
                  <span>
                    {{ serie.original_name }}
                  </span>
                </li>
                <li>

                  <!-- Se il codice della lingua in originale in API corrisponde alle lingue associate alle bandiere,
                  il sistema restituirà sempre la bandiera dello stato in cui si parla quella lingua -->
                  <span v-if="getFlagCode(serie.original_language).hasFlag">
                    <strong>Lingua originale: </strong>
                    <span :class="getFlagCode(serie.original_language).flag"></span>
                  </span>

                  <!-- Se non c'è corrispondenza tra il codice e l'elenco delle lingue con bandiere,
                  in pagina sarà stampato direttamente il codice come presentato nella API -->
                  <span v-else>
                    <strong>Lingua originale: </strong>
                    {{ serie.original_language }}
                  </span>

                </li>

                <!-- rating e voto -->
                <strong>Voto: </strong>
                <li v-html="starRating(convertToFiveScale(serie.vote_average))"></li>

                <!-- lista del cast -->
                <li v-if="serie.cast && serie.cast.length">
                  <strong>Cast:</strong>
                  <ul class="list-unstyled">
                    <li v-for="actor in serie.cast" :key="actor.id">{{ actor.name }}</li>
                  </ul>
                </li>

                <!-- elenco generi -->
                <li v-if="serie.genres && serie.genres.length">
                  <strong>Generi:</strong>
                  <ul class="list-unstyled">
                    <li v-for="(genre, index) in serie.genres" :key="index">
                      <span>Genere {{ index + 1 }}: {{ genre.name }}</span>
                    </li>
                  </ul>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</template>


<style scoped lang="scss">
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;
</style>