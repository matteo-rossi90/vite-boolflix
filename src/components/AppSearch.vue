<script>

export default {
  name: 'AppSearch',
  data() {
    return {
      query: ''
    }
  }
};
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="query" placeholder="Search movies and series...">
    <button @click.prevent="$emit('search-query', query)">Cerca</button>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

.search-bar {
  font-size: 16px;

  input,
  button{
    padding: 5px 10px;
  }

  button{
    background-color: $main;
    border: $main;
    color: $text;
    cursor:pointer;
  }
}

</style>