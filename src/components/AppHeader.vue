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
    <div class="container flex-container">
        <div id="logo">
            <h1>Boolflix</h1>
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
    height: 60px;
    background-color: $primary;

    .flex-container{
        @include flexbox();
        #logo{
            text-transform:uppercase;
            color: $main;
        }
    }

}
</style>