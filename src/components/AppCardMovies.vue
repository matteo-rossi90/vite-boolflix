<script>
//importare la funzioni
import { getFlagCode, convertToFiveScale, starRating } from '../functions';

//importare lo store
import { store } from '../store.js';


export default {
  name: 'AppCardMovies',
  props: ['movies'],
  data(){
    return{
      store,
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

      <!-- estrapolazione dei film dall'API corrispondente -->
      <div class="col-12 col-sm-6 col-md-6 col-lg-3 col mb-4" v-for="(movie, index) in movies" :key="index">

        <div class="card no-border h-100">

          <div class="card-inner no-border">

            <!-- Fronte della card -->
            <div class="card-front no-border p-0">

              <!-- Placeholder da mettere come immagine se nel link non dovesse esserci l'anteprima del film -->
              <div class="image no-border" v-if="!movie.poster_path">
                <img :src="`no_image.jpg`" class="card-img-top">
              </div>

              <!-- Immagine locandina del film estrapolata dall'API -->
              <div class="image" v-else>
                <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`">
              </div>

            </div>

            <!-- Retro della card -->
            <div class="card-back card-body p-2 text-center text-white bg-dark">

              <!-- Elenco delle informazioni sui film -->
              <ul class="list-unstyled">
                <li>
                  <strong>Titolo: </strong>
                  <span>{{ movie.title }}</span>
                </li>
                <li>
                  <strong>Titolo originale: </strong>
                  <span>{{ movie.original_title }} </span>
                </li>
                <li>

                  <!-- Se il codice della lingua in originale in API corrisponde alle lingue associate alle bandiere,
                  il sistema restituirà sempre la bandiera dello stato in cui si parla quella lingua -->
                  <span v-if="getFlagCode(movie.original_language).hasFlag">
                    <strong>Lingua originale: </strong>
                    <span :class="getFlagCode(movie.original_language).flag"></span>
                  </span>

                  <!-- Se non c'è corrispondenza tra il codice e l'elenco delle lingue con bandiere,
                  in pagina sarà stampato direttamente il codice come presentato nella API -->
                  <span v-else>
                    <strong>Lingua originale: </strong>
                    <span>
                      {{ movie.original_language }}
                    </span>
                  </span>

                </li>

                <!-- rating e voto -->
                <strong>Voto: </strong>
                <li v-html="starRating(convertToFiveScale(movie.vote_average))">
                </li>

                <!-- lista del cast -->
                <li v-if="movie.cast && movie.cast.length">
                  <strong>Cast:</strong>
                  <ul class="list-unstyled">
                    <li v-for="actor in movie.cast" :key="actor.id">{{ actor.name }}</li>
                  </ul>
                  
                </li>

                <!-- elenco generi -->
                <li v-if="movie.genres && movie.genres.length">
                  <strong>Generi:</strong>
                  <ul class="list-unstyled">
                    <li v-for="(genre, index) in movie.genres" :key="index">
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