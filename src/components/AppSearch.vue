<script>
export default{
    name:'AppSearch'
}
</script>

<template>
    <form action="#">
        <input type="text" placeholder="Cerca">
        <button>Cerca</button>
    </form>
</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;



#search{
    color: $text
}

</style>
