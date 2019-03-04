<template>
    <div class="vueProjet">
        <h1>Display Projects/Events</h1>

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


</style>
