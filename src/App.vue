<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'

//importare lo store
import {store} from './store.js'

//importare axios
import axios from 'axios';

export default{
  name: 'App',
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
        store
    }
  },
  methods:{
    getMovies(){
      axios.get(store.apiURLMovies)
      .then(response =>{
        console.log(response.data);
        this.store.movies = response.data.results;
      })
    }
  },
  mounted(){
    this.getMovies;
  }
    
}
</script>

<template>
  <AppHeader/>
  <main>
    <AppMain/>
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

</style>
