<script>
import AppSearch from './AppSearch.vue'

// //importare axios
// import axios from 'axios';

// //importare lo store
// import store from '../store.js'

export default{
    name:'AppHeader',
    components:{
        AppSearch
    },
    // data(){
        // return{
            // store
        // }
    // }

}
</script>

<template>
    <header class="container-padding">
        <div id="logo">
            <h1>Boolflix</h1>
        </div>
        <div id="search">
            <AppSearch/>

        </div>
    </header>

</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

header{
    height: 60px;
    background-color: $primary;
    @include flexbox();

    #logo{
        text-transform:uppercase;
        color: $main;
    }

    #search{
        color: $text
    }
}

</style>