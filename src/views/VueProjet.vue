<template>
    <div class="vueProjet">
        <h1>Voir les Projets</h1>

        <div class="containerProj">


            <displayProj />

        </div>
    </div>
</template>


<script>
    import displayProj from '@/components/CompProj.vue'

    export default {
        components: {
            displayProj
        },
    }

</script>


<style>
    .containerProj {
        height: 100%;
        margin: auto;
        display: flex;
        width: 80%;
        box-sizing: border-box;
        flex-wrap: wrap;
    }

</style>
