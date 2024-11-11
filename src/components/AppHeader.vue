<script>
import AppSearch from './AppSearch.vue';

export default {
  name: 'AppHeader',
  components: {
    AppSearch
  },
  methods: {
    handleSearch(query) {
      this.$emit('searchQuery', query);
    }
  }
};
</script>

<template>
  <header>
    <div class="container d-flex justify-content-between align-items-center gap-5">
      <div id="logo">
          <h1>Boolflix</h1>
      </div>
      <div class="display-logo">
          <h1>B</h1>
      </div>
      
      <AppSearch @searchQuery="handleSearch"/>
    
    </div>
    
  </header>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

header{
    height: 65px;
    background-color: $primary;
    padding: 10px;

    .display-logo{
      display:none;
    }

    #logo{
        text-transform:uppercase;
        color: $main;
        font-weight: bold
    }

    @media (max-width: 768px){
      #logo{
        display: none;
      }
      .display-logo{
        display:block;
        color: $main;
      }
    }
  }


</style>