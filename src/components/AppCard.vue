<script>

export default{
    name:'AppCard'

}
</script>

<template>

<div class="box-card container-padding">

    <div id="box-movies">
        <h2>Film</h2>
        <div class="cards">
            <ul>
                <li>Titolo</li>
                <li>Titolo originale</li>
                <li>Lingua</li>
                <li>Voto</li>
            </ul>
        </div>
    </div>

    <div id="box-series">
        <h2>Serie TV</h2>
        <div class="cards">
        <ul>
            <li>Titolo</li>
            <li>Titolo originale</li>
            <li>Lingua</li>
            <li>Voto</li>
        </ul>
</div>
    </div>

</div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;


</style>