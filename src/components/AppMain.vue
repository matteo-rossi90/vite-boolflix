<script>
import AppCard from './AppCard.vue'

export default{
    name:'AppMain',
    components:{
        AppCard
    }
}
</script>

<template>

    <div class="box-container">
        <AppCard/>
    </div>

</template>

<style scoped lang="scss">
@use '../styles/general.scss' as*;
@use '../styles/partials/mixins' as*;
@use '../styles/partials/variables' as*;


</style>