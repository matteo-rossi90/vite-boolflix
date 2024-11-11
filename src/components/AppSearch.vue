<script>

export default {
  name: 'AppSearch',
  data() {
    return {
      query: ''
    }
  },
  methods:{
    search() {
      this.$emit('searchQuery', this.query);
    },
    resetSearch(){
      this.query = '',
      this.$emit('searchQuery', this.query);
    }
  }
};
</script>

<template>
  <div class="search-bar d-flex justify-content-end align-items-center">
    <input type="text" v-model="query" @input="search" placeholder="Cerca serie TV o film">
    <button @click.prevent="resetSearch">Annulla</button>
  </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;

.search-bar {
  font-size: 16px;
  width: 100%;

  input{
    width: 80%;
  }

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

@media (max-width: 1400px) {
  
  .search-bar{

    width: 40%;
   
  }
}

@media (max-width: 992px) {
  
  .search-bar{

    width: 60%;
   
  }
}

@media (max-width: 768px) {
  
  .search-bar{

    width: 80%;

    input{
      width: 60%;
    }
   
  }
}

</style>